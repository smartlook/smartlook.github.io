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

### A note to _Main Thread Checker_ and _unable to open object file_ warnings

When debugging your app with Smartlook, you will encounter a **Main Thread Checker** warning which might be accompanied by a short app freeze during the app start. The freeze does not happen in production builds. For details, see [this technical note](#a-technical-note-main-thread-checker-warning).

When compiling your app with Smartlook for debugging, you may encounter list of **unable to open object file** warnings. These warnings appear when debug information format is set to `DWARF with dSYM file` . For details, see [this technical note](#a-technical-note-unable-to-open-object-file-warning).

## WiFi / mobile connection / offline

By default, we are uploading sessions **only of WiFi** connection. This setting can be changed in your Smartlook dashboard.

If the application is offline (or on mobile network with mobile upload not enabled) we store sessions locally and upload them as soon as application has WiFi conection.

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
4. Setup Smartlook by calling `setup(key:)` and then start recording by `startRecording()` in your AppDelegate as described below.

### Manual installation

1. Download [Smartlook iOS SDK v1.3.0](https://sdk.smartlook.com/ios/smartlook-ios-sdk-1.3.0.2158.zip) directly.
2. Unzip the file and add Smartlook.framework to your Xcode project.
3. Import Smartlook SDK in your app's App Delegate class:
```swift
import Smartlook
```
```objc
#import <Smartlook/Smartlook.h>
```
4. Setup Smartlook by calling `setup(key:)` and then start recording by `startRecording()` in your AppDelegate as described below.

## Metal
If you have an app that uses Metal as its main rendering method (instead of UIKit), you can try our [Metal SDK](https://sdk.smartlook.com/ios/smartlook-metal-ios-sdk-1.2.9.42.zip).

The Metal SDK has much better performance for Metal enabled apps than the standard SDK, meaning you can experiment with much higher framerate, with lower battery usage. Some API methods (UIKit related) do not work with Metal SDK (like blacklisted views).

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

Other startup options are described in the respective sections.

#### Framerate Option

By our experience, default 1 fps framerate is quite sufficient for capturing user behaviour for analytics purposes. Increase the framerate if you need *smoother* recordings.

Higher framerates do not necessarily lead to bigger video data, but more frequent screen capture increases the device CPU/GPU load and energy consumption. Compromise strategy could be e.g., enabling higher framerate during beta-testing, and decrease it to the default value in production builds.


### Recording pausing and resuming

It is always possible to pause/resume the recording, and check if the recording is active.  

```swift
Smartlook.startRecording() // start or resume paused recording
Smartlook.stopRecording()  // pause recording
Smartlook.isRecording()    // returns true/false
```
```objc
[Smartlook startRecording] // start or resume paused recording
[Smartlook stopRecording]  // pause recording
[Smartlook isrecording]    // returns true/false
```

It is harmless to call the methods in unruly order (e.g., to _start_ while already recording).

There is no need to manually stop recording when the app gets suspended by the user by pressing Home button or by switching to another app, or restart recording when the app wakes up. This happens automatically.

### Recording session and user lifecycle

User activities are recorded in sessions. Typical session starts with the app launch, and ends after user leaves the app (thchnically, the app gets in background). 

However, to cover a scenario when user activity in the app is interrupted for a minute by incomming call or message, Smartlook attempts to continue in the session even after the app re/launches after some short time in background.

Also, user is tied to the session. In other words, each session has only one user. Changing user id in the middle of session replaces the previous user of the whole session. New are sessions implicitelly associated with the previous session user.

For some apps, this continual sessions are not desired, or they need to change user in middle of the app lifecycle (e.g., on shared tablet in factory where various users log in/out to the running app). Here is a set of method how to control the session and user lifecycle explicitelly from the app.

If you want the app always starts with fresh session (and optionally fresh user, too), use this setup options

```swift
// start with a fresh session
Smartlook.setup(key: "YOUR_API_KEY", options: [.startNewSession: true]);

// start with a fresh session and user
Smartlook.setup(key: "YOUR_API_KEY", options: [.startNewSessionAndUser: true]);
```

When session or user should be reset while the app is running, there is a handy method for it too:

```swift
Smartlook.resetSession(resetUser: Bool)
```

The `resetUser` attribute indicates, whether the user identity should be also reset, or whether the new session should retain it.

It is not recommended to call this method when the app gets to background. Smartlook is busy with cleaning up when the app is going to background, and calling this method may create some ephemeral session as an unwanted consequence. When you wish that sessions in no case continue with the next app launch, use the setup reset options.

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
Smartlook.unregisterBlacklisted(object: someView)         
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

Note that for convenience, some classes are **blacklisted by default**: `UITextView`, `UITextField` and `WKWebView`. 

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

#### Sensitive data in embedded web views

Embedded web views are blacklisted by default, i.e., their content is not visible in the recordings at all. If an embedded web view is whitelisted, its content is recorded and its behaviour depends on its class

- **UIWebView** shows their content unrestricted. UIWebView is a deprecated class and apps that use it will soon not allowed in App Store. Thus, there is no way to hide selected elements in UIWebView other than overlaying the whole view programatically. See also [v1.2.7 changelog](https://github.com/smartlook/smartlook-ios-sdk#127---2019-12-18).

- **WKWebView** hiddes fileds where user enters data by default. Any other HTML element that should be hidden can be flagged by assiging `smartlook-hide` CSS class to it. Fields hidden by default can be on the other hand whitelisted by assigning them `smartlook-show` CSS class. 

#### Tracking events

The app may fine-tune the level of tracked events. 

Typically, the default `fullTracking` mode is desired, as it gives a detailed picture of user activities. 

On the other hand, on some screens event location of touches on otherwise blacklisted view can reveal sensitive private information (e.g., custom input view for PIN). In such a case, touches should not be recorded, and the app should switch to `ignoreUserInteractionEvents` mode temporarily. 

Some apps that handle complex private informations on some screens, may prefer stopping events recording altogether there, by switching to `noTracking` mode for the screens.

```swift
Smartlook.setEventTrackingMode(to: Smartlook.EventTrackingMode)
let currentEventTrackingMode = Smartlook.currentEventTrackingMode()
```

#### Sensitive mode

Note: Fullscreen sensitive mode is deprecated. Choose suitable combination of rendering and event tracting mode to achieve the desired level of user privacy.{: .alert .alert-warning }

In the case you don't want SDK to record screen video, but still want to see user interaction events (e.g., touches), use fullscreen sensitive mode:

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

#### Analytics-only mode

Note: Analytics-only mode is deprecated. Choose suitable combination of rendering and event tracting mode to achieve the desired level of user privacy.{: .alert .alert-warning }

In the case you don't want SDK not visualising any user interaction with the app (e.g., touches), but still want to get analytics events, use analytics-only sensitive mode:

```swift
Smartlook.beginAnalyticsOnlyMode()
Smartlook.endAnalyticsOnlyMode()
let isSensitiveMode = Smartlook.isFullscreenSensitiveModeActive()  
```
```objc
[Smartlook beginFullscreenSensitiveMode];
[Smartlook endFullscreenSensitiveMode];
BOOL isSensitiveMode = [Smartlook isAnalyticsOnlyModeActive];  
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

If you do want _locking_ a session property value to protect it against accidental further changes. Immutable property value cannot be changes once it is set (it can be removed and set again, though).

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
Smartlook.startTimedCustomEvent(name: String, props: [String : String]?) -> Any
```
```objc
+ (id _Nonnull)startTimedCustomEventWithName:(nonnull NSString*)eventName props:(nullable NSDictionary<NSString*, NSString*>*)props;
```

and store the returned opaque object that represents the timed event instance.

This will not send out any event, but once the `track(...)` with the corresponding event id gets called it will track the evemt and store the time interval between `start...` and `track...` in its **duration** property.

In the case you want to track unsuccessfull event, you can also use the `trackTimedCustomEventCancel` and provide the reason for cancellation in an extra paramter of the function.

```swift
// to track successfull events
Smartlook.trackTimedCustomEvent(eventId: Any, props: [String : String]?)
// to track event cancellation
Smartlook.trackTimedCustomEventCancel(eventId: Any, reason: String?, props: [String : String]?)
```
```objc
// to track successfull events
+ (void)trackTimedCustomEventWithEventId:(id _Nonnull)eventId props:(nullable NSDictionary<NSString*, NSString*>*)props;
// to track event cancellation
+ (void)trackTimedCustomEventCancelWithEventId:(id _Nonnull)eventId reason:(NSString *_Nullable)reason props:(nullable NSDictionary<NSString*, NSString*>*)props;
```

Properties set in the `startTimedCustomEvent` will be merged with properties set in `trackTimedCustomEvent*`. Properties from the  `trackTimedCustomEvent*` will have higher priority and will override conflicting properties from `startTimedCustomEvent` call.

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

## A technical note: "unable to open object file" warning

When compiling your app with Smartlook for debugging, you may encounter list of **harmless warnings** with this pattern:

` (....) /Users/...../SLSnapshotRenderer.o unable to open object file: No such file or directory`

These warnings appear when  `Target -> Build Settings -> Build Options -> Debug Information Format` is set to `DWARF with dSYM file`. This debug information format is not a default one, and is set manually e.g., when some crash analytics tools (e.g., Fabric.io Crashlytics) are used. 

We are continuously trying to suppress the warnings by tweaking our release build process, so far with no avail.

## Rendering mode [BETA]

You can configure the way of how the SDK captures/creates screen image for recording. There are two main rendering modes:

| NATIVE |  WIREFRAME |
:-------------------------:|:-------------------------:
<img src="/assets/img/docs/sdk/renderingMode/rendering_native.png" alt="rendering mode native" width="300"/> | <img src="/assets/img/docs/sdk/renderingMode/rendering_wireframe.png" alt="rendering mode wireframe" width="300"/>

Rendering mode can be set on SDK setup:

```swift
Smartlook.setup(key: YOUR_API_KEY, options: [.renderingMode: Smartlook.RenderingMode.wireframe]);
Smartlook.startRecording()
```

or can be changed when SDK already runs:

```swift
Smartlook.setRenderingMethod(to: Smartlook.RenderingMode)
```

**Wireframe** rendering mode can be further configured by setting `RenderingModeOption`:

| .wireframe | .blueprintWireframe | .annotatedBlueprintWireframe |
:-------------------------:|:-------------------------:|:-------------------------:
<img src="/assets/img/docs/sdk/renderingMode/rendering_wireframe.png" alt="rendering mode native" width="250"/> | <img src="/assets/img/docs/sdk/renderingMode/rendering_blueprint.png" alt="rendering mode wireframe" width="250"/> | <img src="/assets/img/docs/sdk/renderingMode/rendering_icon_blueprint.png" alt="rendering mode native" width="250"/>

You can set RenderingModeOption in setup or on run like this:

```swift
        Smartlook.setup(key: YOUR_API_KEY,
                        options: [.renderingMode: Smartlook.RenderingMode.wireframe,
                                  .renderingModeOption: Smartlook.RenderingModeOption.blueprintWireframe]
        );
Smartlook.startRecording()
```
or
```swift
Smartlook.setRenderingMethod(to: Smartlook.RenderingMode, option: Smartlook.RenderingModeOption?)
```


