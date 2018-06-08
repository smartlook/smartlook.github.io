---
title: "Android"
subtitle: "SDK for screen recording and analytics for Android devices."
---

With this SDK developers and/or companies should be able to:

* Replay session recordings in our web player
* See app structure as an ordered graph where nodes are unique screens
* Set their own custom analytics event and do complex funnels/queries in the dashboard
* Get automatic crash reports

More info about SDK architecture can be found at this [Atlassian page](https://smartsupp.atlassian.net/wiki/spaces/DEV/pages/30539777/Android+SDK){:target="_blank"}.

## Project build

Since we are testing SDK distribution via maven, there is a new private [Artifactory based repo](http://artifactory.smartlook.com:8081/artifactory/){:target="_blank"}.

Upload of new SDK version can be done via `./gradlew assembleRelease artifactoryPublish --debug` command. Upload is allowed only to certain users. Access to admin account can be found in portadi -> You can create new user. Once you have credentials, add those to your general `gradle.properties`.

In case you want to use SDK in Android project, add these lines to your root gradle project:

```android
allprojects {
  repositories {
    jcenter()

    maven {
      url "http://artifactory.smartlook.com:8081/artifactory/libs-release-local"
      credentials {
        username = "${artifactory_username}"
        password = "${artifactory_password}"
      }
    }
  }
}
```

and this line to your module setting (add correct VERSION):

`implementation('com.smartlook.recording:app:VERSION')`

In case you want to skip Artifactory step (not recommended since distribution of SDK might be tricky + mavem POM merging is complex), you can use these steps for local build:

Only thing you have to do is to clone the project and set few lines in the gradle files of desired project. In `settings.gradle`, set:

* include LIST_OF_YOUR_MODULES, ':smartlook'
* project(':smartlook').projectDir = new File(PATH_TO_APP_MODULE_OF_THE_SDK)

and also add this line to the gradle file of your app (not project):

* compile project(':smartlook')

Later we will upload SDK to the jcenter/maven so it can be included into the project by simple one-liner.

So far gradle plugin version, minimal supported Android SDK etc. is not finalised yet. This will be part of the final optimalization.

Build process might and probably will change in the future so be carefull and always read this base Readme file! - Will be described later in recording section.

## ProGuard
Both debug and release builds are doing obfuscation like ProGuard actions. `consumerProguardFiles` directive makes sure that any app using our SDK is going to apply correct rules while using ProGuard. Be aware that releasu build is removing any logs from the app (on bytecode level) so in case you want to test the SDK, use debug version.

## How to use
In order for SDK to work you have to call: `Smartlook.init(YOUR_API_KEY)` method as soon as possible. You can do that in `onCreate` method in your Application class or in Activity that is an entry point to your app. If you are using any super class as a wrapper for the Activity, feel free to call init method in super `onCreate` method. SDK keeps track of its own state so you don't have to.

If you call `Smartlook.init(YOUR_API_KEY)` method later in the app, SDK will still work. However anything that happened before the call would not be accessible -> no recording/analytics.

Developer can also mark session with some internal key that is associated to the user via `identify(@NonNull String userId)` method or more detailed method `identify(@NonNull String userId, final JSONObject userProperties)`. However, we should alert developers that those keys should be non sensitive, i.e. no e-mail, name etc. - I believe it is a law in at least US.

## Session
Session starts when app is brought to foreground. Once home button is pressed, app crashes or user turns the screen off, SDK will end a session. Any data related to the session are cached until we are able to upload them to the server. However before public release, we should probably change this to cache last i.e. 5 sessions so we do not store data without any limit. - This limit might be higher in case recording is not applicable -> only analytics data.

Session consists of **recording**, **analytics**, **screenshots** and **generic/static** data. Upload of different types of the data is triggered in custom manner. I.e. **recording** is uploaded once app has no focus, **screenshots** will be uploaded in realtime if possible, **analytics** periodically in case user did not call forced upload (flush) and **generic/static** data is uploaded while we are communicating with our backend at the session start.

Models/examples of the data will be provided later in this document.

## Session recording
Recording of the screen and creation of the app structure (nodes as unique screenshots of activities) works out of box. Since settings for the current user might be obtained later (i.e. user is offline), SDK will create some basic video and once we have settings, we will do our best to meet those settings: change resolution, bitrate etc... In case we have settings in place, SDK will do the video according to the instructions.

Developers can use `markViewAsSensitive(View view)` to mark any view as sensitive. Marked view will be blacked out in the recording. Later we might introduce some automatic options like `isAnyInputSensitive(boolean isSensitive)` but it is not so important right now.

Currently we are using **MediaCodec/MediaMuxer** for video creation. That means we are supporting API 18+ for recording. In future we would like to extend recording functionality to any API.

## Crash reporting
In case developer did not handle any exception, SDK will automatically report stackTrace - basically last action in the session. This works our of box and is sent to our servers in case analytics/errors is applicable.

Because app process is killed by the crash, video is going to be rendered and sent to the server once new session is started.

## Analytics
SDK provides several methods for analytics. First one is `track(@NonNull String eventName)` which is very simple event without any props. Second one is `track(@NonNull String eventName, JSONObject eventProperties)` with additional data which can be used in funnels or any additional filtering. In case developers want to be sure that data are sent to our servers right away, they should call `flush()` method.

Next method I added is `timeEvent(@NonNull String eventName)`. It is not sending any event, but once developer calls any `track(...)` method with corresponding eventName, it will also add extra duration property. This might be usefull for developers to measure any time sensitive or long running actions in the app.

Our SDK also supports super props. Those can be set by `setGlobalProperties(JSONObject eventProperties)` method. Such props are added to any event sent from the client in the future. Properties in global scope has higher priority so in merging process those from global scope will override custom props with the same key.

Developer can also use `setGlobalImmutableProperties(JSONObject eventProperties)` method. Once property is set, it cannot be changed. This can be helpful i.e. in cases when we want to set something only once and be sure we will never touch that again.
Immutable props are superior to the custom and normal global ones -> will override same keys.

Methods accepting `JSONObject` also exists in alternative form accepting `Bundle` object.

In case developer wants to remove any global props, he can do that by `removeSuperPropertyByKey(String propertyKey)` or `removeAllSuperProperties()` methods.

Any global property is stored until app is uninstalled.

## Scalability
Since memory on mobile devices can vary, we have to be sure our SDK can scale properly. For that reason we have several customizable tools. **Analytics** data batch has time or size limit. Once we have i.e. 200 events in the memory or once i.e. 30 seconds passed, we will take events from the event queue and save them as a batch. In case upload was successful, batch is deleted. Otherwise cached and sent later. In case user is offline for long time and we have too many cached batches, SDK will check internal free space. Until the ratio (SDK data) / (free space) < 40 is true, SDK will save recordings and analytics. Once threshold is broken, nothing is saved.

**Video recording** batch is limited to N seconds - this value is obtained via session init call. Then rendered and sent to server. Similar logic regarding the deleting applies.