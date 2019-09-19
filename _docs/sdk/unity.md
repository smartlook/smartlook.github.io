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

1. Download [Smartlook Android Unity SDK v1.1.5](https://sdk.smartlook.com/android/app-1.1.5-unity.aar).
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
implementation('com.smartlook.recording:app:1.1.5-unity-lite')
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

1. Download [Smartlook iOS Unity SDK v1.1.0](https://sdk.smartlook.com/ios/smartlook-unity-ios-sdk-1.1.0.zip).
2. Unzip the archive and put `SmartlookUnity.framework` to `Assets/Plugins/iOS` in your Unity project.
3. `Smartlook.cs` Unity bridge is part of the archive

## API Reference

Additional info regarding the documentation can be found in <a href="https://smartlook.github.io/docs/sdk/android/"> Android documentation for native SDK</a>
