(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{YpGV:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return d})),n.d(t,"default",(function(){return p}));var o=n("Fcif"),a=n("+I+c"),i=(n("mXGw"),n("/FXl")),r=n("TjRS"),s=n("+8zC"),d=(n("aD51"),{});void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/sdk-installation/android.mdx"}});var c={_frontmatter:d},l=r.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(l,Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(s.k,{mdxType:"Title"},"Android SDK Installation"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add Smartlook in your ",Object(i.b)("strong",{parentName:"li"},"app’s")," ",Object(i.b)("inlineCode",{parentName:"li"},"build.gradle"),":")),Object(i.b)(s.b,{kind:"example",snippets:{groovy:"\nimplementation 'com.smartlook.recording:app:1.7.0-native'\n"},mdxType:"Code"}),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Add Smartlook Maven repository in your ",Object(i.b)("strong",{parentName:"li"},"projects")," ",Object(i.b)("inlineCode",{parentName:"li"},"build.gradle"),":")),Object(i.b)(s.b,{kind:"example",snippets:{groovy:'\nallprojects {\n  repositories {\n    maven {\n      url "https://sdk.smartlook.com/android/release"\n    }\n  }\n}\n'},mdxType:"Code"}),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Setup and start Smartlook in ",Object(i.b)("strong",{parentName:"li"},"onCreate()")," of your ",Object(i.b)("strong",{parentName:"li"},"Application")," class:")),Object(i.b)(s.b,{kind:"example",snippets:{java:"\npublic class MyCustomApplication extends Application {\n    @Override\n    public void onCreate() {\n        super.onCreate();\n        Smartlook.setupAndStartRecording(YOUR_API_KEY);\n    }\n}\n      ",kotlin:"\nclass MyCustomApplication : Application() {\n    override fun onCreate() {\n        super.onCreate()\n        Smartlook.setupAndStartRecording(YOUR_API_KEY)\n    }\n}\n      "},mdxType:"Code"}),Object(i.b)(s.j,{kind:"important",mdxType:"TextBlock"},'\nTo setup Smartlook, the **unique project API key **is needed. It can be found in the mobile project settings in the <Link to="https://app.smartlook.com/settings/projects">Smartlook Dashboard</Link>.\n'),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Smartlook now starts recording the app. The recordings will appear in the ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://app.smartlook.com/"}),"Smartlook player")," shortly.")),Object(i.b)(s.j,{kind:"important",mdxType:"TextBlock"},'\nSDK will upload sessions **only on Wi-Fi**. When uploading on mobile connections is requested, it must be enabled in the project settings in the dashboard. More details about the recording process can be found in the <Link to="/docs/sdk/conceptual/when-the-recordings-appear-in-dashboard">Conceptual documentation</Link>.\n'),Object(i.b)("h1",{id:"supported-versions"},"Supported versions"),Object(i.b)("p",null,"Currently the ",Object(i.b)("strong",{parentName:"p"},"minimal")," supported Android version is ",Object(i.b)("strong",{parentName:"p"},"Jelly Bean (API 18)"),"."),Object(i.b)("h1",{id:"further-steps"},"Further Steps"),Object(i.b)(s.j,{mdxType:"TextBlock"},'\nAll Smartlook SDK methods are documented in the <Link to="/docs/sdk/api-reference" platform="android">Smartlook API reference</Link>.\n\n\nSome **advanced use-case** and **troubleshooting** case-studies are described in the Cookbooks section of this documentation.\n\n\n**Issues and bugs** can be reported in the <Link to="https://github.com/smartlook/smartlook-mobile-issue-tracker">issue tracker</Link>.\n\n\n**Concepts** underlying the Smartlook functionality are described in the Conceptual documentation:\n* <Link to="/docs/sdk/conceptual/setup-and-start-recording" platform="android">Setup & Start Recording</Link>\n* <Link to="/docs/sdk/conceptual/when-the-recordings-appear-in-dashboard" platform="android">How are the data recorded and uploaded to be visible in the player and dashboard?</Link>\n* <Link to="/docs/sdk/conceptual/life-cycle-session-user" platform="android">Smartlook Life Cycle in the App, Session, User</Link>\n* <Link to="/docs/sdk/conceptual/what-and-how-is-recorded" platform="android">What is recorded by Smartlook, and how?</Link>\n* <Link to="/docs/sdk/conceptual/handling-sensitive-data" platform="android">Handling Sensitive Data</Link>\n* <Link to="/docs/sdk/conceptual/screen-recording-quality" platform="android">Screen Recording Quality</Link>\n* Tracking <Link to="/docs/sdk/conceptual/event-tracking" platform="android">Events</Link> and <Link to="/docs/sdk/conceptual/recording-navigation" platform="android">Navigation</Link> in the App\n* <Link to="/docs/sdk/conceptual/integrating-with-other-tools" platform="android">Smartlook integration with other tools</Link>\n'))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/sdk-installation/android.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-sdk-installation-android-mdx-5b4d258d4bb926aaf3b5.js.map