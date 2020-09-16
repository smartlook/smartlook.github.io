(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"fLe/":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n("Fcif"),i=n("+I+c"),a=(n("mXGw"),n("/FXl")),r=n("TjRS"),s=n("+8zC"),l=(n("NRsk"),n("aD51"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/sdk-installation/unity.mdx"}});var d={_frontmatter:l},c=r.a;function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)(c,Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(s.k,{mdxType:"Title"},"Unity SDK Installation"),Object(a.b)("h2",{id:"installation-for-android---aar"},"Installation for Android - aar"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Download ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://sdk.smartlook.com/android/app-1.5.3-unity.aar"}),"Smartlook Android Unity SDK v1.5.3"),"."),Object(a.b)("li",{parentName:"ol"},"Put ",Object(a.b)("inlineCode",{parentName:"li"},"AAR")," file to ",Object(a.b)("inlineCode",{parentName:"li"},"Assets/Plugins/Android")," in your Unity project."),Object(a.b)("li",{parentName:"ol"},"Get Unity bridge from ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/smartlook/unity-bridge"}),"our Github repository"),".")),Object(a.b)("h2",{id:"installation-for-android---gradle"},"Installation for Android - Gradle"),Object(a.b)("p",null,"In case there is a conflict with other libraries, we also released lite version of the SDK. This solution however needs to be implemented via gradle of the app itself. Steps are described below. Flow is similar to integration of our native SDK."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Add Smartlook in your ",Object(a.b)("strong",{parentName:"li"},"app’s")," ",Object(a.b)("inlineCode",{parentName:"li"},"build.gradle"),":")),Object(a.b)(s.b,{kind:"example",snippets:{gradle:"\nimplementation 'com.smartlook.recording:app:1.5.3-unity-lite'\n"},mdxType:"Code"}),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Add Smartlook Maven repository in your ",Object(a.b)("strong",{parentName:"li"},"projects")," ",Object(a.b)("inlineCode",{parentName:"li"},"build.gradle"),":")),Object(a.b)(s.b,{kind:"example",snippets:{gradle:'\nallprojects {\n  repositories {\n    maven {\n      url "https://sdk.smartlook.com/android/release"\n    }\n  }\n}\n'},mdxType:"Code"}),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"In case you are missing some of the dependencies, feel free to add:")),Object(a.b)(s.b,{kind:"example",snippets:{gradle:"\nimplementation 'org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.3.61'\n"},mdxType:"Code"}),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Get Unity bridge from ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/smartlook/unity-bridge"}),"our Github repository"),".")),Object(a.b)("h2",{id:"installation-for-ios"},"Installation for iOS"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Download ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://sdk.smartlook.com/ios/smartlook-unity-ios-sdk-1.4.0.125.zip"}),"Smartlook iOS Unity SDK v1.4.0"),"."),Object(a.b)("li",{parentName:"ol"},"Unzip the archive and put ",Object(a.b)("inlineCode",{parentName:"li"},"SmartlookUnity.framework")," to ",Object(a.b)("inlineCode",{parentName:"li"},"Assets/Plugins/iOS")," in your Unity project."),Object(a.b)("li",{parentName:"ol"},"Get Unity bridge from ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/smartlook/unity-bridge"}),"our Github repository"),".")),Object(a.b)("h2",{id:"unity-jar-resolver"},"Unity Jar Resolver"),Object(a.b)("p",null,"Currently this option is still in progress - Please let us know if this is somehow blocking issue to you."),Object(a.b)("h1",{id:"supported-versions"},"Supported versions"),Object(a.b)("p",null,"Currently ",Object(a.b)("strong",{parentName:"p"},"minimal")," supported Android version is ",Object(a.b)("strong",{parentName:"p"},"Jelly Bean (API 18)"),", however ",Object(a.b)("strong",{parentName:"p"},"video is recorded only for API 24+"),", analytics events and other functionality is not limited."),Object(a.b)("p",null,"Smartlook Unity iOS SDK works with Metal graphics API only. OpenGL is not supported at the moment."),Object(a.b)("h1",{id:"start-recording"},"Start Recording"),Object(a.b)("p",null,"To start recording (or just to setup the SDK), you can use i.e.  :"),Object(a.b)(s.b,{kind:"example",snippets:{csharp:'\npublic class NewBehaviourScript : MonoBehaviour\n{\n    // Start is called before the first frame update\n    void Start()\n    {\n        SmartlookUnity.SetupOptionsBuilder builder = new SmartlookUnity.SetupOptionsBuilder("API_KEY");\n        SmartlookUnity.Smartlook.SetupAndStartRecording(builder.Build());\n    }\n\n\n    // Update is called once per frame\n    void Update()\n    {\n        ...\n    }\n}\n'},mdxType:"Code"}),Object(a.b)(s.a,{kind:"important",mdxType:"Alert"},"To setup Smartlook, you need your unique API key. This can be found in your mobile project settings in ",Object(a.b)("a",{href:"https://app.smartlook.com/settings/projects"},"your Smartlook Dashboard"),"."),Object(a.b)(s.j,{kind:"important",mdxType:"TextBlock"},'\nSDK will upload sessions **only on WiFi**. When uploading on mobile connections is requested, too, it must be enabled in the project settings in the dashboard. More details about the recording process can be found in the <Link to="/docs/sdk/conceptual/when-the-recordings-appear-in-dashboard">Conceptual documentation</Link>.\n'),Object(a.b)("h1",{id:"further-steps"},"Further Steps"),Object(a.b)(s.j,{mdxType:"TextBlock"},'\nAll Smartlook SDK methods are documented in the <Link to="/docs/sdk/api-reference" platform="unity">Smartlook API reference</Link>.\n\n\nSome **advanced use-case** and **troubleshooting** case-studies are described in the Cookbooks section of this documentation.\n\n\n**Issues and bugs** can be reported in the <Link to="https://github.com/smartlook/smartlook-mobile-issue-tracker">issue tracker</Link>.\n\n\n**Concepts** undelying the Smartlook functionality are descibed in the Conceptual documentation:\n* <Link to="/docs/sdk/conceptual/setup-and-start-recording" platform="unity">Setup & Start Recording</Link>\n* <Link to="/docs/sdk/conceptual/when-the-recordings-appear-in-dashboard" platform="unity">How are the data recorded and uploaded to be visible in player and dashboard</Link>\n* <Link to="/docs/sdk/conceptual/life-cycle-session-user" platform="unity">Smartlook Life Cycle in the App, Session, User</Link>\n* <Link to="/docs/sdk/conceptual/what-and-how-is-recorded" platform="unity">What is recorded be Smartlook, and how</Link>\n* <Link to="/docs/sdk/conceptual/life-cycle-session-user" platform="unity">Smartlook Life Cycle in the App, Session, User</Link>\n* <Link to="/docs/sdk/conceptual/handling-sensitive-data" platform="unity">Handling Sensitive Data</Link>\n* <Link to="/docs/sdk/conceptual/screen-recording-quality" platform="unity">Screen Recording Quality</Link>\n* Tracking <Link to="/docs/sdk/conceptual/event-tracking" platform="unity">Events</Link> and <Link to="/docs/sdk/conceptual/recording-navigation" platform="android">Navigation</Link> in the App\n* <Link to="/docs/sdk/conceptual/integrating-with-other-tools" platform="unity">Smartlook integration with other tools</Link>\n'))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/sdk-installation/unity.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-sdk-installation-unity-mdx-bd601d44d95f45d571b1.js.map