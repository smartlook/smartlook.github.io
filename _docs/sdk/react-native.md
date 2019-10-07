---
title: "React Native"
subtitle: "SDK for screen recording and analytics for React Native."
description: "This SDK offers several options to developers and/or companies."
---

## What you can do

* Replay session recordings in our web player
* Capture all of the user interactions and find ones you can about in the Events manager
* Set your own custom analytics event and do complex funnels/queries in the dashboard
* Collect referrer value and source of installation per visitor

## Getting started

Install the Smartlook RN bridge:

`$ npm install smartlook-react-native-wrapper --save`

### Android

1. `$ react-native link smartlook-react-native-wrapper`
2. Open `android/build.gradle`
3. Update gradle version to `classpath 'com.android.tools.build:gradle:3.1.0'` in case you are using older React native version
4. Add our maven repository:

```android
allprojects {
  repositories {
    maven {
      url "https://sdk.smartlook.com/android/release"
    }
  }
}
```

Also edit `gradle-wrapper.properties` so you are using: `gradle-4.4-all.zip` -> This step is not needed in newer React native versions. 

### iOS

#### Cocoapods

Cocoapods seems to be preferred way to integrate third party modules with native iOS components into React Native apps now. After installing the `npm` module:

1. in your app `Podfile` add the following line:

```
pod 'smartlook-react-native-bridge', :podspec => '../node_modules/smartlook-react-native-wrapper/ios/smartlook-react-native-bridge.podspec'
```
2. run `pod install` in your app `ios` directory

This way, Smartlook is linked to your app now.

#### Troubleshooting

When you are using Cocoapods, do **not** use ~`react-native link`~. To make sure the module is not linked, call `react-native unlink smartlook-react-native-wrapper`

When upgrading from an older, non-cocoapods version, make sure there is no older version of `Smartlook.framework` bundled in your app. To check it out, 
1. remove the smartlook-related line from your Podfile
2. run `pod install` in your app `ios` directory to remove smartlook bridge from your app
3. manually remove any `Smartlook.framework` that you find in your app Xcode project.
4. clear all caches as described below and add the smartlook reference to your `Podfile` again

It may aways help to reset the environment by
- cleaning caches: `watchman watch-del-all; rm -rf ~/Library/Developer/Xcode/DerivedData`
- killing the Metro Bundler

#### Manual iOS framework linking

The native `Smartlook.framework` is no longer part of the installed bridge. 

If you need it for creating your own bridge, or if the traditional `react-native link` works for you, [download the latest version here](https://smartlook.github.io/docs/sdk/ios/#manual-installation) and add it manually to your iOS Xcode project.

The RN bridge files that proxy the native SDK into React Native and the native framework header files are still distributed as part of the installed bridge.

Please note that `react-native link` may or may not work depending on many factors like React Native version etc. and may require some additional Xcode project tweaking which depends on your particular toolchain setup.

## Usage

```js
var Smartlook = require('smartlook-react-native-wrapper');
Smartlook.init("KEY");
```

Description of additional public SDK methods can be found in <a href="https://smartlook.github.io/docs/sdk/android/">Android</a> and <a href="https://smartlook.github.io/docs/sdk/ios/">iOS</a> docs section. Please note that `initIrregular` methods **are not available** in React native Android version.
