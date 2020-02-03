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
implementation('com.smartlook.recording:app:1.3.0-native')
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

Both methods `setup` and `setupAndStartRecording` can be further customized with parameters.

```java
Smartlook.setupAndStartRecording(String YOUR_API_KEY, boolean experimental, int fps)
Smartlook.setup(String YOUR_API_KEY, Activity activity, boolean experimental, int fps)
```

|    Parameter   | Required |                                                                         Description                                                                         | Default value |
|:--------------:|:--------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------:|---------------|
|    `apiKey`    |    yes   | Unique 40 character key identifying your app (can be found in the dashboard).                                                                                   | ""            |
|      `fps`     |    no    | Recorded video framerate (allowed values between 2 and 10). Note that by setting this value you will **override** framerate settings from Dashboard!                                                                                                 | 2             |
| `experimental` |    no    | Set this to true to enable some experimental features as **TextureView/Maps/MapBox** recording etc.                                                         | false         |
|   `activity`   |    no    | In case you need to setup SDK later i.e. fetching your API key or in the middle of the activity lifecycle, call setup with activity reference as parameter. | null          |

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

Additional user information, such 

### Network Interceptor
comming soon (if you want to beta test contact us on [Discord server](https://discord.gg/SbEt98m))
