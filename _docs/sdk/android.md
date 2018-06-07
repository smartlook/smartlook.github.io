---
title: "Android"
subtitle: "SDK for screen recording and analytics."
---

With this SDK developers and/or companies should be able to:

* Replay session recordings in our web player
* See app structure as an ordered graph where nodes are unique screens
* Set their own custom analytics event and do complex funnels/queries in the dashboard
* Get automatic crash reports


## Project build

In case you want to use SDK in Android project add these lines to your root gradle project.

```android
allprojects {
  repositories {
    jcenter()

    maven {
      url "http://artifactory.smartlook.com:8081/artifactory/libs-release-local"
    }
  }
}
```

Also add this line to your module setting (add correct VERSION).

`implementation('com.smartlook.recording:app:VERSION')`

## How to use

In order for SDK to work you have to call: `Smartlook.init(YOUR_API_KEY)` method as soon as possible. You can do that in `onCreate` method in your Application class or in Activity that is an entry point to your app. If you are using any super class as a wrapper for the Activity feel free to call init method in super `onCreate` method. SDK keeps track of its own state so you don't have to.

If you call `Smartlook.init(YOUR_API_KEY)` method later in the app SDK will still work. However anything that happened before the call would not be accessible -> no recording/analytics.

Developer can also mark session with some internal key that is associated to the user via `identify(@NonNull String userId)` method or more detailed method `identify(@NonNull String userId, final JSONObject userProperties)`. However we should alert developers that those keys should be non sensitive i.e. no e-mail, name etc. - I believe it is a law in at least US.

In case you are using TextureView, you can try different init method: `Smartlook.init(YOUR_API_KEY, true)` It has some experimental features as TextureView recording etc.

## Session recording

Developers can use `markViewAsSensitive(View view)` to mark any view as sensitive. Marked view will be blacked out in the recording. Later we might introduce some automatic options like `isAnyInputSensitive(boolean isSensitive)` but it is not so important right now.

Currently we support API 18+ for recording. In future we would like to extend recording functionality to any API.

## Crash reporting

In case developer did not handle any exception SDK will automatically report stackTrace - basically last action in the session. This works our of box and is sent to our servers in case analytics/errors is applicable.

Because app process is killed by the crash video is going to be rendered and sent to the server once new session is started.

Proguard mapping file still not available -> Beta functionality.

## Analytics

SDK provides several methods for analytics. First one is `track(@NonNull String eventName)` which is very simple event without any props. Second one is `track(@NonNull String eventName, JSONObject eventProperties)` with additional data which can be used in funnels or any additional filtering. In case developers want to be sure that data are sent to our servers right away, they should call `flush()` method.

Next method I added is `timeEvent(@NonNull String eventName)`. It is not sending any event, but once developer calls any `track(...)` method with corresponding eventName, it will also add extra duration property. This might be usefull for developers to measure any time sensitive or long running actions in the app.

Our SDK also supports super props. Those can be set by `setGlobalProperties(JSONObject eventProperties)` method. Such props are added to any event sent from the client in the future. Properties in global scope has higher priority so in merging process those from global scope will override custom props with the same key.

Developer can also use `setGlobalImmutableProperties(JSONObject eventProperties)` method. Once property is set, it cannot be changed. This can be helpful i.e. in cases when we want to set something only once and be sure we will never touch that again. Immutable props are superior to the custom and normal global ones -> will override same keys.

Methods accepting `JSONObject` also exists in alternative form accepting `Bundle` object.

In case developer wants to remove any global props he can do that by `removeSuperPropertyByKey(String propertyKey)` or `removeAllSuperProperties()` methods. Any global property is stored until app is uninstalled.
