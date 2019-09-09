---
title: "iOS"
subtitle: "SDK for screen recording and analytics for iOS devices."
description: "This SDK offers several options to developers and/or companies."
---

## What you can do

* Replay session recordings in our web player
* Capture all of the user interactions and find ones you care about in the Events manager
* Set your own custom analytics event and do complex funnels/queries in the dashboard
* Collect referrer value and source of installation per visitor

## Reporting issues and changelog

For more information on how to report issues please check our [Smartlook SDK Support section](https://smartlook.github.io/docs/sdk/support/#how-to-submit-an-issue).

[Smartlook iOS SDK Changelog](https://github.com/smartlook/smartlook-ios-sdk) records all notable improvements, changes and fixes in SDK releases.

### A note to _Main Thread Checker_ warning

When debugging your app with Smartlook, you will encounter a **Main Thread Checker** warning which might be accompanied by a short app freeze during the app start. The freeze does not happen in production builds. For details, see [this technical note](#a-technical-note-main-thread-checker-warning).

## WiFi / mobile connection / offline

Currently we are uploading sessions **only of WiFi** connection. If application is on mobile connection or offline we are storing sessions locally and will upload them as soon as application has WiFi conection.

## Installation

Install via CocoaPods or download Smartlook iOS SDK.

You need to provide your **SDK Key** which can be found in [Smartlook Dashboard](https://www.smartlook.com/app/dashboard/settings/projects){:target="_blank"}.
{: .alert .alert-warning }

### Cocoapods installation

1. Add `pod 'Smartlook'` to your project's Podfile.
2. Run `pod install`
3. Import Smartlook SDK in your app's App Delegate class:
```swift
import Smartlook
```
```objc
#import <Smartlook/Smartlook.h>
```
4. Setup Smartlook by calling `start(key:)` and then start recording by `startRecording()` in your AppDelegate as described below.

### Manual installation

1. Download [Smartlook iOS SDK v1.2.0](https://sdk.smartlook.com/ios/smartlook-ios-sdk-1.2.0.zip) directly.
2. Unzip the file and add Smartlook.framework to your Xcode project.
3. Import Smartlook SDK in your app's App Delegate class:
```swift
import Smartlook
```
```objc
#import <Smartlook/Smartlook.h>
```
4. Setup Smartlook by calling `start(key:)` and then start recording by `startRecording()` in your AppDelegate as described below.

## API Reference

Applications can interact with the SDK using public SDK methods.

### Run Smartlook

You need to provide your **SDK Key** which can be found in [Smartlook Dashboard](https://www.smartlook.com/app/dashboard/settings/projects){:target="_blank"}.
{: .alert .alert-warning }

The most straigthforward way to run Smartlook is to enter the following two lines of code into your app `AppDelegate` `didFinishLaunchingWithOptions` method:

```swift
Smartlook.setup(key: "your-app-sdk-key")
Smartlook.startRecording()
```
```objc
[Smartlook setupWithKey:@"your-app-key"];
[Smartlook startRecording];
```

That is all. This initializes Smartlook and starts recording events and screen recording.

### Run Smartlook with options

The way Smartlook run can be customized by adding optional  `options` parameters to `setup` method, e.g.,

```swift
Smartlook.setup(key: "your-app-sdk-key", options:[.enableCrashytics: true, .framerate: 2])
```
```objc
[Smartlook setupWithKey:@"your-app-key" options:@{ SLSetupOptionEnableCrashyticsKey : @YES, SLSetupOptionFramerateKey : @2 }];
```

|    Parameter   | Type     |                                                                         Description                                                                         | Default value |
|:--------------:|:--------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------:|---------------|
|   `.enableCrashlytics`   |   `bool`   | When this option is set to `true`, Smartlook automatically adds a custom `SMARTLOOK SESSION URL` key to Crashlytics reports. Its value is URL of the recording made by Smartlook during or before the crash.                                                                                   |  `false`           |
|      `.framerate`        |    `Int`  | Framerate of screen capturing in frames per second (ftp)                                                                                                |  `1`             |

#### Framerate Option

By our experience, default 1 fps framerate is quite sufficient for capturing user behaviour for analytics purposes. Increase the framerate if you need *smoother* recordings.

Higher framerates do not necessarily lead to bigger video data, but more frequent screen capture increases the device CPU/GPU load and energy consumption. Compromise strategy could be e.g., enabling higher framerate during beta-testing, and decrease it to the default value in production builds.


### Recording pausing and resuming

It is always possible to pause/resume the recording, and check if the recording is active.  

```swift
Smartlook.startRecording() // start or resume paused recording
Smartlook.stopRecording()  // pause recorging
Smartlook.isRecording()    // returns true/false
```
```objc
[Smartlook startRecording] // start or resume paused recording
[Smartlook stopRecording]  // pause recorging
[Smartlook isrecording]    // returns true/false
```

It is harmless to call the methods in unruly order (e.g., to _start_ while already recording).

There is no need to manually stop recording when the app gets suspended by the user by pressing Home button or by switching to another app, or restart recording when the app wakes up. This happens automatically.

### Working with sensitive data

#### Blacklisted views

SDK contains list of blacklisted views. These views won't be recorded (there will be only black rectangle instead of the view in the recording).

You can mark sensitive view(s) by calling:

```swift
self.emailLabel.slSensitive = true                             
Smartlook.registerBlacklisted(object: someView)         
```
```objc
self.emailLabel.slSensitive = YES;                             
[Smartlook registerBlacklistedObject:someView];              
```
If a view no longer shows sensitive data, it can be removed from the list again by calling

```swift
self.emailLabel.slSensitive = false                             
Smartlook.registerBlacklisted(object: someView)         
```
```objc
self.emailLabel.slSensitive = NO;                             
[Smartlook unregisterBlacklistedObject:someView];              
```
#### Blacklisted classes and protocols

You can also blacklist all descendants of some UIView subclass or all UIView subclasses that conform some protocol.

```swift
Smartlook.registerBlacklisted(object: SensitiveView.self)      
Smartlook.registerBlacklisted(object: SensitiveProtocol.self)  
```
```objc
[Smartlook registerBlacklistedObject:SensitiveView.class];          
[Smartlook registerBlacklistedObject:@protocol(SensitiveProtocol)]; 
```

Note that for convenience, some classes are **blacklisted by default**: `UITextView`, `UITextField`, `UIWebView` and `WKWebView`. 

To remove classes or protocols from the blacklisted list, call 

```swift
Smartlook.unregisterBlacklisted(object: SensitiveView.self)      
Smartlook.unregisterBlacklisted(object: SensitiveProtocol.self)  
```
```objc
[Smartlook unregisterBlacklistedObject:SensitiveView.class];          
[Smartlook unregisterBlacklistedObject:@protocol(SensitiveProtocol)]; 
```

Smartlook also defines two convenience *empty* protocols that can be used to *flag* classes to make them blacklisted/whitelisted: 

```swift
protocol Smartlook.SensitiveData
protocol Smartlook.NotSensitiveData
```
```objc
@protocol SLSensitiveData          
@protocol SLNonSensitiveData
```

#### Whitelisting

As noted above, some classes are **blacklisted by default**. To record only some of their instances, you can whitelist:

```swift
self.emailLabel.slSensitive = false                               // whitelists individual instance      
Smartlook.registerWhitelisted(object: someView)                   // whitelists individual instance
Smartlook.registerWhitelisted(object: SensitiveView.self)         // whitelists all instances of the class
Smartlook.registerWhitelisted(object: SensitiveProtocol.self)     // whitelists all classes that conform the protocol
```
```objc
self.emailLabel.slSensitive = NO;                                    // whitelists individual instance
[Smartlook registerWhitelistedObject:someView];                      // whitelists individual instance
[Smartlook registerWhitelistedObject:SensitiveView.class];           // whitelists all instances of the class
[Smartlook registerWhitelistedObject:@protocol(SensitiveProtocol)];  // whitelists all classes that conform the protocol
```

Also here, objects can be removed from the whitelist by calling the respective `unregisterWhitelisted(object:)` or toggling the `slSensitive` property.

#### Sensitive mode

In the case you don't want SDK to record video at all, but still want to get analytics events, use fullscreen sensitive mode:

```swift
Smartlook.beginFullscreenSensitiveMode()
Smartlook.endFullscreenSensitiveMode()
let isSensitiveMode = Smartlook.isFullscreenSensitiveModeActive()  
```
```objc
[Smartlook beginFullscreenSensitiveMode];
[Smartlook endFullscreenSensitiveMode];
BOOL isSensitiveMode = [Smartlook isFullscreenSensitiveModeActive];  
```

#### Blacklisted overlay color

The default colour of the sensitive data overlay is black. You can customized this color by calling:

```swift
Smartlook.setBlacklistedItem(color: UIColor) // changes default overlay colour
sensitiveView.slOverlay = UIColor.darkGray   // changes overlay colour of an UIView instance
```
```objc
[Smartlook setBlacklistedItem:(UIColor *)color];   // changes default overlay colour
sensitiveView.slOverlay = [UIColor darkGrayColor]; // changes overlay colour of an UIView instance
```


### Add User ID

You can specify your app's user identifier by calling
```swift
Smartlook.setUserIdentifier("user-id-178bc")
```
```objc
[Smartlook setUserIdentifier:@"user-id-178bc");
```

### Session properties 

Additional custom properties can be added to each recording session by calling:

```swift
Smartlook.setSessionProperty(value: "gold-user", forName: "user-category")
```
```objc
[Smartlook setSessionPropertyValue:@"gold-user" forName:@"user-category"];
```

You will see these properties in the Dashboard at Visitor details.

To remove session property/properties

```swift
Smartlook.removeSessionProperty(forName: String)
Smartlook.clearSessionProperties() // removes all session properties
```
```objc
[Smartlook removeSessionPropertyForName:(nonnull NSString *)name];
[Smartlook clearSessionProperties];  // removes all session properties
``` 

If you do want _locking_ a session property value to protect it against accidental further changes. Immutable property value cannot be changes once it is set (it can be removes and set again, though).

```swift
Smartlook.setSessionProperty(value: "immutable-value", forName: "my-property", options: .immutable)
```
```objc
[Smartlook setSessionPropertyValue:@"immutable-value" forName:@"my-property" withOptions:SLPropertyOptionImmutable];
```


### Analytics

SDK records several analytics events by default:

- Navigation events (controller transitions)
- Focus events
- Orientation events
- Tap events

You can also add your own custom events.

#### Custom events

Custom events are identified by an name, and can also have additional optional properties. The additional properties can be used in **funnels** and any other **filtering**.

```swift
Smartlook.trackCustomEvent(name: String, props: [String : String]?)
```
```objc
[Smartlook trackCustomEventWithName:(nonnull NSString*)eventName props:(nullable NSDictionary<NSString*, NSString*>*)props];
```

#### Timed event

In the case you want to measure the duration of any time-sensitive or long-running actions in the app, you can first call

```swift
Smartlook.startTimedCustomEvent(name: String, props: [String : String]?)
```
```objc
[Smartlook startTimedCustomEventWithName:(nonnull NSString*)eventName props:(nullable NSDictionary<NSString*, NSString*>*)props];
```

This will not send out any event, but once the `track(...)` with the corresponding event gets called it will have extra **duration** property with the time interval between the `start...` and `track...` calls.

Properties set in the `startTimedCustomEvent` will be merged with properties set in `trackCustomEvent`. Properties from the  `trackCustomEvent` will have higher priority and will override conflicting properties from `startTimedCustomEvent` call.

#### Custom navigation events

Since we are not able to detect all screen transitions (or none e.g. for Unity games or Flutter) out of the box, you can track these events manually:

```swift
Smartlook.trackNavigationEvent(withControllerId controllerId: String, type: Smartlook.NavigationEventType)
```
```objc
[Smartlook trackNavigationEventWithControllerId:(nonnull NSString *)controllerId type:(nonnull SLNavigationType)type];
```

where the _type_ is either `enter` or `exit`. The `exit` event also records the duration from the previous corresponding `enter` event.

#### Global event properties

Global event properties are sent with every event. To set or remove a global event property, use the following calls:

```swift
Smartlook.setGlobalEventProperty(value: String, forName: String)
Smartlook.removeGlobalEventProperty(forName: String)
Smartlook.clearGlobalEventProperties()
```
```objc
[Smartlook setGlobalEventPropertyValue:(nonnull NSString *) forName:(nonnull NSString *)];
[Smartlook removeGlobalEventPropertyForName:(nonnull NSString *)];
[Smartlook clearGlobalEventProperties];
```

Global event properties can be set `immutable` the same way session properties. Immutable property value cannot be changes once it is set (it can be removes and set again, though).

```swift
Smartlook.setGlobalEventProperty(value: "immutable-value", forName: "my-property", options: .immutable)
```
```objc
[Smartlook setGlobalEventPropertyValue:@"immutable-value" forName:@"my-property" withOptions:SLPropertyOptionImmutable];
```

### Shareable session URL

You can obtain URL leading to the Dashboard player for the current Smartlook session:

```swift
Smartlook.dashboardSessionURL()
```
```objc
[Smartlook dashboardSessionURL];
```

this URL can be access by everyone with the access rights to the dashboard.

### Crashlytics

If you use Crashlytics in your project, Smartlook can attach the current dashboard session URL to Crahlytics reports. **This is not by default**, and must be enabled by the `.enableCrashlytics`  option when setting up Smartlook. See [Run Smartlook with options](#run-smartlook-with-options).

## Deprecated API

The previous API methods that are no longer documented here are all marked as **deprecated**. They still work, but might be removed in some future version.

## A technical note: "Main Thread Checker" warning

When debugging your app with Smartlook, you will encounter a warning which title reads

`Main Thread Checker: UI API called on a background thread: -[UIView drawViewHierarchyInRect:afterScreenUpdates:]`

The warning is harmless, and is caused by capturing screen on background. The alternative (capturing the screenshot on the main thread) may cause glitches of the app UI - so implementing it this way and having this warning is a necessary trade-off to enable recording functionality.

This warning also might be accompanied by a short freeze of the app during debugging. This freeze does not happen in production builds, and is caused by an [Xcode debug option](https://developer.apple.com/documentation/code_diagnostics/main_thread_checker){:target="_blank"}. This option can be switched off in the respective run scheme diagnostic options:

![Setting pause on issue off](https://raw.githubusercontent.com/smartlook/smartlook.github.io/master/_docs/sdk/ios-main-thread-checker.png)
