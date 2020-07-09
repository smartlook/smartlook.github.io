---
title: "Cocos"
subtitle: "SDK for screen recording and analytics for Cocos based games/apps."
---

## Reporting issues

For more information on how to report issues please check our [Smartlook SDK Support section](https://smartlook.github.io/docs/sdk/support/#how-to-submit-an-issue).

## Project build

### Android

In case you want to use SDK in Android project add these lines to your gradle project file:

```android
allprojects {
  repositories {
    maven {
      url "https://sdk.smartlook.com/android/release"
    }
  }
}
```

Also add this line to your module gradle: `implementation('com.smartlook.recording:app:1.5.0-cocos')`


### iOS

Coming soon

## API Reference

Additional info regarding the documentation can be found in <a href="https://smartlook.github.io/docs/sdk/android/"> Android documentation for native SDK</a>
