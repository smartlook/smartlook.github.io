(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"fLe/":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return d})),n.d(t,"default",(function(){return b}));var o=n("Fcif"),i=n("+I+c"),a=(n("mXGw"),n("/FXl")),r=n("TjRS"),l=n("+8zC"),s=(n("NRsk"),n("aD51"),["components"]),d={};void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/sdk-installation/unity.mdx"}});var c={_frontmatter:d},p=r.a;function b(e){var t=e.components,n=Object(i.a)(e,s);return Object(a.b)(p,Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(l.l,{mdxType:"Title"},"Unity SDK Installation"),Object(a.b)("h2",{id:"installation-for-android---aar"},"Installation for Android - AAR"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Download ",Object(a.b)("a",{parentName:"li",href:"https://sdk.smartlook.com/android/app-1.8.7-unity-support.aar"},"Smartlook Android Unity SDK v1.8.7"),"."),Object(a.b)("li",{parentName:"ol"},"Put ",Object(a.b)("inlineCode",{parentName:"li"},"AAR")," file to ",Object(a.b)("inlineCode",{parentName:"li"},"Assets/Plugins/Android")," in your Unity project."),Object(a.b)("li",{parentName:"ol"},"Get a Unity bridge from ",Object(a.b)("a",{parentName:"li",href:"https://github.com/smartlook/unity-bridge"},"our Github repository"),".")),Object(a.b)("h2",{id:"installation-for-android---gradle"},"Installation for Android - Gradle"),Object(a.b)("p",null,"In case there is a conflict with other libraries, we also released a lite version of the SDK. This solution however needs to be implemented via gradle of the app itself. Steps are described below. Flow is similar to integration of our native SDK."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Add Smartlook in your ",Object(a.b)("strong",{parentName:"li"},"app’s")," ",Object(a.b)("inlineCode",{parentName:"li"},"build.gradle"),":")),Object(a.b)(l.b,{kind:"example",snippets:{gradle:"\nimplementation 'com.smartlook.recording:app:1.8.7-unity-lite-support'\n"},mdxType:"Code"}),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Add Smartlook Maven repository in your ",Object(a.b)("strong",{parentName:"li"},"projects")," ",Object(a.b)("inlineCode",{parentName:"li"},"build.gradle"),":")),Object(a.b)(l.b,{kind:"example",snippets:{gradle:'\nallprojects {\n  repositories {\n    maven {\n      url "https://sdk.smartlook.com/android/release"\n    }\n  }\n}\n'},mdxType:"Code"}),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"In case you are missing some of the dependencies, feel free to add:")),Object(a.b)(l.b,{kind:"example",snippets:{gradle:"\nimplementation 'org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.3.61'\n"},mdxType:"Code"}),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Get a Unity bridge from ",Object(a.b)("a",{parentName:"li",href:"https://github.com/smartlook/unity-bridge"},"our Github repository"),".")),Object(a.b)("h2",{id:"installation-for-ios"},"Installation for iOS"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Download ",Object(a.b)("a",{parentName:"li",href:"https://sdk.smartlook.com/ios/smartlook-unity-ios-sdk-1.5.0.165.zip"},"Smartlook iOS Unity SDK v1.5.0"),"."),Object(a.b)("li",{parentName:"ol"},"Unzip the archive and put ",Object(a.b)("inlineCode",{parentName:"li"},"SmartlookUnity.framework")," to ",Object(a.b)("inlineCode",{parentName:"li"},"Assets/Plugins/iOS")," in your Unity project."),Object(a.b)("li",{parentName:"ol"},"Get a Unity bridge from ",Object(a.b)("a",{parentName:"li",href:"https://github.com/smartlook/unity-bridge"},"our Github repository"),".")),Object(a.b)("h2",{id:"unity-jar-resolver"},"Unity Jar Resolver"),Object(a.b)("p",null,"Currently this option is still in progress - Please let us know if this is somehow a blocking issue to you."),Object(a.b)("h1",{id:"supported-versions"},"Supported versions"),Object(a.b)("p",null,"Currently the ",Object(a.b)("strong",{parentName:"p"},"minimal")," supported Android version is ",Object(a.b)("strong",{parentName:"p"},"Jelly Bean (API 18)"),", however ",Object(a.b)("strong",{parentName:"p"},"video is recorded only for API 24+"),", analytics events and functionalities are not limited."),Object(a.b)("p",null,"Smartlook Unity iOS SDK works with Metal graphics API only. OpenGL is not supported at the moment."),Object(a.b)("h1",{id:"start-recording"},"Start Recording"),Object(a.b)("p",null,"To start recording (or just to setup the SDK), you can use i.e.:"),Object(a.b)(l.b,{kind:"example",snippets:{csharp:'\npublic class NewBehaviourScript : MonoBehaviour\n{\n    // Start is called before the first frame update\n    void Start()\n    {\n        SmartlookUnity.SetupOptionsBuilder builder = new SmartlookUnity.SetupOptionsBuilder("API_KEY");\n        SmartlookUnity.Smartlook.SetupAndStartRecording(builder.Build());\n    }\n\n\n    // Update is called once per frame\n    void Update()\n    {\n        ...\n    }\n}\n'},mdxType:"Code"}),Object(a.b)(l.a,{kind:"important",mdxType:"Alert"},"To setup Smartlook, you will need your unique API key. This can be found in your mobile project settings in ",Object(a.b)("a",{href:"https://app.smartlook.com/settings/projects"},"your Smartlook Dashboard"),"."),Object(a.b)(l.k,{kind:"important",mdxType:"TextBlock"},'\nSDK will upload sessions **only on Wi-Fi**. When uploading on mobile connections is requested, it must be enabled in the project settings in the dashboard. More details about the recording process can be found in the <Link to="/docs/sdk/conceptual/when-the-recordings-appear-in-dashboard">Conceptual documentation</Link>.\n'),Object(a.b)("h1",{id:"further-steps"},"Further Steps"),Object(a.b)(l.k,{mdxType:"TextBlock"},'\nAll Smartlook SDK methods are documented in the <Link to="/docs/sdk/api-reference" platform="unity">Smartlook API reference</Link>.\n\n\nSome **advanced use-case** and **troubleshooting** case-studies are described in the Cookbooks section of this documentation.\n\n\n**Issues and bugs** can be reported in the <Link to="https://github.com/smartlook/smartlook-mobile-issue-tracker">issue tracker</Link>.\n\n\n**Concepts** underlying the Smartlook functionality are described in the Conceptual documentation:\n* <Link to="/docs/sdk/conceptual/setup-and-start-recording" platform="android">Setup & Start Recording</Link>\n* <Link to="/docs/sdk/conceptual/when-the-recordings-appear-in-dashboard" platform="android">How are the data recorded and uploaded to be visible in the player and dashboard?</Link>\n* <Link to="/docs/sdk/conceptual/life-cycle-session-user" platform="android">Smartlook Life Cycle in the App, Session, User</Link>\n* <Link to="/docs/sdk/conceptual/what-and-how-is-recorded" platform="android">What is recorded by Smartlook, and how?</Link>\n* <Link to="/docs/sdk/conceptual/handling-sensitive-data" platform="android">Handling Sensitive Data</Link>\n* <Link to="/docs/sdk/conceptual/screen-recording-quality" platform="android">Screen Recording Quality</Link>\n* Tracking <Link to="/docs/sdk/conceptual/event-tracking" platform="android">Events</Link> and <Link to="/docs/sdk/conceptual/recording-navigation" platform="android">Navigation</Link> in the App\n* <Link to="/docs/sdk/conceptual/integrating-with-other-tools" platform="android">Smartlook integration with other tools</Link>\n'))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/sdk-installation/unity.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-sdk-installation-unity-mdx-669170da881936fd29a5.js.map