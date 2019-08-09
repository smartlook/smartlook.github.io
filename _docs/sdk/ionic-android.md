---
title: "Ionic Android"
subtitle: "SDK for screen recording and analytics for Ionic Android applications."
description: "This SDK offers several options to developers and/or companies."
---

## What you can do

* Replay session recordings in our web player
* Capture all of the user interactions and find ones you care about in the Events manager
* Set your own custom analytics event and do complex funnels/queries in the dashboard
* Collect referrer value and source of installation per visitor

## Reporting issues and changelog

For more information on how to report issues please check our [Smartlook SDK Support section](https://smartlook.github.io/docs/sdk/support/#how-to-submit-an-issue).

[Smartlook Android SDK changelog](https://github.com/smartlook/smartlook-android-sdk) reports all notable improvements, changes and fixes in SDK releases.

## Supported versions

Currently, we support API 18+ for recording.

## Installation

Add Ionic plugin to your project:

```
npm install @ionic-native/smartlook --save
ionic cordova plugin add https://github.com/smartlook/cordova-smartlook.git
```

## API Reference

Applications can interact with the SDK using public SDK functions.

### SDK injection

You can inject Smartlook SDK like this:

```typescript
import { Smartlook } from '@ionic-native/smartlook/ngx';

constructor(private smartlook: Smartlook) { }
```

### Setup

You need to provide your **Smartlook SDK Key** which can be acquired in the [Smartlook Dashboard](https://www.smartlook.com/app/dashboard/settings/projects){:target="_blank"}.
{: .alert .alert-warning }

If you want to setup SDK and start recording, use:

```typescript
smartlook.setupAndStartRecording(new SmartlookSetupConfig(smartlookAPIKey: string))
```

In case you want to configure recorded video framerate (allowed values between 2 and 10), use:

```typescript
smartlook.setupAndStartRecording(new SmartlookSetupConfig(smartlookAPIKey: string, fps: number))
```

If you want to start recording later use:

```typescript
smartlook.setup(new SmartlookSetupConfig(smartlookAPIKey: string, fps?: number));
```

Best place to call one of these functions is on Application initialization.

### Start and stop recording

If you have SDK set-up you can start or stop recording by calling:

```typescript
smartlook.startRecording();
smartlook.stopRecording()
```

### Check if SDK is recording

If you are using `startRecording()` and `stopRecording()` methods it might be handy to know if SDK is currently recording or not.
Simply call `isRecording` and check the promise for result:

```typescript
this.smartlook.isRecording().then((isRecording) => {
  alert(isRecording)
});
```

### Sensitive mode

In case you don't want SDK to record user video, but still, want it to send analytic events you can use sensitive mode.

```typescript
smartlook.startFullscreenSensitiveMode()
```

Instead of application recording, the video will be black when the sensitive mode is active.

Sensitive mode can be stopped like this:

```typescript
smartlook.stopFullscreenSensitiveMode()
```

If you want to check if the sensitive mode is active, use:

```typescript
smartlook.isFullscreenSensitiveModeActive().then((isActive) => {
  alert(isActive)
});
```

### Add user id & properties

You can specify your app’s user identifier by calling:

```typescript
smartlook.setUserIdentifier(new SmartlookUserIdentifier(identifier: string));
``` 

You can then look up those identifiers in the Dashboard to find specific user’s recordings.

Additional user information, such as name, email and other custom properties can be set by calling:

```typescript
smartlook.setUserIdentifier(new SmartlookUserIdentifier(identifier: string, sessionProperties: {}));
``` 

You’ll see those properties in the Dashboard in Visitor details.

### Analytics

Unlike in native Android applications, Smartlook Ionic SDK cannot automaticaly detect:
* Focus events
* Clicked Views

But still detect theese:
* Orientation events
* Activity changes
* Keyboard events

Focus, click and more custom events can be tracked by using custom events.

#### Custom events

You can track custom event by calling:

```typescript
smartlook.trackCustomEvent(new SmartlookCustomEvent(name: string));
``` 

If you need to send some additional data with custom event use:

```typescript
smartlook.trackCustomEvent(new SmartlookCustomEvent(name: string, eventProperties: {}));
``` 

Additional data can be used in **funnels** or any additional **filtering**. 

#### Timed event

In case you want to measure the duration of any time-sensitive or long-running actions in the app.
You can call:

```typescript
smartlook.startTimedCustomEvent(new SmartlookCustomEvent(name: string));
```

This will not send out any event, but once `track(...)` with corresponding event name gets called it will have extra **duration** property. 

You can set some aditional data by calling:

```typescript
smartlook.startTimedCustomEvent(new SmartlookCustomEvent(name: string, eventProperties: {}));
```

Properties set in `startTimedCustomEvent` will be merged with properties set in `trackCustomEvent`. Properties from `trackCustomEvent` have higher priority and will rewrite conflicting properties from `startTimedCustomEvent`.

Typical use of timed event might look like this:

```typescript
smartlook.startTimedCustomEvent(new SmartlookCustomEvent("download_finish"));
sleep(1000) //long running operation
smartlook.trackCustomEvent(new SmartlookCustomEvent("download_finish"))
```
In this case `download_finish` will have duration property set to circa `1000ms`.

#### Global event properties

Event super properties can be set by calling:

```typescript
smartlook.setGlobalEventProperties(new SmartlookGlobalEventProperties(
  globalEventProperties: {}, immutable: boolean));
```

or

```typescript
smartlook.setGlobalEventProperty(new SmartlookGlobalEventProperty(
    key: string, value: string, immutable: boolean))
```

Such properties are added to any event sent from the client in the future. Properties in global scope have higher priority so in merging process those from global scope will **override** custom properties with the same key.

Properties set to be `immutable` have the highest priority and once set they cannot be overridden (only removed).

### Remove global event property
If you want to remove some global property with a given key call:

```typescript
smartlook.removeGlobalEventProperty(SmartlookGlobalEventPropertyKey(key: string))
```

Or you can remove all global event properties:

```typescript
smartlook.removeAllGlobalEventProperties()
```

Note that global event properties are stored until they are not removed or the app is uninstalled.
