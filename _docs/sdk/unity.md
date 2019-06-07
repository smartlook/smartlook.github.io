---
title: "Unity"
subtitle: "SDK for screen recording and analytics of Unity games."
---

## Description

The Smartlook Unity SDK is currently available for iOS and Android devices. Both of these platforms have specific builds different from standard mobile SDKs.

If you are not using Unity, check out our [Android](https://smartlook.github.io/docs/sdk/android/) and [iOS](https://smartlook.github.io/docs/sdk/ios/) builds for normal apps.

## What you can do

* Replay session recordings in our web player
* Capture all of the user interactions and find ones you can about in the Events manager
* Set your own custom analytics event and do complex funnels/queries in the dashboard
* Collect referrer value and source of installation per visitor

## Reporting issues

For more information on how to report issues please check our [Smartlook SDK Support section](https://smartlook.github.io/docs/sdk/support/#how-to-submit-an-issue).

## Installation for Android

1. Download [Smartlook Android Unity SDK v0.9.0.2.5.6](https://sdk.smartlook.com/android/app-0.9.0.2.5.6-beta-unity.aar).
2. Put `AAR` file to `Assets/Plugins/Android` in your Unity project.
3. Get Unity bridge from [our Github repository](https://github.com/smartlook/unity-bridge)

**Note: For stability/performance goals, currently we support Android 23+ Soon we will introduce new SDK version with broader API range, probably Android 18+**

## Installation for Android (Gradle)

In case there is a conflict with other libraries, we also released lite version of the SDK. This solution however needs to be implemented via gradle of the app itself. Steps are described below. Flow is similar to integration of our native SDK.

1.

Add the following in your project's build.gradle:

```Gradle
allprojects {
  repositories {
    maven {
      url "https://sdk.smartlook.com/android/release"
    }
  }
}
```


2.

Add the following dependency in your app's build.gradle:

```Gradle
implementation('com.smartlook.recording:app:0.9.0.2.5.6-beta-unity-lite')
```


3.

In case you are missing some of the dependencies, feel free to add:

```Gradle
implementation('com.squareup.retrofit2:converter-gson:2.4.0') {
        exclude group: 'com.squareup.okhttp3', module:'okhttp'
    }
```


4. Get Unity bridge from [our Github repository](https://github.com/smartlook/unity-bridge)

**Note: For stability/performance goals, currently we support Android 23+ Soon we will introduce new SDK version with broader API range, probably Android 18+**

## Installation for iOS

1. Download [Smartlook iOS Unity SDK v1.0.0](https://sdk.smartlook.com/ios/smartlook-unity-ios-sdk-1.0.0.zip).
2. Unzip the archive and put `SmartlookUnity.framework` to `Assets/Plugins/iOS` in your Unity project.
3. `Smartlook.cs` Unity bridge is part of the archive

## API Reference

Applications can interact with the SDK using public SDK methods.

You need to provide your **SDK Key** which can be found in [Smartlook Dashboard](https://www.smartlook.com/app/dashboard/settings/projects){:target="_blank"}.
{: .alert .alert-warning }

### Initialize Smartlook

This method initializes the SDK, frames per second value is set to 1.

```cs
  Smartlook.Init(string key);
```

You can raise the framerate by passing in the second argument. This should mainly be used for testing purposes, higher framerates may affect performance of your application significantly.

```cs
  Smartlook.Init(string key, int framerate);
```

### Record custom events

```cs
  Smartlook.RecordEvent(string eventName);
```

Custom events are being propagated to the Smartlook Events dashboard automatically. You can then create playlists of sessions with this event.

```cs
  Smartlook. RecordEvent(string eventName, string properties);
```

You can also pass in `properties` in form of stringified JSON object.

### Add user identifier

```cs
  Smartlook.SetUserIdentifier(string userIdentifier);
```

You can specify your app's user identifier. You can then look up those identifiers in the Dashboard to find specific user's recordings.

### Pause and resume recording

```cs
  Smartlook.PauseRecording();
```

```cs
  Smartlook.ResumeRecording();
```
