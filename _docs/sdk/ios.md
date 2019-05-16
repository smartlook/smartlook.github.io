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
  * **Objective C:** `#import <Smartlook/Smartlook.h>`
  * **Swift:** `import Smartlook`
4. Run Smartlook by calling either `start(withKey: String)` or `initialize(withKey: String)` in your AppDelegate as described below.

### Manual installation

1. Download [Smartlook iOS SDK v0.1.12](https://sdk.smartlook.com/ios/smartlook-ios-sdk-0.1.12.zip) directly.
2. Unzip the file and add Smartlook.framework to your Xcode project.
3. Import Smartlook SDK in your app's App Delegate class:
  * **Objective C:** `#import <Smartlook/Smartlook.h>`
  * **Swift:** `import Smartlook`
4. Run Smartlook by calling either `start(withKey: String)` or `initialize(withKey: String)` in your AppDelegate as described below.

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

That is all. There is no need to manually stop or pause recording when the app gets suspended by the user by pressing Home button or switching to another app.

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

### On demand pause and start

Regardless how is Smartlook initialized, it is always possible to pause/resume the recording, and also check if the recording is active.  

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

It is harmless to call the method in unruly order (e.g., to _resume_ already running recording.

There is also no need to manually stop or pause recording when the app gets suspended by the user by pressing Home button or switching to another app.

### Mark and unmark sensitive views

You can mark sensitive views to be hidden from recordings. Text input fields (`UITextView`, `UITextField`) and Web views (`UIWebView`, `WKWebView`) are hidden by default. `SafariServices` and `AuthenticationServices` web views shows as an empty screen. 

To flag or unflag an `UIView` instance as sensitive, use its `BOOL slSensitive` property. To set custom overlay color of a sensitive view, use its `UIColor slOverlay` property.

Both `slSensitive` and `slOverlay` are also accessible in Xcode Interface Builder.

Alternatively, these legacy methods can be also used when working with sensitive views: `+ (void)markViewAsSensitive:(nonnull UIView*)view overlayColor:(nullable UIColor*)overlayColor;`
`+ (void)unmarkViewAsSensitive:(nonnull UIView*)view;`

### Record custom events

Use: `+ (void)recordCustomEventWithEventName:(nonnull NSString*)eventName propertiesDictionary:(nullable NSDictionary<NSString*, NSString*>*)propertiesDictionary;`

You can add custom timestamped events. Those events will be shown in your Dashboard. Smartlook is recording some events automatically (button presses, screens opening). Properties in the dictionary must be strings and values must be strings as well. Other values (like arrays, nested dictionaries) will be stringified.

```objc
[Smartlook recordCustomEventWithEventName:@"user-bought-subscription" propertiesDictionary:@{ @"tier" : @"basic" } ]
```

```swift
Smartlook.recordCustomEvent(withEventName: "user-bought-subscription", propertiesDictionary: ["tier" : "basic"]);
```

### Add user identifier

Use: `+ (void)setUserIdentifier:(nullable NSString*)userIdentifier;`

You can specify your app's user identifier. You can then look up those identifiers in the Dashboard to find specific user's recordings.

```objc
[Smartlook  setUserIdentifier:@"some-user-identifier"];
```

```swift
Smartlook.setUserIdentifier("some-user-identifier");
```

### Add other user properties

Use: `+ (void)setUserPropertiesDictionary:(nullable NSDictionary<NSString*, NSString*>*)userPropertiesDictionary;`

You can set additional user information, such as name, email and other custom properties. You'll see those properties in the Dashboard in Visitor details. You can use any NSString as a key and any NSString as a value in the dictionary.

Keys **"name"** and **"email"** will be highlighted in Visitor information.
{: .callout .callout-info }

```objc
[
  Smartlook setUserPropertiesDictionary:@{ 
    @"name" : @"some-name", 
    @"email" : @"some-email", 
    @"some-other-property" : @"some-other-value"
  }
]
```

```swift
Smartlook.setUserPropertiesDictionary([
  "name" : "some-name", 
  "email" : "some-email",
  "some-other-property" : "some-other-value"
]);
```
