(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{LhPt:function(o,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return l})),r.d(t,"default",(function(){return c}));var e=r("Fcif"),a=r("+I+c"),s=(r("mXGw"),r("/FXl")),n=r("TjRS"),i=r("+8zC"),l=(r("NRsk"),r("aD51"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/conceptual/integrating-with-other-tools.mdx"}});var d={_frontmatter:l},h=n.a;function c(o){var t=o.components,r=Object(a.a)(o,["components"]);return Object(s.b)(h,Object(e.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)(i.k,{mdxType:"Title"},"Integrating with Other Tools"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"This section shows how to integrate Smartlook with other analytical tools.")),Object(s.b)("p",null,"It is a typical use-case that an application uses several specialized 3rd party libraries to cover various aspects of the analytics, and it is an advantage when it is possible to integrate these tools together."),Object(s.b)("p",null,"In order to integrate Smartlook recordings with other tools, Smartlook publishes two URLs that point to the currently recorded session, and the current user in Smartlook dashboard."),Object(s.b)(i.j,{kind:"important",mdxType:"TextBlock"},"\nThe integration URLs are accessible only to the authorized Smartlook users.\n"),Object(s.b)("p",null,"The integration is then made by sending these URLs to the other tools, e.g., as custom parameters of their own objects."),Object(s.b)(i.j,{kind:"note",mdxType:"TextBlock"},"\nSmartlook also notifies the hosting application whenever one of the integration URLs changes. The notification mechanism heavily depends on the platform, technical details are provided in the API Reference.\n"),Object(s.b)(i.j,{kind:"note",mdxType:"TextBlock"},"Some practical examples of integrating Smartlook into some popular 3rd party tools are provided in the **Cookbooks** section of the documentation."),Object(s.b)("h1",{id:"current-session-url"},"Current Session URL"),Object(s.b)("p",null,"The Smartlook method that publishes dashboard session URL takes a boolean flag if the current timestamp should be included in the URL. With this parameter, Smartlook begins playback of the session at the indicated moment. This comes in handy when the URL is attached to a particular event."),Object(s.b)(i.c,{kind:"example",snippets:{android:{java:'\nString dashboardSessionURL = Smartlook.getDashboardSessionUrl();\nAnotherTool.setParameter("SmartlookURL", dashboardSessionURL);\n      ',kotlin:'\nval dashboardSessionURL = Smartlook.getDashboardSessionUrl()\nAnotherTool.setParamater("SmartlookURL", dashboardSessionURL)\n      '},ios:{swift:'\nlet currentSmartlookSessionURL = Smartlook.getDashboardSessionURL(withCurrentTimestamp: true)\nanotherToolEvent.setParameter("SmartlookURL", currentSmartlookSessionURL)\n      ',"objective-c":'\nNSURL *currentSmartlookSessionURL = [Smartlook getDashboardSessionURLWithCurrentTimestamp:YES];\n[anotherToolEvent setParamValue:currentSmartlookSessionURL forKey:@"SmartlookURL"];\n      '},react:{js:'\nvar dashboardSessionURL =  await Smartlook.getDashboardSessionUrl(true);\nAnotherTool.setProperty("SmartlookURL", dashboardSessionUrl);\n'},unity:{csharp:'\nstring dashboardSessionURL = SmartlookUnity.Smartlook.GetDashboardSessionUrl(true);\nAnotherTool.setUserProperty("SmartlookURL", dashboardSessionURL);\n'},unreal:{csharp:"\nUNREAL - C#\n      "},cocos:{java:'\nString dashboardSessionURL = Smartlook.getDashboardSessionUrl();\nAnotherTool.setParameter("SmartlookURL", dashboardSessionURL);\n      ',kotlin:'\nval dashboardSessionURL = Smartlook.getDashboardSessionUrl()\nAnotherTool.setParamater("SmartlookURL", dashboardSessionURL)\n      '},cordova:{javascript:'\n Smartlook.getDashboardSessionUrl(\n  function(dashboardSessionUrl) {\n    AnotherTool.setProperty("SmartlookURL", dashboardSessionUrl);\n  }\n)\n    '},ionic:{typescrit:'\nsmartlook.getDashboardSessionUrl().then((dashboardSessionUrl) => {\n  AnotherTool.setProperty("SmartlookURL", dashboardSessionUrl)\n});\n      '},flutter:{dart:'\nString dashboardSessionURL = Smartlook.getDashboardSessionUrl(true);\nAnotherTool.setProperty("SmartlookURL", dashboardSessionUrl)\n   '},xamarin:{csharp:'\nUri sessionUri = Smartlook.Analytics.DashboardSessionUri();\nAnotherTool.setProperty("SmartlookURL", sessionUri);\n      '}},mdxType:"CodeBlock"}),Object(s.b)(i.j,{mdxType:"TextBlock"},'\nTechnical details are provided in the <Link to="/api_reference#dashboard-session-url">Session URL API Reference</Link>.\n'),Object(s.b)("h1",{id:"current-visitor-url"},"Current Visitor URL"),Object(s.b)("p",null,"Visitor URL points to a Dashboard page that wrapps the visitor info (their sessions &c.). This URL may change during the application run are result of user identification via Smartlook SDK."),Object(s.b)(i.c,{kind:"example",snippets:{android:{java:'\nString dashboardVisitorURL = Smartlook.getDashboardVisitorUrl();\nAnotherTool.setUserProperty("SmartlookURL", dashboardVisitorUrl);\n      ',kotlin:'\nval dashboardVisitorURL = Smartlook.getDashboardVisitorUrl()\nAnotherTool.setUserProperty("SmartlookURL", dashboardVisitorUrl)\n      '},ios:{swift:'\nlet currentSmartlookVisitorURL = Smartlook.getDashboardVisitorURL()\nAnotherTool.setUserProperty("SmartlookURL", currentSmartlookVisitorURL)\n      ',"objective-c":'\nNSURL *currentSmartlookVisitorURL = [Smartlook getDashboardVisitorURL];\n[AnotherTool setUserParamValue:currentSmartlookVisitorURL forKey:@"SmartlookURL"];\n      '},react:{js:'\nvar dashboardVisitorURL =  await Smartlook.getDashboardVisitorUrl();\nAnotherTool.setProperty("SmartlookURL", dashboardVisitorURL);\n'},unity:{csharp:'\nstring dashboardVisitorURL = SmartlookUnity.Smartlook.GetDashboardVisitorUrl();\nAnotherTool.setUserProperty("SmartlookURL", dashboardVisitorUrl);\n'},unreal:{csharp:"\nUNREAL - C#\n      "},cocos:{java:'\nString dashboardVisitorURL = Smartlook.getDashboardVisitorUrl();\nAnotherTool.setUserProperty("SmartlookURL", dashboardVisitorUrl);\n      ',kotlin:'\nval dashboardVisitorURL = Smartlook.getDashboardVisitorUrl()\nAnotherTool.setUserProperty("SmartlookURL", dashboardVisitorUrl)\n      '},cordova:{javascript:'\n Smartlook.getDashboardVisitorUrl(\n  function(dashboardVisitorUrl) {\n    AnotherTool.setUserProperty("SmartlookURL", dashboardVisitorUrl);\n  }\n)\n    '},ionic:{typescrit:'\nsmartlook.getDashboardVisitorUrl().then((dashboardVisitorUrl) => {\n  AnotherTool.setUserProperty("SmartlookURL", dashboardVisitorUrl)\n});\n      '},flutter:{dart:'\nString dashboardVisitorURL = Smartlook.getDashboardVisitorUrl();\nAnotherTool.setProperty("SmartlookURL", dashboardVisitorURL)\n   '},xamarin:{csharp:'\nUri visitorUri = Smartlook.Analytics.DashboardVisitorUri;\nAnotherTool.setProperty("SmartlookURL", visitorUri)\n      '}},mdxType:"CodeBlock"}),Object(s.b)(i.j,{mdxType:"TextBlock"},'\nTechnical details are provided in the <Link to="/docs/sdk/api-reference#dashboard-visitor-url">Visitor URL API Reference</Link>.\n'))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/conceptual/integrating-with-other-tools.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-conceptual-integrating-with-other-tools-mdx-63a9286e624d2e96bf50.js.map