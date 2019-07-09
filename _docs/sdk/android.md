---
title: "Android"
subtitle: "SDK for screen recording and analytics for Android devices."
description: "This SDK offers several options to developers and/or companies."
---

## What you can do

* Replay session recordings in our web player
* Capture all of the user interactions and find ones you can about in the Events manager
* Set your own custom analytics event and do complex funnels/queries in the dashboard
* Collect referrer value and source of installation per visitor

## Reporting issues and changelog

For more information on how to report issues please check our [Smartlook SDK Support section](https://smartlook.github.io/docs/sdk/support/#how-to-submit-an-issue).

[Smartlook Android SDK changelog](https://github.com/smartlook/smartlook-android-sdk) reports all notable improvements, changes and fixes in SDK releases.

## Supported versions

Currently, we support API 18+ for recording.

## Installation

Add the following dependency in your app's build.gradle:

```gradle
implementation('com.smartlook.recording:app:0.9.0.2.5.7-beta')
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

If you want to setup SDK and start recording use:

```java
Smartlook.setupAndStartRecording(String YOUR_API_KEY)
```

In case you want to start recording later use:

```java
Smartlook.setup(String YOUR_API_KEY)
```

Best place to call one of these methods is in Application class or any entry point to your app.

### Setup parameters

|    Parameter   | Required |                                                                         Description                                                                         | Default value |
|:--------------:|:--------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------:|---------------|
|    `apiKey`    |    yes   | Unique 40 character key identifying your app (can be found in dashboard).                                                                                   | ""            |
|      `fps`     |    no    | Recorded video framerate (allowed values between 2 and 10).                                                                                                 | 2             |
| `experimental` |    no    | Set this to true to enable some experimental features as **TextureView/Maps/MapBox** recording etc.                                                         | false         |
|   `activity`   |    no    | In case you need to setup SDK later i.e. fetching your API key or in the middle of the activity lifecycle, call setup with activity reference as parameter. | null          |

### Start and stop recording

If you have SDK set-up you can start or stop recording by calling:

```java
Smartlook.startRecording()
Smartlook.stopRecording()
```

### Check if SDK is recording

If your are using `startRecording()` and `stopRecording()` methods it might be handy to know if SDK is currently recording or not.
Simply call:

```java
Smartlook.isRecording()
```

### Blacklisted views
SDK contains list of blacklisted/sensitive views. These views will be not recorded (only black rectangle instead of the view).

You can view mark view(s) as blacklisted by calling:

```java
Smartlook.registerBlacklistedView(View view)
Smartlook.registerBlacklistedViews(List<View> views)
```

If view(s) is o longer sensitive you can remove it from blacklist:

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

In case you need some view(s) to be recorded even if its instance of blacklisted class, you can whitelist them:

```java
Smartlook.registerWhitelistedView(View view)
Smartlook.registerWhitelistedViews(List<View> views)
```

Typical usage might be the need to record one `EditText` in whole Application. Thanks to whitelist, `EditText` can be blacklisted and you only need to whitelist one instance of it.

You can remove view(s) from whitelist:

```java
Smartlook.unregisterWhitelistedView(View view)
Smartlook.unregisterWhitelistedViews(List<View> views)
```

### Add user id & properties

You can specify your app’s user identifier by calling:
```java 
Smartlook.setUserIdentifier(@NonNull String identifier)
``` 
You can then look up those identifiers in the Dashboard to find specific user’s recordings.

Additional user information, such as name, email and other custom properties can be set by calling:

```java 
Smartlook.setUserIdentifier(@NonNull String identifier, JSONObject sessionProperties)
Smartlook.setUserIdentifier(@NonNull String identifier, Bundle sessionProperties)
``` 
You’ll see those properties in the Dashboard in Visitor details.

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

#### Timed event

In case you want to measure the duration of any time-sensitive or long running actions in the app.
You can call:
```java
Smartlook.startTimedCustomEvent(@NotNull String eventName)
```
This will not send out any event, but once `track(...)` with corresponding event name gets called it will have extra **duration** property. 

You can set some aditional data by calling:

```java
Smartlook.startTimedCustomEvent(@NotNull String eventName, JSONObject eventProperties)
Smartlook.startTimedCustomEvent(@NotNull String eventName, Bundle eventProperties)
```

Properties set in `startTimedCustomEvent` will be merged with properties set in `trackCustomEvent`. Properties from `trackCustomEvent` have higher priority and will rewrite conflicting properties from `startTimedCustomEvent`.

Typical use of timed event might look like this:
```java
Smartlook.timeEvent("duration_event")
Thread.sleep(1000) //long running operation
Smartlook.track("duration_event")
```
In this case `duration_event` will have duration property set to circa `1000ms`.

#### Mutable super properties

Mutable super properties can be set by calling:
```java
Smartlook.setGlobalProperties(JSONObject eventProperties)
```
or
```java
Smartlook.setGlobalProperties(Bundle eventProperties)
```
Such properties are added to any event sent from the client in the future. Properties in global scope have higher priority so in merging process those from global scope will **override** custom properties with the same key.

#### Imutable super properties

Immutable super properties can be set by calling:
```java
Smartlook.setGlobalImmutableProperties(JSONObject eventProperties)
```
or
```java
Smartlook.setGlobalImmutableProperties(Bundle eventProperties)
```
Once a global immutable property is set, it cannot be changed. This can be helpful i.e. in cases when we want to set something only once and be sure we will never touch that again. Immutable properties are superior to the custom and mutable global ones -> will **override** properties with same keys.

### Remove global property
If you want to remove some global property with a given key call:
```java
Smartlook.removeSuperPropertyByKey(String propertyKey)
```
Or you can remove all global properties:
```java
removeAllSuperProperties()
``` 
Global properties are stored until they are not removed or the app is uninstalled.

## Crash reporting

In case developer did not handle any exception SDK will automatically report stackTrace. This works out of the box and is sent to our servers in case analytics/errors are applicable.

Because the app process is killed by the crash, video is going to be rendered and sent to the server once a new session is started (next application start).

Proguard mapping file still not available -> Beta functionality.

## Crashlytics

In case you are using Crashlytics in your project, once Crashlytics setup is done, you can call:
```java
Smartlook.enableCrashlytics(boolean enable)
```

![New key-value pair](https://sdk.smartlook.com/android/docs/crash_docs_pair.png)

Then in Crashlytics dashboard, there should be a new `SMARTLOOK SESSION URL` key-value pair with link to your Smartlook dashboard. Once opened, you can directly play recording just before the crash.
