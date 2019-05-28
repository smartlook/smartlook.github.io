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

### Initialize Smartlook

You need to provide your **Smartlook SDK Key** which can be acquired in the [Smartlook Dashboard](https://www.smartlook.com/app/dashboard/settings/projects){:target="_blank"}.
{: .alert .alert-warning }

For standard initialization use: 

```java
Smartlook.init(String YOUR_API_KEY)
```

This method initializes the SDK **and starts the recording.** Best place to call this method is Application class or any entry point to your app.

#### Initalize irregular

In case you need to initialize SDK later i.e. fetching your API key or in the middle of the activity lifecycle, use:
```java
Smartlook.initIrregular(String YOUR_API_KEY, Activity currentActivity)
```
Keep in mind that this initialize method **starts the recording** as well.

#### Intialize passive

In case you want to initialize the SDK and want to handle the start of the recording by yourself, use: 
```java
Smartlook.initPassive(String YOUR_API_KEY)
``` 
For more information about manual start or pause of the recording, see **On-demand pause and start** section.

#### Intialize parameters

All SDK initialization methods have variants with these parameters:
* `fps` You can set custom **framerate** for recording by setting `fps` parameter (allowed values between 2 and 10).
* `experimental` Set this to true to enable some experimental features as **TextureView/Maps/MapBox** recording etc.

### On-demand pause and start

In case you want to pause recording, feel free to call:
```java
Smartlook.pause()
```
Once a user is somewhere else where recording makes sense to you, call:
```java
Smartlook.start()
```

### Check if SDK is recording

If your are using `start()` and `pause()` methods it might be handy to know if SDK is currently recording or not.
Simply call:

```java
Smartlook.isRecording()
```

### Mark sensitive views

You can mark sensitive views to be hidden from recordings using this method:
```java
Smartlook.markViewAsSensitive(View view)
```

**EditTexts** and **Webviews** are **hidden by default**. In case you are using Webview for the rendering of non-sensitive information, feel free to temporary allow their recording: 
```java
Smartlook.enableWebviewRecording(boolean enable)
```

### Add user id & properties

You can specify your app’s user identifier by calling:
```java 
Smartlook.identify(@NonNull String userId)
``` 
You can then look up those identifiers in the Dashboard to find specific user’s recordings.

Additional user information, such as name, email and other custom user properties can be set by calling:

```java 
Smartlook.identify(@NonNull String userId, JSONObject userProperties)
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
Smartlook.track(@NonNull String eventName)
```
If you need to send some additional data with custom event use:
```java
Smartlook.track(@NonNull String eventName, JSONObject eventProperties)
```
or
```java
Smartlook.track(@NonNull String eventName, Bundle eventProperties)
```
Additional data can be used in **funnels** or any additional **filtering**. 

#### Time event

In case you want to measure the duration of any time-sensitive or long running actions in the app.
You can call:
```java
Smartlook.timeEvent(@NotNull String eventName)
```
This will not send out any event, but once `track(...)` with corresponding event name gets called it will have extra **duration** property. 

Typical use might look like this:
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
