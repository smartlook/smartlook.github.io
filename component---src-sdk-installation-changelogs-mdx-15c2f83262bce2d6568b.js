(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{dBuB:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return d})),t.d(n,"default",(function(){return m}));var i=t("Fcif"),o=t("+I+c"),s=(t("mXGw"),t("/FXl")),r=t("TjRS"),a=t("+8zC"),d=(t("NRsk"),t("aD51"),{});void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/sdk-installation/changelogs.mdx"}});var c={_frontmatter:d},l=r.a;function m(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)(l,Object(i.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"smartlook-mobile-sdk-release-changelogs"},"Smartlook Mobile SDK Release Changelogs"),Object(s.b)("p",null,"This changelog shows all relevant releases for each platform."),Object(s.b)(a.j,{kind:"important",visibleOn:"react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\nStandard iOS/Android SDK is linked as a Cocopoad/Gradle dependency to React Native, Cordova, Ionic and Cocos plugins. \n\nThis means, that the bugfixes in the latest standard iOS SDK release propagate to all respective frameworks as well.\n\nNew API methods, however, must wait for the respective platfrom plugin update.\n"),Object(s.b)(a.j,{kind:"important",visibleOn:"unity,unreal",mdxType:"TextBlock"},"\nChangelog not available for this platform.\n"),Object(s.b)(a.j,{visibleOn:"flutter",mdxType:"TextBlock"},"\n## Flutter [1.0.6] - 2021-02-02\n\n\n### Fixed\n- Minor stability improvements\n\n\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## iOS SDK [1.7.2] - 2021-02-02\n\n\n### Changed\n- Sensitive data overlay is now a hatched pattern not a solid color\n\n\n### Fixed\n- Issue when sensitive data were not covered when behind a translucent view like `UIAlertController`\n\n\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n##  iOS SDK [1.7.1] - 2020-12-18\n\n\n### Changed\n- Some improvements in algorithms efficiency when reading the screen structure\n\n\n### Fixed\n- Improved memory management, including fix of memory leak when not released memory acquired in `class_copyMethodList`\n- Code that may lead to crashes due to race condition when storing user and other properties\n\n\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## iOS SDK  [1.7.0] - 2020-12-02\n\n\n### Added\n- Automatic integrations for [Heap.io](https://heap.io/), [Amplitude](https://amplitude.com/), [Firebase Crashlytics](https://firebase.google.com/products/crashlytics), [Bugsnag](https://www.bugsnag.com/) and [Mixpanel](https://mixpanel.com/)\n- Segment [Middleware](https://segment.com/docs/connections/sources/catalog/libraries/mobile/android/middleware/) implementation that can be used to propagate events from segment to Smartlook\n- Setup configuration via a setup object, not a dictionary\n\n\n### Fixed\n- Various stability improvements\n\n\n ***"),Object(s.b)(a.j,{visibleOn:"android,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## Android SDK [1.7.0] - 2020-12-02\n\n\n### Added\n- Automatic integrations for [Heap.io](https://heap.io/), [Amplitude](https://amplitude.com/), [Firebase Crashlytics](https://firebase.google.com/products/crashlytics), [Bugsnag](https://www.bugsnag.com/) and [Mixpanel](https://mixpanel.com/)\n- Segment [Middleware](https://segment.com/docs/connections/sources/catalog/libraries/mobile/android/middleware/) implementation that can be used to propagate events from segment to Smartlook\n- Adaptive recording framerate enable/disable API\n\n\n### Fixed\n- Various stability improvements\n\n\n***"),Object(s.b)(a.j,{visibleOn:"xamarin",mdxType:"TextBlock"},"\n##  Xamarin [1.5.2] - 2020-11-15\n\n\n### Changed\n- Update underlying Android SDK to the latest version\n\n\n***"),Object(s.b)(a.j,{visibleOn:"flutter",mdxType:"TextBlock"},"\n## Flutter [1.0.5] - 2020-10-26\n\n\n### Fixed\n- Minor stability improvements\n\n\n***"),Object(s.b)(a.j,{visibleOn:"android,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## Android SDK [1.6.1] - 2020-10-26\n\n\n### Fixed\n- Fixed `Activity` reference issue\n\n\n***"),Object(s.b)(a.j,{visibleOn:"xamarin",mdxType:"TextBlock"},"\n## Xamarin [1.5.1] - 2020-10-15\n\n\n### Added\n- support for EventTrackingModes\n- rageClicks detection\n\n\n### Fixed\n- minor bug fixes\n\n\n***"),Object(s.b)(a.j,{visibleOn:"android,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## Android SDK [1.6.0] - 2020-10-12\n\n\n### Added\n- New robust event tracking mode implementation\n\n\n### Fixed\n- Json conversions stability improved\n- Debug log tags are not obfuscated\n\n\n### Changed\n- API is now using enums instead of annotation classes, this applies for: `RenderingMode`, `RenderingModeOption`, `ViewType` and `ViewState` \n- Wireframe rendering mode improved `view.clipChildren=false` is now considered\n\n\n***"),Object(s.b)(a.j,{visibleOn:"xamarin",mdxType:"TextBlock"},"\n## Xamarin [1.5.0] - 2020-09-15\n\n\n- First publicly released NuGet with embedded native iOS and Android SDKs version 1.5.\n\n\n***"),Object(s.b)(a.j,{visibleOn:"flutter",mdxType:"TextBlock"},"\n## Flutter [1.0.4] - 2020-10-07\n\n\n### Added \n- Support of setEventTrackingModes functinality\n\n\n### Fixed\n- Minor stability improvements\n\n\n***"),Object(s.b)(a.j,{visibleOn:"flutter",mdxType:"TextBlock"},"\n## Flutter [1.0.3] - 2020-10-05\n\n\n### Added \n- Builder setup with options\n\n\n### Fixed\n- Better handling of internal sessions\n\n\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n##  iOS SDK [1.5.0] - 2020-10-05\n\n\n### Added\n- Event tracking modes\n- Rage click detection\n- Added networking dev tool to iOS\n\n\n\n### Changed\n- Removed some long deprecated methods\n\n\n### Fixed\n- There are some reported bugs that cannot reproduced by us. This release attempts to fix them nevertherless:\n- https://github.com/smartlook/smartlook-mobile-issue-tracker/issues/8\n- https://github.com/smartlook/smartlook-mobile-issue-tracker/issues/5\n\n\n***"),Object(s.b)(a.j,{visibleOn:"flutter",mdxType:"TextBlock"},"\n## Flutter [1.0.2] - 2020-09-08\n\n\n### Fixed\n- Identify methods can be called outside UI thread\n\n\n***"),Object(s.b)(a.j,{visibleOn:"android,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## Android SDK [1.5.3] - 2020-09-08\n\n\n### Added\n- Additional builder options for bridges (React, Flutter, ...)\n\n\n### Fixed\n- Event spamming stability issue\n- Internal session handling\n- **Sessions from the same visitor are correctly grouped in Dashboard**\n\n\n***"),Object(s.b)(a.j,{visibleOn:"react",mdxType:"TextBlock"},"\n## React Native [0.33.0] - 2020-09-07\n\n\n### Changed\n- Update to the latest native SDK versions\n\n\n***"),Object(s.b)(a.j,{visibleOn:"react",mdxType:"TextBlock"},"\n## [1.5.2] - 2020-07-22\n\n\n### Fixed\n- Identify methods can be called outside UI thread\n\n\n***"),Object(s.b)(a.j,{visibleOn:"flutter",mdxType:"TextBlock"},"\n## Flutter [1.0.1] - 2020-07-15\n\n\n### Fixed\n- Crashlytics handling\n\n\n***"),Object(s.b)(a.j,{visibleOn:"android,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## Android SDK [1.5.1] - 2020-07-15\n\n\n### Fixed\n- Crashlytics handling\n\n\n***"),Object(s.b)(a.j,{visibleOn:"flutter",mdxType:"TextBlock"},"\n## Flutter [1.0.0] - 2020-07-09\n\n\n### Added \n- Added IntegrationListener that can be used to obtain dashboard session and visitor URL\n- New `getDashboardVisitorUrl` method used to obtain dashboard visitor URL\n- Session can be now restarted using resetSession method\n- New visitor can be crated using resetSession method with resetUser option set to `TRUE`\n\n\n### Changed\n- All SDK threads are now named\n- Method getDashboardSessionUrl has new option withCurrentTimestamp\n\n \n### Fixed\n- Crashes tied to orientation changes\n- Identify now fully supports UTF-8\n\n\n***"),Object(s.b)(a.j,{visibleOn:"android,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## Android SDK [1.5.0] - 2020-07-09\n\n\n### Added\n- New API for identification and user properties\n- Added `IntegrationListener` that can be used to obtain dashboard session and visitor URL\n- New `getDashboardVisitorUrl` method used to obtain dashboard visitor URL\n- Session can be now restarted using `resetSession` method\n- New visitor can be created using `resetSession` method with `resetUser` option set to TRUE\n\n\n### Changed\n- All `setup` and `setupAndStart` methods (appart from the basic variants with `apiKey` parameter only) are now deprecated\n- Method `getDashboardSessionUrl` has new option `withCurrentTimestamp` \n- All SDK threads are now named\n\n\n### Fixed\n- Crashes tied to orientation changes\n- Identify now fully supports UTF-8\n\n\n***"),Object(s.b)(a.j,{visibleOn:"flutter",mdxType:"TextBlock"},"\n## Flutter [0.0.9] - 2020-07-07\n\n\n### Added\n- Better session cache handling / Strict cache rules\n- Analytics only mode and no rendering\n\n\n### Fixed\n- Event is tracked even before session has started\n\n\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n##  iOS SDK [1.4.1] - 2020-07-07\n\n\n### Fixed\n- Messed up focus events\n- Ocassional crashes in SLInternalSDKProperties when initializing the SDK\n\n\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n##  iOS SDK [1.4.0] - 2020-06-24\n\n\n### Added \n- Integration points for other SDKs: session URL with timestamp, visitor page https://smartlook.github.io/docs/sdk/ios/#dashboard-urls\n\n\n### Changed\n- Performace improvements\n- Video quality improvements\n\n\n### Fixed\n- A significant memory leak\n\n\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## iOS SDK  [1.3.1] - 2020-04-29\n\n\n### Fixed\n- An issue when Smartlook blocked answer from `UICollectionViewDelegate` `collectionView:shouldSelectItemAtIndexPath:` method\n\n\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n##  iOS SDK [1.3.0] - 2020-04-22\n\n\n### Added\n- Event tracking modes\n- `noRecording` rendering mode\n- `resetSessionAndUser` to explicitelly start new session and optionally reset the current user\n\n\n### Fixed\n- Memory issues in apps with a lot of background activities\n\n\n### Deprecated\n- `fullScreenSensitive` and `analyticsOnlyMode`: they shud be subsititued by a suitable combination of rendering mode and events tracking mode\n\n\n***"),Object(s.b)(a.j,{visibleOn:"android,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## Android SDK [1.4.2] - 2020-04-16\n\n\n### Added\n- Smartlook setup Builder\n- Log listener API\n- Added various event tracking modes\n- WebView whitelisting\n\n\n### Changed\n- Offline cache has strict rules now, so the SDK does not occupy large amount of device memory\n\n\n### Fixed\n- **Smartlook.trackCustomEvent()** fixed -> all custom events are being handled correctly\n- Custom events send to the SDK on application start are now being tracked\n- All API constants (like `RenderingMode`, `LogAspect`, etc.) are now visible\n\n\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n##  iOS SDK [1.2.9] - 2020-04-07\n\n\n### Fixed\n- Fixed an error that blocked analytics events\n\n\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n##  iOS SDK [1.2.8] - 2020-03-16\n\n\n### Added\n- Analytics-Only recording: does not record screen and does not visualise user interactions https://smartlook.github.io/docs/sdk/ios/#analytics-only-mode\n- Rendering Mode BETA: to further protect user's privacy, new recording modes were added to record the screen in the form of a wireframe scheme https://smartlook.github.io/docs/sdk/ios/#rendering-mode-beta\n\n\n### Changed\n- Some refactorings, optimizations\n\n\n### Fixed\n- Various small and niche bugs\n\n\n***"),Object(s.b)(a.j,{visibleOn:"flutter",mdxType:"TextBlock"},"\n## Flutter [0.0.8] - 2020-03-12\n\n\n### Added\n- Additional API methods\n\n\n### Fixed\n- Video rendering optimization\n- Minor stability improvements\n\n\n***"),Object(s.b)(a.j,{visibleOn:"android,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## Android SDK [1.4.0] - 2020-03-11\n\n\n### Added\n- Wireframe rendering mode\n- TabItem selector identification\n- OkHttp network interceptor\n\n\n### Changed\n- Improved image downscaling == better video quality\n- Smartlook API doesnt have obfuscated parameter names\n- Improved selector detection\n- Removed **deprecated** API methods from versions under 1.0.0\n\n\n### Fixed\n- Orientation detection problems\n- WebView recording stability issues\n\n\n***"),Object(s.b)(a.j,{visibleOn:"react",mdxType:"TextBlock"},"\n## React Native [0.26.0] - 2020-03-11\n\n\n### Changed\n- Updated plugin API to be in line with other Smartlook platforms\n\n\n***"),Object(s.b)(a.j,{visibleOn:"react",mdxType:"TextBlock"},"\n## React Native [0.23.0] - 2020-01-27\n\n\n### Changed\n- iOS: podspec moved to root folder of the bridge, making bridge installation easier\n- iOS: removed all references to `UIWebView` (https://developer.apple.com/news/?id=12232019b)\n\n\n***"),Object(s.b)(a.j,{visibleOn:"flutter",mdxType:"TextBlock"},"\n## Flutter [0.0.7] - 2019-12-19\n\n\n### Changed\n- Image quality boost\n\n\n### Fixed\n- Fix of rare orientation handling issues\n- Minor stability improvements\n\n\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## iOS SDK [1.2.7] - 2019-12-18\n\n\n### Changed\n- Removed all traces of `UIWebView` from SDK. `UIWebView` is deprecated and app that use it will soon not allowed in App Store. \n- Removing `UIWebView` from SDK causes that **`UIWebView` instances are not overlayed in recordings**. If you want all instances of `UIWebView` overlayed to protect potentially sensitive data, add the following line just after Smartlook setup.\n\n\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n##  iOS SDK [1.2.6] - 2019-12-02\n\n\n### Added\n- Ability to whitelist sensitive fields in whitelisted WKWebViews. In order to do that, flag the whitelisted HTML elements with `smartlook-show` CSS class.\n\n\n### Changed\n- Removed calls to UIWebView methods to avoid App Store warnings. \n- This causes that **in whitelisted UIWebView, sensitive fields are no longer overlayed**. In embedded web views, sensitive fileds are overlayed only in WKWebView from now.\n\n\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## iOS SDK  [1.2.5] - 2019-11-11\n\n\n### Changed\n- SDK is build using Xcode 10 again to avoid `___isPlatformVersionAtLeast` undefined symbol issue.\n\n\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n##  iOS SDK [1.2.4] - 2019-11-09\n\n\n### Fixed\n- Crashing when app presents `UIAlertController` *not* using the standard `UIViewController.present(_:animated:completion:)` method\n\n\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n##  iOS SDK [1.2.3] - 2019-10-25\n\n\n### Fixed\n- Crashing when app uses `UIAlertController` with `nil` action handler\n\n\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n##  iOS SDK [1.2.2] - 2019-10-23\n\n\n### Added\n- `UIAlertController` navigation events and actions recorded\n- In whitelisted instances of `UIWebView` or `WKWebView`, the sensitive data inside them are overlayed\n\n\n***"),Object(s.b)(a.j,{visibleOn:"react",mdxType:"TextBlock"},"\n## React Native [0.18.0] - 2019-10-8\n\n\n### Changed\n- iOS - RN 0.6.0 and higher: Smartlook now integratind via Cocoapods. Latest version of native Smartlook SDK is always used. https://smartlook.github.io/docs/sdk/react-native/#ios\n- iOS - RN before 0.6.0: no longer directly supported. `Smartlook.framework` removed from the npm package, must be downloaded and added to the Xcode project manually. https://smartlook.github.io/docs/sdk/react-native/#ios\n\n\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n##  iOS SDK [1.2.1] - 2019-09-23\n\n\n### Added\n- Support for custom timed events\n\n\n### Fixed\n- Bug when Smartlook crashed on iOS 10.x when some kinds of views (e.g., `UIAlertController`) were used in the app\n- Bug when Smartlook crashed when the app started w/out network connection\n\n\n***"),Object(s.b)(a.j,{visibleOn:"flutter",mdxType:"TextBlock"},"\n## Flutter [0.0.6] - 2019-09-18\n\n\n### Added \n- Custom API client\n\n\n### Changed\n- Improved sensitive view hiding\n\n\n### Fixed\n- Touch/selector events are more reliable\n\n\n***"),Object(s.b)(a.j,{visibleOn:"android,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## Android SDK [1.1.5] - 2019-09-17\n\n\n### Added\n- Detection of ANR implemented\n- New custom timed event\n\n\n### Changed\n- Optimized video size and bitrate so the recordings are smaller than 0,5 MB per minute\n\n\n### Fixed\n- Referrer detection now stable\n- Tracking of focus gain event\n\n\n***"),Object(s.b)(a.j,{visibleOn:"flutter",mdxType:"TextBlock"},"\n## Flutter [0.0.5] - 2019-09-10\n\n\n### Fixed\n- iOS plugin build issues in Swift-based apps\n\n\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## iOS SDK  [1.2.0] - 2019-09-09\n\n\n### Added\n- Support for custom navigation events\n\n\n### Changed\n- Improved recording when there are Maps, SpriteKit, SceneKit or Metal views in UIKit app\n\n\n### Fixed\n- Bug when `isRecording` returned `true` before `Smartlook.setup()`\n- Various smaller issues\n\n\n***"),Object(s.b)(a.j,{visibleOn:"flutter",mdxType:"TextBlock"},"\n## Flutter [0.0.4] - 2019-08-20\n\n\n### Fixed\n- Minor staility improvements\n\n\n***"),Object(s.b)(a.j,{visibleOn:"android,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## Android SDK [1.1.2] - 2019-08-20\n\n\n### Fixed\n- User identification now works consistently regardless of when it gets called\n\n\n***"),Object(s.b)(a.j,{visibleOn:"android,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},'\n## Android SDK [1.1.1] - 2019-08-19\n\n\n### Added\n- Added ability to adjust view name for "click" events\n- Prepared SDK for mobile uploads\n\n\n### Fixed\n- Json parsing issues\n\n\n***'),Object(s.b)(a.j,{visibleOn:"flutter",mdxType:"TextBlock"},"\n## Flutter [0.0.3] - 2019-08-07\n\n\n### Fixed\n- Beta release of the plugin and minor bugfixes.\n\n\n***"),Object(s.b)(a.j,{visibleOn:"android,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## Android SDK [1.1.0] - 2019-08-07\n\n\n### Added\n- Custom navigation events\n- Added ability to not record sensitive elements in WebViews\n- Automatic hiding of input elements on WebViews\n\n\n### Fixed\n- Fixed some minor stability issues\n- Adaptive framerate is allowed only on native/React SDKs\n- Fixed some FragmentDialog recording issues\n\n\n***"),Object(s.b)(a.j,{visibleOn:"flutter",mdxType:"TextBlock"},"\n## Flutter [0.0.2] - 2019-07-24\n\n\n### Added\n- Additional methods for events recording\n\n\n***"),Object(s.b)(a.j,{visibleOn:"android,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## Android SDK [1.0.1] - 2019-07-24\n\n\n### Fixed\n- Fixed some minor stability issues\n- Resolved OkHttp v3 and v4 incompability issues\n\n\n***"),Object(s.b)(a.j,{visibleOn:"flutter",mdxType:"TextBlock"},"\n## Flutter [0.0.1] - 2019-07-23\n\n\n### Added\n- Initial testing version of Flutter wrapper for Smartlook\n\n\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n##  iOS SDK [1.1.0] - 2019-07-23\n\n\n### Changed\n- New much more consistent version of API, the legacy API marked as deprecated, see documentation for details\n- Better snapshot handlings to improve CPU and battery efficiency\n\n\n### Fixed\n- Various small errors\n\n\n***"),Object(s.b)(a.j,{visibleOn:"android,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## Android SDK [1.0.0] - 2019-07-18\n\n\n### Added\n- Adaptive framerate (SDK does not capture new video frames when application idle)\n- View/class blacklist and whitelist for marking views as (non) sensitive\n- Sensitive mode\n\n\n### Changed\n- API rewriten and unified with iOS API\n- Timed event has event properties\n\n\n### Deprecated\n- Most of original API methods were deprecated\n\n\n### Fixed\n- Significant stability improvement\n- Fixed keyboard detection\n- Recording is not randomly stopping on activity change or orientation change\n- Resolved OkHttp v3 and v4 incpomatibility crash\n- A variety of minnor issue were fixed\n\n\n***"),Object(s.b)(a.j,{visibleOn:"react",mdxType:"TextBlock"},"\n## React Native [0.7.0] - 2019-05-23\n\n\n### Changed\n- Improved handling of application lifecycle\n\n\n***"),Object(s.b)(a.j,{visibleOn:"android,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## Android SDK [0.9.0.2.5.7-beta] - 2019-05-23\n\n\n### Changed\n- New isRecording() method - you can now check if SDK is running or not\n- Improved capture logic and selectors detection\n- Fix of several minor issues\n\n\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n##  iOS SDK [1.0.0] - 2019-05-21\n\n\n### Added \n- Crashlytics support: URL of the latest recording made by Smartlook during or before the crash is added to crashreports\n- Timed events: custom events can record their duration\n- Form analytics: the length of editign focus to individual UI elements is explicitly recorded\n- Pause/Resume recording, init Smartlook w/out to start recording later\n- Optional framerate parameter in Smartlook initialization\n\n\n### Fixed\n- Crashes in some complex scenarios where delegate methods to e.g., `UITableView` are implemented with inheritance hierarchy\n\n\n***"),Object(s.b)(a.j,{visibleOn:"react",mdxType:"TextBlock"},"\n## React Native [0.6.0] - 2019-04-11\n\n\n### Changed\n- **Breaking changes:** iOS SDK is no longer available via Pods but is provided as a bundle in the npm package - integration steps are described in the documentation mentioned above\n\n\n***"),Object(s.b)(a.j,{visibleOn:"android,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## Android SDK [0.9.0.2.5.3-beta] - 2019-04-11\n\n\n### Changed\n- Possibility to use initPassive method and controll recording via start/pause methods\n- Fix of cached sessions -> sometimes we created two visitors for single user\n- Better lifecycle handling of the activities\n- Fix of stability issues for some Huawei/Honor models\n\n\n***"),Object(s.b)(a.j,{visibleOn:"android,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## Android SDK [0.9.0.2.3.9-beta] - 2019-03-26\n\n\n### Changed\n- Possibility to set desired FPS in init methods\n- Possibility to init SDK in the middle of the app lifecycle\n- Automatic detection of activity/fragment/dialog lifecycle + duration metrics\n- Fix of session length\n- Better detection that keyboard is active\n- Alpha functionality for form analytics -> You can now see which input was somehow problematic for the user to fill in\n- Fix of several stability issues\n\n\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## iOS SDK  [0.1.12] - 2019-03-25\n\n\n### Fixed\n- Optimized sensitive views overlays with respect to the device rotation and CPU load\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## iOS SDK  [0.1.11] - 2019-03-04\n\n\n### Added\n- Supporting selector event on all `UIControl` instances, including `UIDatePicker`, `UISegmentedControl`, `UISlider`, `UIStepper` and `UISwitch`\n- `UIView` has two new properties for direct setting of their *sensitivity* handling: `slSensitive` (boolean flag) and `slOverlay` (overlay colour)\n- these properties are also accessible in Xcode Interface Builder\n\n\n### Fixed\n- Location of accessed UITabBarItems\n- More accurate overlay of sensitive views\n\n\n***"),Object(s.b)(a.j,{visibleOn:"android,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"}," \n## Android SDK [0.9.0.2.1.9-beta] - 2019-02-25\n\n\n### Changed\n- Enhanced selector detection\n- Fixed display resolution metrics\n- Better functionality of pause/start methods\n- Fix of several stability issues\n\n\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n##  iOS SDK [0.1.10] - 2019-01-29\n\n\n### Changed\n- Sensitive input views (`UITextField`, `UITextView`) are hidden by default now, i.e., overlay is opt-out, not opt-in now\n\n\n### Fixed\n- UserAgent properly set for Smartlook communication\n- Fixed snapshots generating when app switches keyWindow\n\n\n***"),Object(s.b)(a.j,{visibleOn:"ios,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n##  iOS SDK [0.1.9] - 2019-01-15\n\n\n### Added\n- Multitouch events\n- Keyboard show/hide events\n\n\n### Fixed\n- Removed conflicting Crashlytics framework\n- Some further minor bug fixes and tweaks\n\n\n***"),Object(s.b)(a.j,{visibleOn:"android,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## Android SDK [0.9.0.2.1.4-beta] - 2019-01-14\n\n\n### Changed\n- Better detection of selectors\n- Better handling of orientation events\n- Minor non-critical bugfixes\n\n\n***"),Object(s.b)(a.j,{visibleOn:"android,react,cordova,ionic,cocos,flutter",mdxType:"TextBlock"},"\n## Android SDK [0.9.0.2.0.8-beta] - 2019-01-14\n\n\n### Changed\n- Overall performance improvements\n- Better handling of app's lifecycle\n- Several bugfixes\n\n\n***"),Object(s.b)(a.j,{visibleOn:"android",mdxType:"TextBlock"},"\n## Android SDK [0.9.0.2.0.2-beta] - 2019-01-08\n\n\n### Changed\n- Better click detection\n- Several bugfixes\n\n\n***"),Object(s.b)(a.j,{visibleOn:"android",mdxType:"TextBlock"},"\n## Android SDK [0.9.0.2.0.0-beta] - 2018-12-19\n\n\n### Changed\n- Multitouch detection\n- Keyboard event -> shown in dashboard\n- Experimental recording of native maps and MapBox\n- Improvement of offline recordings\n\n\n### Fixed\n- Several bugfixes\n\n\n***"),Object(s.b)(a.j,{visibleOn:"android",mdxType:"TextBlock"},"\n## Android SDK [0.9.0.1.8.1-beta] - 2018-11-30\n\n\n### Changed\n- Fixed `ArrayIndexOutOfBoundsException` bug described in issue #8.\n\n\n***"),Object(s.b)(a.j,{visibleOn:"android",mdxType:"TextBlock"},"\n## Android SDK [0.9.0.1.7.7-beta] - 2018-11-22\n\n\n### Changed\n- Improved click detection\n- Bug fix: https://github.com/smartlook/smartlook-android-sdk/issues/8\n\n\n***"))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/sdk-installation/changelogs.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-sdk-installation-changelogs-mdx-15c2f83262bce2d6568b.js.map