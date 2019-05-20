---
title: "iOS"
subtitle: "SDK for screen recording and analytics for iOS devices."
description: "This SDK offers several options to developers and/or companies."
---

## What you can do

* Replay session recordings in our web player
* Capture all of the user interactions and find ones you can about in the Events manager
* Set your own custom analytics event and do complex funnels/queries in the dashboard
* Collect referrer value and source of installation per visitor

## Reporting issues and changelog

For more information on how to report issues please check our [Smartlook SDK Support section](https://smartlook.github.io/docs/sdk/support/#how-to-submit-an-issue).

[Smartlook iOS SDK Changelog](https://github.com/smartlook/smartlook-ios-sdk) records all notable improvements, changes and fixes in SDK releases.

## Installation

Install via CocoaPods or download Smartlook iOS SDK.

You need to provide your **SDK Key** which can be found in [Smartlook Dashboard](https://www.smartlook.com/app/dashboard/settings/projects){:target="_blank"}.
{: .alert .alert-warning }

### Cocoapods installation

1. Add `pod 'Smartlook'` to your project's Podfile.
2. Run `pod install`
3. Import Smartlook SDK in your app's App Delegate class:
```swift
import Smartlook`
```
```objc
#import <Smartlook/Smartlook.h>
```
4. Run Smartlook by calling either `start` or `initialize` in your AppDelegate as described below.

### Manual installation

1. Download [Smartlook iOS SDK v1.0.0](https://sdk.smartlook.com/ios/smartlook-ios-sdk-1.0.0.zip) directly.
2. Unzip the file and add Smartlook.framework to your Xcode project.
3. Import Smartlook SDK in your app's App Delegate class:
```swift
import Smartlook`
```
```objc
#import <Smartlook/Smartlook.h>
```
4. Run Smartlook by calling either `start` or `initialize` in your AppDelegate as described below.

## API Reference

Applications can interact with the SDK using public SDK methods.

You need to provide your **SDK Key** which can be found in [Smartlook Dashboard](https://www.smartlook.com/app/dashboard/settings/projects){:target="_blank"}.
{: .alert .alert-warning }

### Run Smartlook

The typical way to initialize and start recording with Smartlook is by calling 

```swift
Smartlook.start(withKey: "your-app-sdk-key")
```
```objc
[Smartlook startWithKey:@"your-app-sdk-key"];
```

This method should be called as soon as the app starts in its `AppDelegate` `didFinishLaunchingWithOptions` method.

That is all. 

There is no need to manually stop or pause recording when the app gets suspended by the user by pressing Home button or switching to another app, or restart recording when the app wakes up. This happens automatically.
{: .callout .callout-info }

### Initialize Smartlook to start it later

If you do not want to start recording immediately with the app start (you want, e.g., recording only some parts of the app), you still should initialise Smartlook there. To do it, call

```swift
Smartlook.initialize(withKey: "your-app-sdk-key")
```
```objc
[Smartlook initializeWithKey:@"your-app-sdk-key"];
```

This method should be called as soon as the app starts in its `AppDelegate` `didFinishLaunchingWithOptions` method.

Then, Smartlook is ready to start recording later with `startRecording` method. 

### Recording pausing and resuming

Regardless how is Smartlook initialised, it is always possible to pause/resume the recording, and also check if the recording is active.  

```swift
Smartlook.resumeRecording() // start or resume paused recording
Smartlook.pauseRecording()  // pause recorging
Smartlook.isPaused()        // returns true/false
```
```objc
[Smartlook resumeRecording] // start or resume paused recording
[Smartlook pauseRecording]  // pause recorging
[Smartlook isPaused]        // returns true/false
```

It is harmless to call the method in unruly order (e.g., to _resume_ while already recording).

There is no need to manually stop or pause recording when the app gets suspended by the user by pressing Home button or switching to another app, or restart recording when the app wakes up. This happens automatically.
{: .callout .callout-info }

### Initialize Smartlook with framerate options

In Smartlook, the default framerate of screen recording is **1 frame per second** (fps). 

By our experience, this framerate is quite sufficient for capturing user behaviour for analytics purposes. 

If you need *smoother* recordings, use optional `framerate` attribute of the `startWithKey` and `initializeWithKey` to increase it. 

Higher framerates do not necessarily lead to bigger video data, but more frequent screen capture increases the device CPU/GPU load and energy consumption. Compromise strategy could be e.g., enabling higher framerate during beta-testing phase, and decrease it to the default value in production builds.

**start**
```swift
Smartlook.start(withKey: "your-app-sdk-key", framerate: 3)
```
```objc
[Smartlook startWithKey:@"your-app-sdk-key" framerate:3];
```

**initialize**
```swift
Smartlook.initialize(withKey: "your-app-sdk-key", framerate: 3)
```
```objc
[Smartlook initializeWithKey:@"your-app-sdk-key" framerate:3];
```


### Mark and unmark sensitive views

You can mark views that preset sensitive information to be hidden from recordings. Text input fields (`UITextView`, `UITextField`) and Web views (`UIWebView`, `WKWebView`) are hidden by default. `SafariServices` and `AuthenticationServices` web views show as empty screens. 

To flag or unflag an `UIView` instance as sensitive, use its `BOOL slSensitive` property. To set custom overlay colour of a sensitive view, use its `UIColor slOverlay` property.

Both `slSensitive` and `slOverlay` properties are also accessible in Xcode Interface Builder.

Alternatively, legacy methods `markViewAsSensitive`, `unmarkViewAsSensitive` and `overlayColor` property can be also used to work with sensitive views.

### Record custom events

You can add custom events. Those events will be shown in your Dashboard. Smartlook records some events automatically (button presses, screens opening). Properties in the dictionary must be strings and values must be strings as well. Other values (like arrays, nested dictionaries) will be _stringified_.

```swift
Smartlook.recordCustomEvent(withEventName: "user-bought-subscription", propertiesDictionary: ["tier" : "basic"]);
```
```objc
[Smartlook recordCustomEventWithEventName:@"user-bought-subscription" propertiesDictionary:@{ @"tier" : @"basic" } ]
```

### Add duration to custom events

Custom events can also have duration. In order to record it, call first
```swift
Smartlook.startCustomEvent(withEventName: "user-bought-subscription", propertiesDictionary: ["tier" : "basic"]);
```
```objc
[Smartlook startCustomEventWithEventName:@"user-bought-subscription" propertiesDictionary:@{ @"tier" : @"basic" } ]
```

This method does not record an event. It is the subsequent `recordCustomEvent` call with the same `eventName` that does. {: .callout .callout-info } 

In the resulting event, the property dictionaries of `start` and `record` are merged (the `record` values override the `start` ones if the key is the same).

The `duration` is shown as a property of the event, too.

### Add user identifier

User identifier can be specified for each recording session. This identifier can be then used in Smartlook Dashboard to lookup the recordings.

```swift
Smartlook.setUserIdentifier("some-user-identifier");
```
```objc
[Smartlook  setUserIdentifier:@"some-user-identifier"];
```

### Add other user properties

Additional custom information can be set for recording sessions, such as name, email and such. You'll see those properties in the Dashboard in Visitor details. You can use any NSString as a key and any NSString as a value in the dictionary.

Keys **"name"** and **"email"** will be highlighted in Visitor information.
{: .callout .callout-info }

```swift
Smartlook.setUserPropertiesDictionary([
  "name" : "some-name", 
  "email" : "some-email",
  "some-other-property" : "some-other-value"
]);
```
```objc
[
  Smartlook setUserPropertiesDictionary:@{ 
    @"name" : @"some-name", 
    @"email" : @"some-email", 
    @"some-other-property" : @"some-other-value"
  }
]
```

### Crashlytics integration

When Crashlytics are setup in your app, Smartlook automatically adds a custom `SMARTLOOK SESSION URL` key to crash reports. Its value is URL of the latest recording made by Smartlook during or before the crash.