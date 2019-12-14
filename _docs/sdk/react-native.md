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

1. `$ npm install smartlook-react-native-wrapper --save`
2. only for RN before version 0.60.0: `$ react-native link smartlook-react-native-wrapper`

### First upgrade to RN 0.60.0 or higher

1. Make sure to make way to [autolinking](https://facebook.github.io/react-native/blog/2019/07/03/version-60#native-modules-are-now-autolinked) by calling `$ react-native unlink smartlook-react-native-wrapper`
2. on iOS, change Smartlook bridge linking to Cocoapods (see below)

## Android

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

## iOS

### Cocoapods (RN 0.60.0 and higher)

Cocoapods seems to be [the way to integrate third party modules with native iOS components](https://facebook.github.io/react-native/blog/2019/07/03/version-60#cocoapods-by-default) into React Native apps now. 

The following steps create a test app with integrated Smartlook:

```bash
# create test app
npx react-native init SLTest01
cd SLTest01/

# install Smartlook plugin
npm install smartlook-react-native-wrapper --save
```

Now edit the Podfile by adding the following line
```
pod 'smartlook-react-native-bridge', :podspec => '../node_modules/smartlook-react-native-wrapper/ios/smartlook-react-native-bridge.podspec'
```

```bash
# change dir to your ios project, open Podfile and add the line above
cd ios
open Podfile

# install the pods
pod install
# should print out:
#    Installing Smartlook (x.y.z)
#    Installing smartlook-react-native-bridge (x.y.z)
```

Then add Smartlook initialization to the `App.js` and run the app
```js
// Smartlook initialization
var Smartlook = require("smartlook-react-native-wrapper"); 
Smartlook.setupAndStartRecording("API_KEY");
```

using these commands
```bash
# open App.js and add Smartlook initialisation there
open ../App.js

# open the Xcode workspace 
open SLTest01.xcworkspace

# finally run the Xcode project
```

#### Cocoapods troubleshooting (RN 0.60.0 and higher)

When you are using Cocoapods, you cannot use ~`react-native link`~. 

To make sure the module is not linked the old way, call `$ react-native unlink smartlook-react-native-wrapper`

When upgrading from an older, non-cocoapods version, make also sure there is no older version of `Smartlook.framework` bundled in your app. To check it out, 
1. remove the smartlook-related line from your Podfile
2. run `$ pod install` in your app `ios` directory to remove smartlook bridge from your app
3. manually remove any `Smartlook.framework` that you find in your app Xcode project.
4. clear all caches as described below and add the smartlook reference to your `Podfile` again

It aways helps to reset the environment by
- cleaning caches: `$ watchman watch-del-all; rm -rf ~/Library/Developer/Xcode/DerivedData`
- killing the Metro Bundler

### Legacy iOS framework linking (RN before 0.60.0)

The native `Smartlook.framework` is no longer part of the installed bridge. 

If you need it for creating your own bridge, or if the traditional `$ react-native link  smartlook-react-native-wrapper` works for you, [download the latest version here](https://smartlook.github.io/docs/sdk/ios/#manual-installation) and add it manually to your iOS Xcode project. This makes you also responsible for its updates to latest versions.

The RN bridge files that proxy the native SDK into React Native and the native framework header files are still distributed as part of the installed bridge.

Please note that `$ react-native link  smartlook-react-native-wrapper` may or may not work depending on many factors like React Native version etc. and may require some additional Xcode project tweaking which depends on your particular toolchain setup.

## Usage

```js
var Smartlook = require('smartlook-react-native-wrapper');
Smartlook.setupAndStartRecording("KEY");
```

Description of additional public SDK methods can be found in <a href="https://smartlook.github.io/docs/sdk/android/">Android</a> and <a href="https://smartlook.github.io/docs/sdk/ios/">iOS</a> docs section. Please note that `initIrregular` methods **are not available** in React native Android version.
