---
title: "Android"
subtitle: "SDK for screen recording and analytics for Android devices."
---

With this SDK developers and/or companies should be able to:

* Replay session recordings in our web player
* See app structure as an ordered graph where nodes are unique screens
* Set their own custom analytics event and do complex funnels/queries in the dashboard
* Get automatic crash reports


## Project build

In case you want to use SDK in Android project add these lines to your gradle project file:

```android
allprojects {
  repositories {
    maven {
      url "https://sdk.smartlook.com/android/release"
    }
  }
}
```

Also add this line to your module gradle: `implementation('com.smartlook.recording:app:0.9.0.0.8.1-beta')`


## API Reference

Applications can interact with the SDK using public SDK methods.

### Initialize Smartlook

You must supply your **Smartlook SDK key** which can be acquired in the Smartlook Dashboard.

Use: `Smartlook.init(YOUR_API_KEY)`

This method initializes the SDK. Best place to call this method is Application class or any entry point to your app.

In case you are using TextureView, you can try different init method: `Smartlook.init(YOUR_API_KEY, true)` It has some experimental features as TextureView recording etc.

Currently we support API 18+ for recording. In future we would like to extend recording functionality to any API.

### Mark sensitive views

Use: `markViewAsSensitive(View view)`

You can mark sensitive views to be hidden from recordings. EditTexts and Webviews are hidden by default. In case you are using Webview for rendering of non-sensitive information, feel free to temporary allow their recording: `enableWebviewRecording(boolean enable)`

### Recording marking

Developer can also mark session with some internal key that is associated to the user via `identify(@NonNull String userId)` method or more detailed method `identify(@NonNull String userId, final JSONObject userProperties)`.


## Analytics

SDK provides several methods for analytics. First one is `track(@NonNull String eventName)` which is very simple event without any props. Second one is `track(@NonNull String eventName, JSONObject eventProperties)` with additional data which can be used in funnels or any additional filtering. In case developers want to be sure that data are sent to our servers right away, they should call `flush()` method.

Next method is `timeEvent(@NonNull String eventName)`. It is not sending any event, but once developer calls any `track(...)` method with corresponding eventName, it will also add extra duration property. This might be usefull for developers to measure any time sensitive or long running actions in the app.

Our SDK also supports super props. Those can be set by `setGlobalProperties(JSONObject eventProperties)` method. Such props are added to any event sent from the client in the future. Properties in global scope has higher priority so in merging process those from global scope will override custom props with the same key.

Developer can also use `setGlobalImmutableProperties(JSONObject eventProperties)` method. Once property is set, it cannot be changed. This can be helpful i.e. in cases when we want to set something only once and be sure we will never touch that again. Immutable props are superior to the custom and normal global ones -> will override same keys.

Methods accepting `JSONObject` also exists in alternative form accepting `Bundle` object.

In case developer wants to remove any global props he can do that by `removeSuperPropertyByKey(String propertyKey)` or `removeAllSuperProperties()` methods. Any global property is stored until app is uninstalled.


## Crash reporting

In case developer did not handle any exception SDK will automatically report stackTrace - basically last action in the session. This works our of box and is sent to our servers in case analytics/errors is applicable.

Because app process is killed by the crash video is going to be rendered and sent to the server once new session is started.

Proguard mapping file still not available -> Beta functionality.


## Crashlytics

In case you are using Crashlytics in your project, once Fabric setup is done, you can call `enableCrashlytics(boolean enable)` method and we will do our best to add extra information directly to your crash report.

![New key-value pair](https://sdk.smartlook.com/android/docs/crash_docs_pair.png)

In Crashlytics dashboard, there should be new `SMARTLOOK SESSION URL` key-value pair with link to your Smartlook dashboard. Once opened, you can directly play recording just before mentioned crash by Crashlytics.
