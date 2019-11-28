---
title: "Cordova"
subtitle: "SDK for screen recording and analytics for Cordova applications."
description: "This SDK offers several options to developers and/or companies."
---

## What you can do

* Replay session recordings in our web player
* Capture all of the user interactions and find ones you care about in the Events manager
* Set your own custom analytics event and do complex funnels/queries in the dashboard
* Collect referrer value and source of installation per visitor

## Reporting issues and changelog

For more information on how to report issues please check our [Smartlook SDK Support section](https://smartlook.github.io/docs/sdk/support/#how-to-submit-an-issue).

Smartlook [Android SDK changelog](https://github.com/smartlook/smartlook-android-sdk) and [iOS SDK changelog](https://github.com/smartlook/smartlook-ios-sdk) report all notable improvements, changes and fixes in SDK releases.

## Supported versions

Currently, we support Android API 18+ and iOS 10+ for recording.

## Installation

Add cordova plugin to your project:

```
cordova plugin add https://github.com/smartlook/cordova-smartlook.git
```

## API Reference

Applications can interact with the SDK using public SDK functions.

### Setup

You need to provide your **Smartlook SDK Key** which can be acquired in the [Smartlook Dashboard](https://www.smartlook.com/app/dashboard/settings/projects){:target="_blank"}.
{: .alert .alert-warning }

If you want to setup SDK and start recording, use:

```javascript
cordova.plugins.SmartlookPlugin.setupAndStartRecording({smartlookAPIKey: "key"});
```

In case you want to configure recorded video framerate (allowed values between 2 and 10), use:

```javascript
cordova.plugins.SmartlookPlugin.setupAndStartRecording({smartlookAPIKey: "key", fps: 2});
```

If you want to start recording later use:

```javascript
cordova.plugins.SmartlookPlugin.setup({smartlookAPIKey: "key"});
```

Best place to call one of these functions is in on `deviceready`.

```javascript
Dom7(document).on('deviceready', function deviceIsReady() {
  // here
});
```

### Start and stop recording

If you have SDK set-up you can start or stop recording by calling:

```javascript
cordova.plugins.SmartlookPlugin.startRecording();
cordova.plugins.SmartlookPlugin.stopRecording()
```

### Check if SDK is recording

If you are using `startRecording()` and `stopRecording()` methods it might be handy to know if SDK is currently recording or not.
Simply call `isRecording` and check callback for result:

```javascript
cordova.plugins.SmartlookPlugin.isRecording(
    function(isRecording){
        //check here 
    }
)
```

### Sensitive mode

In case you don't want SDK to record user video, but still, want it to send analytic events you can use sensitive mode.

```javascript
cordova.plugins.SmartlookPlugin.startFullscreenSensitiveMode()
```

Instead of application recording, the video will be black when the sensitive mode is active.

Sensitive mode can be stopped like this:

```javascript
cordova.plugins.SmartlookPlugin.stopFullscreenSensitiveMode()
```

If you want to check if the sensitive mode is active, use:

```javascript
cordova.plugins.SmartlookPlugin.isFullscreenSensitiveModeActive(
    function(isFullscreenSensitiveModeActive){
        //check here
    }
)
```

### Sensitive Elements

If you want to hide a specific element, you can add the 'smartlook-hide' class:

```
class="smartlook-hide"
```

Note that Smartlook **automatically hides text input elements**.

### Add user id & properties

You can specify your app’s user identifier by calling:

```javascript
cordova.plugins.SmartlookPlugin.setUserIdentifier({identifier: "CordovaUser"})
``` 

You can then look up those identifiers in the Dashboard to find specific user’s recordings.

Additional user information, such as name, email and other custom properties can be set by calling:

```javascript
cordova.plugins.SmartlookPlugin.setUserIdentifier(
    {identifier: "CordovaUser", sessionProperties: {name: "Cordova", surname: "User"}})
``` 

You’ll see those properties in the Dashboard in Visitor details.

### Analytics

Unlike in native applications, Smartlook Cordova SDK cannot automaticaly detect:
* Focus events
* Clicked Views

But still detect theese:
* Orientation events
* Activity changes
* Keyboard events

Focus, click and more custom events can be tracked by using custom events.

#### Custom events

You can track custom event by calling:

```javascript
cordova.plugins.SmartlookPlugin.trackCustomEvent({name: "button_click"})
``` 

If you need to send some additional data with custom event use:

```javascript
cordova.plugins.SmartlookPlugin.trackCustomEvent(
    {name: "button_click", eventProperties: {id: "button_id", text: "click me!"}})
``` 

Additional data can be used in **funnels** or any additional **filtering**. 

#### Timed event

In case you want to measure the duration of any time-sensitive or long-running actions in the app.
You can call:

```javascript
cordova.plugins.SmartlookPlugin.startTimedCustomEvent({name: "download_finish"})
```

This will not send out any event, but once `track(...)` with corresponding event name gets called it will have extra **duration** property. 

You can set some aditional data by calling:

```javascript
cordova.plugins.SmartlookPlugin.startTimedCustomEvent(
    {name: "download_finish", eventProperties: {timestamp: "2019-01-10T11:00:00+00:00"}})
```

Properties set in `startTimedCustomEvent` will be merged with properties set in `trackCustomEvent`. Properties from `trackCustomEvent` have higher priority and will rewrite conflicting properties from `startTimedCustomEvent`.

Typical use of timed event might look like this:

```javascript
cordova.plugins.SmartlookPlugin.startTimedCustomEvent({name: "download_finish"})
sleep(1000) //long running operation
cordova.plugins.SmartlookPlugin.trackCustomEvent({name: "download_finish"})
```
In this case `download_finish` will have duration property set to circa `1000ms`.

#### Global event properties

Event super properties can be set by calling:

```javascript
cordova.plugins.SmartlookPlugin.setGlobalEventProperties(
    {globalEventProperties: {global: "Property", second: "one"}, immutable: false})
```

or

```javascript
cordova.plugins.SmartlookPlugin.setGlobalEventProperty(
    {key: "unique", value: "simple property", immutable: false})
```

Such properties are added to any event sent from the client in the future. Properties in global scope have higher priority so in merging process those from global scope will **override** custom properties with the same key.

Properties set to be `immutable` have the highest priority and once set they cannot be overridden (only removed).

### Remove global event property
If you want to remove some global property with a given key call:

```javascript
cordova.plugins.SmartlookPlugin.removeGlobalEventProperty({key: "property_to_remove"})
```

Or you can remove all global event properties:

```javascript
cordova.plugins.SmartlookPlugin.removeAllGlobalEventProperties()
```

Note that global event properties are stored until they are not removed or the app is uninstalled.
