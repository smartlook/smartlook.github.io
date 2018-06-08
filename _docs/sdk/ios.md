---
title: "iOS"
subtitle: "SDK for screen recording and analytics for iOS devices."
---

With this SDK developers and/or companies can:

* Replay session recordings in our web player
* See app structure as an ordered graph where nodes are unique screens
* Set their own custom analytics event and do complex funnels/queries in the dashboard
* Get automatic crash reports

## Installation

Smartlook iOS SDK can be installed via CocoaPods.

1. Add `pod 'Smartlook'` to your Podfile.
2. Run `pod install`
3. Add `-ObjC` flag to your app target's Other Linker flags.
4. Import Smartlook SDK in your app's App Delegate class `#import <Smartlook/Smartlook.h>`
5. Initialize the SDK by calling `[Smartlook startWithKey:@"your-smartlook-key"];` in your App Delegate's `application:didFinishLaunchingWithOptions:` method.