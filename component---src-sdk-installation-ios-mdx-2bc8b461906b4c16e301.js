(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{MTWo:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return c})),n.d(e,"default",(function(){return b}));var o=n("Fcif"),i=n("+I+c"),a=(n("mXGw"),n("/FXl")),r=n("TjRS"),s=n("+8zC"),d=(n("NRsk"),n("aD51"),["components"]),c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/sdk-installation/ios.mdx"}});var p={_frontmatter:c},l=r.a;function b(t){var e=t.components,n=Object(i.a)(t,d);return Object(a.b)(l,Object(o.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)(s.l,{mdxType:"Title"},"iOS SDK Installation"),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"There are three ways to integrate Smartlook into your app:"),Object(a.b)("h3",{id:"1-swift-package-manager"},"1. Swift Package Manager"),Object(a.b)("p",null,"Add this Swift Package – ",Object(a.b)("inlineCode",{parentName:"p"},"https://github.com/smartlook/SmartlookSwiftPackage"),"."),Object(a.b)(s.k,{kind:"important",mdxType:"TextBlock"},'\nIf you experience "**Found an unexpected Mach-O header code: 0x72613c2**" error when uploading an archived app to the App Store, please follow <Link to="/docs/sdk/cookbooks/swift-package-app-store-mach-o-error">this guide</Link>.\n'),Object(a.b)("h3",{id:"2-direct-integration"},"2. Direct integration"),Object(a.b)("p",null,"Smartlook can also be added directly to the app project by ",Object(a.b)("strong",{parentName:"p"},"downloading")," our latest ",Object(a.b)("a",{parentName:"p",href:"https://sdk.smartlook.com/ios/smartlook-ios-sdk-1.7.10.3501.zip"},"Smartlook iOS SDK (1.7.10)"),", unzipping the file, and adding ",Object(a.b)("inlineCode",{parentName:"p"},"Smartlook.xcframework")," to the Xcode project."),Object(a.b)("h3",{id:"3-cocoapods"},"3. Cocoapods"),Object(a.b)("p",null,"In projects that use ",Object(a.b)("strong",{parentName:"p"},"Cocoapods"),", Smartlook can be installed by adding the respective pod into ",Object(a.b)("inlineCode",{parentName:"p"},"Podfile"),":"),Object(a.b)(s.b,{kind:"example",snippets:{ruby:"\npod Smartlook\n"},mdxType:"Code"}),Object(a.b)(s.k,{kind:"important",mdxType:"TextBlock"},"\nPlease note that up-to-date Cocopoads version is necessary to build and run applications with Smartlook on computers with Apple Silicon (M1 and later) chips.\n"),Object(a.b)("h2",{id:"setup-and-start-recording"},"Setup and Start Recording"),Object(a.b)("p",null,"To ",Object(a.b)("strong",{parentName:"p"},"setup")," and ",Object(a.b)("strong",{parentName:"p"},"start")," recording with Smartlook, Smartlook must be imported and configured, e.g., in ",Object(a.b)("inlineCode",{parentName:"p"},"AppDelegate")," and its ",Object(a.b)("inlineCode",{parentName:"p"},"didFinishLaunching")," method:"),Object(a.b)(s.b,{kind:"example",snippets:{swift:'\nimport Smartlook\n\nfunc application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n  let smartlookConfig = Smartlook.SetupConfiguration(key: "API_KEY")\n  Smartlook.setupAndStartRecording(configuration: smartlookConfig)\n  // other initialization stuff\n  return true\n}\n      ',"objective-c":'\n#import <Smartlook/Smartlook.h>\n\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n  SLSetupConfiguration *slConfig = [[SLSetupConfiguration alloc] initWithKey:@"API_KEY"];\n  [Smartlook setupAndStartRecordingWithConfiguration:slConfig];\n  // other initialization stuff\n  return YES;\n}\n      '},mdxType:"Code"}),Object(a.b)(s.k,{kind:"important",mdxType:"TextBlock"},'\nTo setup Smartlook, the **unique project API key **is needed. It can be found in the mobile project settings in the <Link to="https://app.smartlook.com/settings/projects">Smartlook Dashboard</Link>.\n'),Object(a.b)("p",null,"Smartlook now starts recording the app. The recordings will appear in the ",Object(a.b)("a",{parentName:"p",href:"https://app.smartlook.com/"},"Smartlook player")," shortly."),Object(a.b)(s.k,{kind:"important",mdxType:"TextBlock"},'\nWhen starting in debug mode, your iOS app may **stop for a few seconds after this it will start and print a warning** when Smartlook is included.  \nIt is caused by **Xcode\'s Main Thread Checker** diagnostics. Read more about why it happens and how to handle it in this <Link to="/docs/sdk/cookbooks/ios-main-thread-check-warning">Technical Note</Link>.\n'),Object(a.b)(s.k,{kind:"important",mdxType:"TextBlock"},'\nSDK will upload sessions **only on WiFi**. When uploading on mobile connections is requested, too, it must be enabled in the project settings in the dashboard. More details about the recording process can be found in the <Link to="/docs/sdk/conceptual/when-the-recordings-appear-in-dashboard">Conceptual documentation</Link>.\n'),Object(a.b)("h1",{id:"supported-versions"},"Supported versions"),Object(a.b)("p",null,"Currently the ",Object(a.b)("strong",{parentName:"p"},"minimal")," supported iOS version is ",Object(a.b)("strong",{parentName:"p"},"10"),"."),Object(a.b)("h1",{id:"further-steps"},"Further Steps"),Object(a.b)(s.k,{mdxType:"TextBlock"},'\nAll Smartlook SDK methods are documented in the <Link to="/docs/sdk/api-reference" platform="ios">Smartlook API reference</Link>.\n\n\nSome **advanced use-case** and **troubleshooting** case-studies are described in the Cookbooks section of this documentation.\n\n\n**Issues and bugs** can be reported in the <Link to="https://github.com/smartlook/smartlook-mobile-issue-tracker">issue tracker</Link>.\n\n\n**Concepts** underlying the Smartlook functionality are described in the Conceptual documentation:\n* <Link to="/docs/sdk/conceptual/setup-and-start-recording" platform="android">Setup & Start Recording</Link>\n* <Link to="/docs/sdk/conceptual/when-the-recordings-appear-in-dashboard" platform="android">How are the data recorded and uploaded to be visible in the player and dashboard?</Link>\n* <Link to="/docs/sdk/conceptual/life-cycle-session-user" platform="android">Smartlook Life Cycle in the App, Session, User</Link>\n* <Link to="/docs/sdk/conceptual/what-and-how-is-recorded" platform="android">What is recorded by Smartlook, and how?</Link>\n* <Link to="/docs/sdk/conceptual/handling-sensitive-data" platform="android">Handling Sensitive Data</Link>\n* <Link to="/docs/sdk/conceptual/screen-recording-quality" platform="android">Screen Recording Quality</Link>\n* Tracking <Link to="/docs/sdk/conceptual/event-tracking" platform="android">Events</Link> and <Link to="/docs/sdk/conceptual/recording-navigation" platform="android">Navigation</Link> in the App\n* <Link to="/docs/sdk/conceptual/integrating-with-other-tools" platform="android">Smartlook integration with other tools</Link>\n'))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/sdk-installation/ios.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-sdk-installation-ios-mdx-2bc8b461906b4c16e301.js.map