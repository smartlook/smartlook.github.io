(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{YTOi:function(t,n,e){"use strict";e.r(n),e.d(n,"_frontmatter",(function(){return d})),e.d(n,"default",(function(){return u}));var i=e("Fcif"),r=e("+I+c"),o=(e("mXGw"),e("/FXl")),a=e("TjRS"),s=e("+8zC"),l=e("OPn4"),c=e.n(l),d=(e("aD51"),{});void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/integrations/firebase-crashlytics-integration.mdx"}});var b={_frontmatter:d},h=a.a;function u(t){var n=t.components,e=Object(r.a)(t,["components"]);return Object(o.b)(h,Object(i.a)({},b,e,{components:n,mdxType:"MDXLayout"}),Object(o.b)(s.k,{mdxType:"Title"},"Firebase Crahslytics integration"),Object(o.b)("h2",{id:"automatic-integration"},"Automatic integration"),Object(o.b)("p",null,"Smartlook can be auto-integrated into you project’s crashlytics simply by calling:"),Object(o.b)(s.c,{kind:"example",snippets:{android:{java:"\nSmartlook.enableIntegration(new FirebaseCrashlyticsIntegration());\n      ",kotlin:"\nSmartlook.enableIntegration(FirebaseCrashlyticsIntegration());\n      "},cocos:{java:"\nSmartlook.enableCrashlytics(true);\n      ",kotlin:"\nSmartlook.enableCrashlytics(true)\n      "},cordova:{javascript:"\nNot available on this platform.\n      "},ionic:{typescript:"\nNot available on this platform.\n      "},ios:{swift:'\nvar integrations = Array<Smartlook.Integration>()\nintegrations.append(Smartlook.FirebaseAnalyticsIntegration(integrationWith: Firebase.Analytics.self))\nintegrations.append(Smartlook.FirebaseCrashlyticsIntegration(integrationWith: Firebase.Crashlytics.crashlytics()))\n\nlet smartlookConfiguration = Smartlook.Configuration.configuration(key: "YOUR_SMARTLOOK_API_KEY")\nsmartlookConfiguration.enableIntegrations = integrations\n    \nSmartlook.setupAndStartRecording(configuration: smartlookConfiguration)\n',"objective-c":"\n[FIRApp configure];\n\nNSMutableArray<SLIntegration *> *smartlookIntegrations = [NSMutableArray new];\n[smartlookIntegrations addObject:[[SLFirebaseAnalyticsIntegration alloc] initIntegrationWith:[FIRAnalytics class]]];\n[smartlookIntegrations addObject:[[SLFirebaseCrashlyticsIntegration alloc] initIntegrationWith:[FIRCrashlytics crashlytics]]];\n\n[Smartlook setupAndStartRecordingWithConfiguration:configuration];\n"},flutter:{dart:"\nSmartlook.enableCrashlytics(true);\n      "},unity:{csharp:"\nSmartlookUnity.Smartlook.EnableCrashlytics(true);\n"},react:{javascript:"\nSmartlook.enableCrashlytics(true);\n      "},xamarin:{csharp:'\nAnalytics.SetupOptions smartlookSetupOptions = new Analytics.SetupOptions(enableCrashlytics: true);\n\nSmartlook.Analytics.Setup("API_KEY", smartlookSetupOptions);\n'}},mdxType:"CodeBlock"}),Object(o.b)("p",null,"Then in Crashlytics dashboard, there should be a new ",Object(o.b)("inlineCode",{parentName:"p"},"Smartlook session URL")," key-value pair with link to your Smartlook dashboard.\nOnce opened, you can directly play recording just before the crash."),Object(o.b)("img",{src:c.a}),Object(o.b)("h2",{id:"manual-integration"},"Manual integration"),Object(o.b)(s.j,{invisibleOn:"ios,xamarin",mdxType:"TextBlock"},"Smartlook can be easily integrated into Crashlytics using `IntegrationListener`:"),Object(o.b)(s.j,{visibleOn:"ios",mdxType:"TextBlock"},"Smartlook can be easily integrated into Crashlytics using `Notifications`:"),Object(o.b)(s.j,{visibleOn:"xamarin",mdxType:"TextBlock"},"Smartlook can be easily integrated into Crashlytics using `EventHandlers`:"),Object(o.b)(s.c,{kind:"example",snippets:{android:{java:'\nSmartlook.registerIntegrationListener(new IntegrationListener() {\n    @Override\n    public void onSessionReady(@NotNull String dashboardSessionUrl) {\n        FirebaseCrashlytics.getInstance().setCustomKey("Smartlook session URL", dashboardSessionUrl);\n    }\n\n    @Override\n    public void onVisitorReady(@NotNull String dashboardVisitorUrl) {\n        FirebaseCrashlytics.getInstance().setCustomKey("Smartlook visitor URL", dashboardVisitorUrl);\n    }\n});\n      ',kotlin:'\nSmartlook.registerIntegrationListener(object : IntegrationListener {\n    override fun onSessionReady(dashboardSessionUrl: String) {\n        FirebaseCrashlytics.getInstance().setCustomKey("Smartlook session URL", dashboardSessionUrl)\n    }\n\n    override fun onVisitorReady(dashboardVisitorUrl: String) {\n        FirebaseCrashlytics.getInstance().setCustomKey("Smartlook visitor URL", dashboardVisitorUrl)\n    }\n})\n      '},cocos:{java:'\nSmartlook.registerIntegrationListener(new IntegrationListener() {\n    @Override\n    public void onSessionReady(@NotNull String dashboardSessionUrl) {\n        FirebaseCrashlytics.getInstance().setCustomKey("Smartlook session URL", dashboardSessionUrl);\n    }\n\n    @Override\n    public void onVisitorReady(@NotNull String dashboardVisitorUrl) {\n        FirebaseCrashlytics.getInstance().setCustomKey("Smartlook visitor URL", dashboardVisitorUrl);\n    }\n});\n      ',kotlin:'\nSmartlook.registerIntegrationListener(object : IntegrationListener {\n    override fun onSessionReady(dashboardSessionUrl: String) {\n        FirebaseCrashlytics.getInstance().setCustomKey("Smartlook session URL", dashboardSessionUrl)\n    }\n\n    override fun onVisitorReady(dashboardVisitorUrl: String) {\n        FirebaseCrashlytics.getInstance().setCustomKey("Smartlook visitor URL", dashboardVisitorUrl)\n    }\n})\n      '},cordova:{javascript:"\nNot available on this platform.\n      "},ionic:{typescript:"\nNot available on this platform.\n      "},ios:{swift:'\nNotificationCenter.default.addObserver(forName: Smartlook.dashboardSessionURLChanged, object: nil, queue: nil) { (note) in\n  if let currentSessionUrl = Smartlook.getDashboardSessionURL(withCurrentTimestamp: false) {\n        Crashlytics.crashlytics().setCustomValue(currentSessionUrl, forKey: "Smartlook session URL")\n  }\n};\n\nNotificationCenter.default.addObserver(forName: Smartlook.dashboardVisitorURLChanged, object: nil, queue: nil) { (note) in\n  if let currentVisitorUrl = Smartlook.getDashboardVisitorURL() {\n    Crashlytics.crashlytics().setCustomValue(currentVisitorUrl, forKey: "Smartlook visitor URL")\n  }\n}\n      ',"objective-c":'\n[[NSNotificationCenter defaultCenter] addObserverForName:SLDashboardSessionURLChangedNotification object:nil queue:nil usingBlock:^(NSNotification * _Nonnull note) {\n    NSURL *currentSessionURL = [Smartlook getDashboardSessionURLWithCurrentTimestamp:NO];\n    if (currentSessionURL != nil) {\n        [[FIRCrashlytics crashlytics] setCustomValue:currentSessionURL forKey:@"session_url"];\n    }\n}];\n\n[[NSNotificationCenter defaultCenter] addObserverForName:SLDashboardVisitorURLChangedNotification object:nil queue:nil usingBlock:^(NSNotification * _Nonnull note) {\n    NSURL *currentVisitorURL = [Smartlook getDashboardVisitorURL];\n    if (currentVisitorURL != nil) {\n        [[FIRCrashlytics crashlytics] setCustomValue:currentVisitorURL forKey:@"smartlook_visitor_url"];\n    }\n}];\n      '},flutter:{dart:"\nclass CustomIntegrationListener implements IntegrationListener {\n  void onSessionReady(String dashboardSessionUrl) {\n    // Flutter bridge is limited regarding the Crashlytics API so feel free to use whatever is the best choice for you\n  }\n\n\n  void onVisitorReady(String dashboardVisitorUrl) {\n    // Flutter bridge is limited regarding the Crashlytics API so feel free to use whatever is the best choice for you\n  }\n}\n\n\nSmartlook.registerIntegrationListener(new CustomIntegrationListener());\n      "},unity:{csharp:"\npublic class IntegrationListener : SmartlookUnity.IntegrationListener\n{\n    public override void onSessionReady(string dashboardSessionUrl)\n    {\n        Crashlytics.SetCustomKey('dashboardSessionUrl', dashboardSessionUrl);\n    }\n    public override void onVisitorReady(string dashboardVisitorUrl)\n    {\n        Crashlytics.SetCustomKey('dashboardVisitorUrl', dashboardVisitorUrl);\n    }\n}\n\nSmartlookUnity.Smartlook.RegisterIntegrationListener(new IntegrationListener());\n"},react:{javascript:"\nSmartlook.registerIntegrationListener({\n  onSessionReady: function (dashboardSessionUrl) {\n    await Promise.all([\n      crashlytics().setAttribute('dashboardSessionUrl', dashboardSessionUrl)\n    ]);\n);\n  },\n  onVisitorReady: function (dashboardVisitorUrl) {\n    await Promise.all([\n      crashlytics().setAttribute('dashboardVisitorUrl', dashboardVisitorUrl)\n    ]);\n  }\n});\n      "},xamarin:{csharp:'\nvoid c_DashboardSessionUriChanged(object sender, Smartlook.Analytics.DashboardUriChangedEventArgs a)\n{\n  if (a.dashboardUri != null)\n  {\n   Crashlytics.SharedInstance.SetCustomValue(new NSString(a.dashboardUri.AbsolutePath), "Smartlook session URL");\n  }\n}\nSmartlook.Analytics.DashboardSessionUriChanged += c_DashboardSessionUriChanged;\n\nvoid c_DashboardVisitorUriChanged(object sender, Smartlook.Analytics.DashboardUriChangedEventArgs a)\n{\n  if (a.dashboardUri != null)\n  {\n    Crashlytics.SharedInstance.SetCustomValue(new NSString(a.dashboardUri.AbsolutePath), "Smartlook visitor URL");\n  }\n}\nSmartlook.Analytics.DashboardVisitorUriChanged += c_DashboardVisitorUriChanged;\n\n'}},mdxType:"CodeBlock"}),Object(o.b)(s.j,{kind:"note",mdxType:"TextBlock"},"\nFull Firebase Crashlytics documentation can be found on the [official website](https://firebase.google.com/docs/crashlytics).\n"))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/integrations/firebase-crashlytics-integration.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-integrations-firebase-crashlytics-integration-mdx-a832813f766c535f7951.js.map