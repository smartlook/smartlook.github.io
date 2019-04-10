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

1. `$ npm install smartlook-react-native-wrapper --save`
2. `$ react-native link smartlook-react-native-wrapper`

### iOS

1. In your Xcode project file, find the **Header search path** in **Build settings tab** of the *application target*.
2. Expand the **Header search path** settings, and copy the line that contains `smartlook-react-native-wrapper/ios`, e.g., `$(SRCROOT)/../node_modules/smartlook-react-native-wrapper/ios`
3. Copy the line to **Framework search patch** (this settings is most likely just above the **Header search path**)
4. Repeat for all relevant targets in your app project file.

![iOS Framework Search Path](https://sdk.smartlook.com/android/docs/iOS-Framework-Search-Path.jpg)

### Android

1. Open `android/build.gradle`
2. Update gradle version to `classpath 'com.android.tools.build:gradle:3.1.0'` in case you are using older React native version
3. Add our maven repository:

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

## Usage

```js
var Smartlook = require('smartlook-react-native-wrapper');
Smartlook.init("KEY");
```

Description of additional public SDK methods can be found in <a href="https://smartlook.github.io/docs/sdk/android/">Android</a> and <a href="https://smartlook.github.io/docs/sdk/ios/">iOS</a> docs section. Please note that `initIrregular` methods **are not available** in React native Android version.
