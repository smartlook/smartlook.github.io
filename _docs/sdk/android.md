---
title: "Android"
subtitle: "SDK for screen recording and analytics for Android devices."
description: "This SDK offers several options to developers and/or companies."
---

## What you can do

* Replay session recordings in our web player
* Capture all of the user interactions and find ones you care about in the Events manager
* Set your own custom analytics event and do complex funnels/queries in the dashboard
* Collect referrer value and source of installation per visitor

## Reporting issues and changelog

For more information on how to report issues please check our [Smartlook SDK Support section](https://smartlook.github.io/docs/sdk/support/#how-to-submit-an-issue).

[Smartlook Android SDK changelog](https://github.com/smartlook/smartlook-android-sdk) reports all notable improvements, changes and fixes in SDK releases.

## Supported versions

Currently, we support API 18+ for recording.

## WiFi / mobile connection / offline

By default SDK uploads sessions only on **WiFi** if you want to upload sessions on mobile connections too, you need to enable this in your project setting in the dashboard. 

## Installation

Add the following dependency in your app's build.gradle:

```gradle
implementation('com.smartlook.recording:app:1.5.2-native')
```

And add the following in your project's build.gradle:

```gradle
allprojects {
  repositories {
    maven {
      url "https://sdk.smartlook.com/android/release"
    }
  }
}
```

## API Reference

Applications can interact with the SDK using public SDK methods.

### Setup

You need to provide your **Smartlook SDK Key** which can be acquired in the [Smartlook Dashboard](https://www.smartlook.com/app/dashboard/settings/projects){:target="_blank"}.
{: .alert .alert-warning }

If you want to setup SDK and start recording, use:

```java
Smartlook.setupAndStartRecording(String YOUR_API_KEY)
```

In case you want to start recording later use:

```java
Smartlook.setup(String YOUR_API_KEY)
```

Best place to call one of these methods is in Application class or any entry point to your app.

### Setup parameters

Some recording parameters can be configured on setup:

| Parameter           | Required | Description                                                                                                                                        | Default value        |
|---------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| apiKey              | yes      | Unique 40 character key identifying your app (can be found in the dashboard).                                                                      | ""                   |
| fps                 | no       | Recorded video frame rate (allowed values between 2 and 10). Note: Changing this value will override frame rate set in the Dashboard. | 2                    |
| experimental        | no       | Set this to true to enable some experimental features as TextureView/Maps/MapBox recording etc.                                                    | false                |
| activity            | no       | Actual activity reference is required when setting the SDK outside of Application class. Full example shown here.                                  | null                 |
| renderingMode       | no       | Define the way SDK is going to capture screen image data. Full documentation here.                                                                 | RenderingMode.NATIVE |
| renderingModeOption | no       | Further customization of rendering mode.                                                                                                                  | null                 |

Full SDK setup configuration can be done with `SetupOptionsBuilder`, this allows you to set any of setup parameters shown above:

```java
Smartlook.SetupOptionsBuilder builder = new Smartlook.SetupOptionsBuilder(@NotNull String apiKey)
        .setFps(int fps)
        .setExperimental(boolean experimental)
        .setActivity(@NonNull Activity activity)
        .setRenderingMode(@RenderingMode String renderingMode)
        .setRenderingMode(@RenderingModeOption String renderingModeOption);\n
Smartlook.setupAndStartRecording(builder.build());
```

You can replace the last line with \`Smartlook.setup()\` and start the recording later.

### Start and stop recording

If you have SDK set-up you can start or stop recording by calling:

```java
Smartlook.startRecording()
Smartlook.stopRecording()
```

### Check if SDK is recording

If you are using `startRecording()` and `stopRecording()` methods it might be handy to know if SDK is currently recording or not.
Simply call:

```java
Smartlook.isRecording()
```

### Session/Visitor reset

When session or user should be reset while the app is running, there is a handy method for it too:

```java
Smartlook.resetSession(boolean resetUser)
```

The `resetUser` attribute indicates, whether the user identity should be also reset, or whether the new session should retain it.

### Blacklisted views
SDK contains a list of blacklisted/sensitive views. These views won't be recorded (only single color rectangle is drawn instead of the view).

You can mark view(s) as blacklisted by calling:

```java
Smartlook.registerBlacklistedView(View view)
Smartlook.registerBlacklistedViews(List<View> views)
```

Or you can tag them directly in xml layout file:

```xml
<View>
    <tag android:id="@id/smartlook_blacklisted_view"/>
</View>
```

If view(s) is no longer sensitive you can remove it from blacklist:

```java
Smartlook.unregisterBlacklistedView(View view)
Smartlook.unregisterBlacklistedViews(List<View> views)
```

### Blacklisted classes

You can blacklist view(s) of certain Class (typicaly custom views):

```java
Smartlook.registerBlacklistedClass(Class class)
Smartlook.registerBlacklistedClasses(List<Class> classes)
```

Note that `EditText` and `WebView` are **blacklisted by default**. If you want to remove them or any other class from blacklist, use:

```java
Smartlook.unregisterBlacklistedClass(Class class)
Smartlook.unregisterBlacklistedClasses(List<Class> classes)
```

### Whitelisted views

In case you need some view(s) to be recorded even if it is instance of a blacklisted class, you can whitelist it:

```java
Smartlook.registerWhitelistedView(View view)
Smartlook.registerWhitelistedViews(List<View> views)
```

Or you can tag them directly in xml layout file:

```xml
<View>
    <tag android:id="@id/smartlook_whitelisted_view"/>
</View>
```

You can remove view(s) from whitelist:

```java
Smartlook.unregisterWhitelistedView(View view)
Smartlook.unregisterWhitelistedViews(List<View> views)
```

### Blacklisted items color

You can configure the color of the rectangles that are drawn instead of sensitive *items* (views/classes):

```java
Smartlook.setBlacklistedItemsColor(@ColorInt int color);
```

### Sensitive mode

In case you don't want SDK to record user video, but still, want it to send analytic events you can use sensitive mode.

```java
Smartlook.startFullscreenSensitiveMode()
```

Instead of application recording, the video will be black when the sensitive mode is active. You can change sensitive mode fill color by starting it like this:

```java
Smartlook.startFullscreenSensitiveMode(@ColorInt int color) 
```

Sensitive mode can be stopped:

```java
Smartlook.stopFullscreenSensitiveMode()
```

If you want to check if the sensitive mode is active, use:

```java
Smartlook.isFullscreenSensitiveModeActive()
```

### Add user id & properties

You can specify your app’s user identifier by calling:

```java 
Smartlook.setUserIdentifier(@NonNull String identifier)
``` 

You can then lookup those identifiers in the Dashboard to find specific user’s recordings.

Additional user information, such as name, email and other custom properties can be set by calling:

```java 
Smartlook.setUserIdentifier(@NonNull String identifier, JSONObject sessionProperties)
Smartlook.setUserIdentifier(@NonNull String identifier, Bundle sessionProperties)
Smartlook.setUserIdentifier(@NonNull String identifier, String sessionPropertiesJsonString)
``` 
You’ll see those properties in the Dashboard at Visitor details.

### Analytics

SDK records several analytic events by default:
* Activity changes
* Fragment changes
* Focus events
* Orientation events
* Clicked Views

But you can track whatever you want by using custom events.

#### Custom events

You can track custom event by calling:

```java
Smartlook.trackCustomEvent(@NonNull String eventName)
```

If you need to send some additional data with custom event use:

```java
Smartlook.trackCustomEvent(@NonNull String eventName, JSONObject eventProperties)
Smartlook.trackCustomEvent(@NonNull String eventName, Bundle eventProperties)
Smartlook.trackCustomEvent(@NonNull String eventName, @NotNull String key, String value)
```

Additional data can be used in **funnels** or any additional **filtering**.

#### Navigation event

Sometimes we are not able to detect screen trasitions (i.e. for Unity games or Flutter, etc.), you can add these events manually by calling:

```java
Smartlook.trackNavigationEvent(@NotNull String name, @ViewState String viewState)
```

where `viewState` can be either `ViewState.START` or `ViewState.STOP`.

You can also explicitly tell the SDK if the navigation event happened between `Activities` of `Fragments`:

```java
Smartlook.trackNavigationEvent(@NotNull String name, @ViewType String type, @ViewState String viewState)
```

where viewType is one of `ViewType.ACTIVITY` or `ViewType.Fragment`. 

#### Timed event

In case you want to measure the duration of any time-sensitive or long-running actions in the app.
You can call one of:

```java
Smartlook.startTimedCustomEvent(@NotNull String eventName)
Smartlook.startTimedCustomEvent(@NotNull String eventName, JSONObject eventProperties)
Smartlook.startTimedCustomEvent(@NotNull String eventName, Bundle eventProperties)
```

This will **not send** out any events but returns **unique eventId** that can be used to further identify the event.

To send out event with **duration** you need to call one of:

```java
Smartlook.stopTimedCustomEvent(@NotNull String eventId)
Smartlook.stopTimedCustomEvent(@NotNull String eventId, JSONObject eventProperties)
Smartlook.stopTimedCustomEvent(@NotNull String eventId, Bundle eventProperties)
```

with coresponding `eventId`.

Properties set in `startTimedCustomEvent` will be merged with properties set in `stopTimedCustomEvent`. Properties from `stopTimedCustomEvent` have higher priority and will rewrite conflicting properties from `startTimedCustomEvent`.

In case the event fails call `cancelTimedCustomEvent` instead of `stopTimedCustomEvent` and provide a `reason` of failure:

```java
Smartlook.cancelTimedCustomEvent(@NotNull String eventId, String reason,)
Smartlook.cancelTimedCustomEvent(@NotNull String eventId, String reason, JSONObject eventProperties)
Smartlook.cancelTimedCustomEvent(@NotNull String eventId, String reason, Bundle eventProperties)
```

The behaviour of stop and cancel is the same regarding `eventProperties`.

Typical use of timed event might look like this:
```java
String eventID = Smartlook.startTimedCustomEvent("duration_event")
Thread.sleep(1000) //long running operation
Smartlook.stopTimedCustomEvent(eventId)
```
In this case `duration_event` will have duration property set to circa `1000ms`.

#### Custom name for click events

SDK detects click events automatically. The event name consists of `Activity` name, `View` type (`Button`, etc.) and `id`.

Instead of `id` you can set your custom value by providing the `View` with `@id/smartlook_custom_name` `tag`:

```xml
<View>
    <tag android:id="@id/smartlook_custom_name" android:value="Custom name"/>
</View>
```

#### Global event properties

Event super properties can be set by calling:

```java
Smartlook.setGlobalEventProperties(JSONObject globalEventProperties, boolean immutable)
Smartlook.setGlobalEventProperties(Bundle globalEventProperties, boolean immutable)
Smartlook.setGlobalEventProperties(String globalEventPropertiesJsonString, boolean immutable)
Smartlook.setGlobalEventProperty(@NotNull String key, @NotNull String value, boolean immutable)
```

Such properties are added to any event sent from the client in the future. Properties in global scope have higher priority so in merging process those from global scope will **override** custom properties with the same key.

Properties set to be `immutable` have the highest priority and once set they cannot be overridden (only removed).

### Remove global event property
If you want to remove some global property with a given key call:

```java
Smartlook.removeGlobalEventProperty(String propertyKey)
```

Or you can remove all global event properties:

```java
Smartlook.removeAllGlobalEventProperties()
```

Note that global event properties are stored until they are not removed or the app is uninstalled.

## Crash reporting

In case developer did not handle any exception SDK will automatically report stack trace. This works out of the box and is sent to our servers in case analytics/errors are applicable.

Because the app process is killed by the crash, video is going to be rendered and sent to the server once a new session is started (next application start).

Proguard mapping file still not available -> Beta functionality.

## Crashlytics

In case you are using Crashlytics in your project, once Crashlytics setup is done, you can call:
```java
Smartlook.enableCrashlytics(boolean enable)
```

![New key-value pair](https://sdk.smartlook.com/android/docs/crash_docs_pair.png)

Then in Crashlytics dashboard, there should be a new `SMARTLOOK SESSION URL` key-value pair with link to your Smartlook dashboard. Once opened, you can directly play recording just before the crash.

## Referrer

SDK automatically collects referrer value and source of installation per visitor and displays it in Dashboard. 
In some cases you might want to set custom referrer by yourself, you can do this by calling:

```java
Smartlook.setReferrer(String referrer, String source)
```

## Shareable session URL

You can obtain URL leading to the dashboard for a currently recorded session:

```java
Smartlook.getDashboardSessionUrl(boolean withCurrentTimestamp)
```

## Shareable visitor URL

You can obtain URL leading to the visitor overview in dashboard:

```java
Smartlook.getDashboardVisitorUrl()
```

This URL can then be shared to everyone who has access to the dashboard.

### Network Interceptor
comming soon

## Rendering mode [BETA]

You can configure the way of how the SDK captures/creates screen image for recording. There are two main rendering modes:

| NATIVE |  WIREFRAME |
:-------------------------:|:-------------------------:
<img src="/assets/img/docs/sdk/renderingMode/rendering_native.png" alt="rendering mode native" width="300"/> | <img src="/assets/img/docs/sdk/renderingMode/rendering_wireframe.png" alt="rendering mode wireframe" width="300"/>

Rendering mode can be set on SDK setup:

```java
Smartlook.setupAndStartRecording(String apiKey, @RenderingMode String renderingMode)
```

or can be changed when SDK already runs:

```java
Smartlook.setRenderingMode(@RenderingMode String renderingMode)
```

**Wireframe** rendering mode can be further configured by setting `RenderingModeOption`:

| WIREFRAME | BLUEPRINT | ICON_BLUEPRINT |
:-------------------------:|:-------------------------:|:-------------------------:
<img src="/assets/img/docs/sdk/renderingMode/rendering_wireframe.png" alt="rendering mode native" width="250"/> | <img src="/assets/img/docs/sdk/renderingMode/rendering_blueprint.png" alt="rendering mode wireframe" width="250"/> | <img src="/assets/img/docs/sdk/renderingMode/rendering_icon_blueprint.png" alt="rendering mode native" width="250"/>

You can set RenderingModeOption in setup or on run like this:

```java
Smartlook.setupAndStartRecording(String apiKey, 
                                 @RenderingMode String renderingMode,
                                 @RenderingModeOption String renderingModeOption)
```
or
```java
Smartlook.setRenderingMode(@RenderingMode String renderingMode,
                           @RenderingModeOption String renderingModeOption)
```
