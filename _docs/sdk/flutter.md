---
title: "Flutter"
subtitle: "SDK for screen recording and analytics for Flutter based games/apps."
---

## Reporting issues

For more information on how to report issues please check our [Smartlook SDK Support section](https://smartlook.github.io/docs/sdk/support/#how-to-submit-an-issue).

## Project build

### Android / iOS

Plugin integration is described on official <a href="https://pub.dev/packages/smartlook"> pub.dev site</a>.

## Quick Start

For full documentation, see <a href="https://smartlook.github.io/docs/sdk/android/"> Android documentation for native SDK</a>. Note that not all native SDK API methods are available on Flutter.

### Add Smartlook to your Project

You can integrate Smartlook to you flutter app by adding it as another dependency to your public `pubspec.yaml`
```yaml
dependencies:
  smartlook:
```

### Start Smartlook

To start recording, call the following as early as possible in the app lifecycle (e.g., when initializing your app state):

```dart
Smartlook.setupAndStartRecording('YOUR_API_KEY');
```

This call establishes the connection with Smartlook backend and starts recording.

### Record Navigation

On Flutter, Smartlook cannot record user navigation in the app automatically, you have to add navigation events (when user enters and exits distinct parts of the app) in the code yourself:

```dart
// the first argument identifies the app section, the second the event type
Smartlook.trackNavigationEvent("shopping_cart", SmartlookNavigationEventType.enter);
Smartlook.trackNavigationEvent("shopping_cart", SmartlookNavigationEventType.exit);
```

### Record Other Events

Recording is not limited to navigation events, you can record any event and its properties in the app by calling
```dart
Smartlook.trackCustomEvent("custom_event_name", { "property_1" : "value_1"} );
```

### Masking Sensitive Data

Somethimes, you don't want to record the screen as user enters sensitive data, e.g., passwords. In such a situation, screen recoring can be obfuscated by calling
```dart
Smartlook.startFullscreenSensitiveMode();
Smartlook.stopFullscreenSensitiveMode();
```
