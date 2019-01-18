---
title: "Unity"
subtitle: "SDK for screen recording and analytics of Unity games."
description: "This SDK offers several options to developers and/or companies."
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

Please report all issues to [Smartlook iOS SDK issue track](https://github.com/smartlook/smartlook-ios-sdk/issues) or [Smartlook Android SDK issue track](https://github.com/smartlook/smartlook-android-sdk/issues) at GitHub.

You can also contact our developers directly on our [Discord server](https://discord.gg/SbEt98m).

## Installation for Android

1. Download [Smartlook Android Unity SDK v0.9.0.2.3.8](https://sdk.smartlook.com/android/app-0.9.0.2.3.8-beta-unity.aar).
2. Unzip the archive and put `AAR` file to `Assets/Plugins/Android` in your Unity project.
3. Get [`Smartlook.cs`](https://github.com/smartsupp/unity-bridge/blob/master/Smartlook.cs) Unity bridge from [our Github repository](https://github.com/smartsupp/unity-bridge/blob/master/Smartlook.cs)

## Installation for iOS

1. Download [Smartlook iOS Unity SDK v0.1.8.5](https://sdk.smartlook.com/ios/smartlook-unity-ios-sdk-0.1.8.5.zip).
2. Unzip the archive and put `SmartlookUnity.framework` to `Assets/Plugins/iOS` in your Unity project.
3. `Smartlook.cs` Unity bridge is part of the archive

## API Reference

Applications can interact with the SDK using public SDK methods.

You need to provide your **SDK Key** which can be found in [Smartlook Dashboard](https://www.smartlook.com/app/dashboard/settings/projects){:target="_blank"}.
{: .alert .alert-warning }
