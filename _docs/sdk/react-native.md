---
title: "React Native"
subtitle: "SDK for screen recording and analytics for React Native."
---

With this SDK developers and/or companies should be able to:

* Replay session recordings in our web player
* See app structure as an ordered graph where nodes are unique screens
* Set their own custom analytics event and do complex funnels/queries in the dashboard
* Get automatic crash reports


## Getting started

`$ npm install smartlook-react-native-wrapper --save`

`$ react-native link smartlook-react-native-wrapper`


#### iOS

1. `$ pod init` - can be skipped in case you are already using pods
2. Add `pod 'Smartlook'` to your Podfile
3. `$ pod install`

#### Android

1. Open `android/build.gradle`
  - Update gradle version to `classpath 'com.android.tools.build:gradle:3.1.0'`
  - Also add our maven repository:
    ```
	allprojects {
			repositories {
				maven {
					url "https://sdk.smartlook.com/android/release"
				}
			}
    }
    ```
2. Edit also `gradle-wrapper.properties` so you are using:
    `gradle-4.4-all.zip`


## Usage
```JS
var Smartlook = require('smartlook-react-native-wrapper');

Smartlook.init("KEY");
```
  
Description of additional public SDK methods can be found i.e. in Android docs section.