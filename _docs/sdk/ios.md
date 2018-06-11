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

Smartlook iOS SDK can be installed via CocoaPods or by downloading the SDK directly [here.](https://sdk.smartlook.com/ios/smartlook-ios-sdk-0.1.0.zip)

### Cocoapods installation:
1. Add `pod 'Smartlook'` to your project's Podfile.
2. Run `pod install`
3. Optionally add `-ObjC` flag to your app target's Other Linker flags. Cocoapods should add -ObjC flag to Other linker flags by default. -ObjC flag is needed because the SDK uses categories. [More info](https://developer.apple.com/library/content/qa/qa1490/_index.html)
4. Import Smartlook SDK in your app's App Delegate class

	Objective C:
	`#import <Smartlook/Smartlook.h>`

	Swift:
	`import Smartlook`

5. Initialize the SDK by calling your App Delegate's `application:didFinishLaunchingWithOptions:` or `application(_:didFinishLaunchingWithOptions:)` method. You can find your Smartlook Key in the Smartlook Dashboard.

	Objective C:
	`[Smartlook startWithKey:@"your-smartlook-key"];`

	Swift:
	`Smartlook.start(withKey: "your-smartlook-key");`

### Manual installation:
1. Download the SDK [here](https://sdk.smartlook.com/ios/smartlook-ios-sdk-0.1.0.zip).
2. Unzip the file and add Smartlook.framework to your Xcode project.
3. Optionally add `-ObjC` flag to your app target's Other Linker flags. -ObjC flag is needed because the SDK uses categories. [More info](https://developer.apple.com/library/content/qa/qa1490/_index.html)
4. Import Smartlook SDK in your app's App Delegate class

	Objective C:
	`#import <Smartlook/Smartlook.h>`

	Swift:
	`import Smartlook`

5. Initialize the SDK by calling your App Delegate's `application:didFinishLaunchingWithOptions:` or `application(_:didFinishLaunchingWithOptions:)` method. You can find your Smartlook Key in the Smartlook Dashboard.
	
	Objective C:
	`[Smartlook startWithKey:@"your-smartlook-key"];`

	Swift:
	`Smartlook.start(withKey: "your-smartlook-key");`

## API Reference

Applications can interact with the SDK using public SDK methods.

### Starting Smartlook
`+ (void)startWithKey:(nonnull NSString*)key;`

This method initializes the SDK. Should be called in App Delegate's `application:didFinishLaunchingWithOptions:` or `application(_:didFinishLaunchingWithOptions:)` method. You must supply your Smartlook SDK key, which can be acquired in the Smartlook Dashboard.

### Marking (and unmarking) sensitive views
`+ (void)markViewAsSensitive:(nonnull UIView*)view overlayColor:(nullable UIColor*)overlayColor;`
`+ (void)unmarkViewAsSensitive:(nonnull UIView*)view;`

You can mark sensitive views to be hidden from recordings. Textfields and Webviews are hidden by default.

### Recording custom events
`+ (void)recordCustomEventWithEventName:(nonnull NSString*)eventName propertiesDictionary:(nullable NSDictionary<NSString*, NSString*>*)propertiesDictionary;`

You can add custom timestamped events. Those events will be shown in your Dashboard. Smartlook is recording some events automatically (button presses, screens openings). Properties in the dictionary must be strings, values must be strings only too. Other values (like arrays, nested dictionaries) will be stringified.

Example (Objective C):
`[Smartlook recordCustomEventWithEventName:@"user-bought-subscription" propertiesDictionary:@{ @"tier" : @"basic" } ]`

Example (Swift):
`Smartlook.recordCustomEvent(withEventName: "user-bought-subscription", propertiesDictionary: ["tier" : "basic"]);`

### Adding user identifier
`+ (void)setUserIdentifier:(nullable NSString*)userIdentifier;`

You can specify your app's user identifier. You can then look up those identifiers in the Dashboard to find specific user's recordings.

Example (Objective C):
`[Smartlook  setUserIdentifier:@"some-user-identifier"];`

Example (Swift):
`Smartlook.setUserIdentifier("some-user-identifier");`

### Adding other user properties
`+ (void)setUserPropertiesDictionary:(nullable NSDictionary<NSString*, NSString*>*)userPropertiesDictionary;`

You can set additional user information, such as name, email and other custom properties. You'll see those properties in the Dashboard in Visitor details. You can use any NSString as a key and any NSString as a value in the dictionary.

Note:
Keys "name" and "email" will be highlighted in Visitors details.

Example (Objective C):
`[Smartlook setUserPropertiesDictionary:@{ @"name" : @"some-name", @"email" : @"some-email", @"some-other-property" : @"some-other-value" }]`

Example (Swift):
`Smartlook.setUserPropertiesDictionary(["name" : "some-name", "email" : "some-email", "some-other-property" : "some-other-value"]);`
