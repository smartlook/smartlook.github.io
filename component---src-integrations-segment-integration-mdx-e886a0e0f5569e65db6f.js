(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{SAwU:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t("Fcif"),i=t("+I+c"),o=(t("mXGw"),t("/FXl")),r=t("TjRS"),s=t("+8zC"),l=(t("aD51"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/integrations/segment-integration.mdx"}});var d={_frontmatter:l},c=r.a;function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)(c,Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)(s.k,{mdxType:"Title"},"Segment integration"),Object(o.b)(s.j,{kind:"important",mdxType:"TextBlock"},"\nThe standard Segment integration is not available at this time. It is technically ready, but our integration is pending approval from Segment.\n\nThis means that the standard integration method isn’t possible.\n\nHowever, you can use our custom automated Smartlook to Segment integration, or the recipes below to write your own integration.\n"),Object(o.b)(s.j,{visibleOn:"android,ios",mdxType:"TextBlock"},"\n## Automatic integration\nSmartlook can be automatically integrated into Segment as its source middleware:\n"),Object(o.b)(s.c,{kind:"example",snippets:{android:{java:"\n// setup Smartlook\nSmartlook.setupAndStartRecording(SMARTLOOK_API_KEY);\n\n// initialize Segment analytics with Smartlook Middleware\nAnalytics analytics = new Analytics.Builder(this, SEGMENT_API_KEY)\n        .trackApplicationLifecycleEvents()\n        .recordScreenViews()\n        .useSourceMiddleware(Smartlook.createSegmentMiddleware())\n        .build();\n\nAnalytics.setSingletonInstance(analytics);\n      ",kotlin:"\n// setup Smartlook\nSmartlook.setupAndStartRecording(SMARTLOOK_API_KEY);\n\n// initialize Segment analytics with Smartlook Middlewar\nval analytics = Analytics.Builder(this, SEGMENT_API_KEY)\n        .trackApplicationLifecycleEvents()\n        .recordScreenViews()\n        .useSourceMiddleware(Smartlook.createSegmentMiddleware())\n        .build()\n\nAnalytics.setSingletonInstance(analytics)\n      "},ios:{swift:"\n// initialize Smartlook\nlet smartlookConfiguration = Smartlook.Configuration.configuration(key: SMARTLOOK_API_KEY)\nSmartlook.setupAndStartRecording(configuration: smartlookConfiguration)\n\n// initialize Segment\nlet segmentConfiguration = SEGAnalyticsConfiguration(writeKey: SEGMENT_API_KEY)\n...\nif let smartlookMiddleware = Smartlook.segmentSourceMiddleware(options: .default, segResetEventType: SEGEventType.reset.rawValue) {\n  segmentConfiguration.middlewares = [smartlookMiddleware]\n}\n \nSEGAnalytics.setup(with: segmentConfiguration)\n","objective-c":"\n// initialize Smartlook\nSLSetupConfiguration *configuration = [SLSetupConfiguration configurationWithKey:SMARTLOOK_API_KEY];\n[Smartlook setupAndStartRecordingWithConfiguration:configuration];\n\n// initialize Segment\nSEGAnalyticsConfiguration *segmentConfiguration = [SEGAnalyticsConfiguration configurationWithWriteKey:SEGMENT_API_KEY];\n...    \nSEGBlockMiddleware *smartlookMiddleware = [Smartlook segmentSourceMiddlewareWithOptions:SLSegmentMiddlewareOptionDefault whereSEGResetEventTypeIs:SEGEventTypeReset];\nif (smartlookMiddleware != nil) {\n  segmentConfiguration.middlewares = @[smartlookMiddleware];\n}\n\n[SEGAnalytics setupWithConfiguration:segmentConfiguration];\n"}},mdxType:"CodeBlock"}),Object(o.b)(s.j,{visibleOn:"ios",mdxType:"TextBlock"},"\nSmartlook Middleware integration transalates Segment's `track`,  `screen`, `identify`, `alias` and `reset` calls to the respective Smartlook method calls. The `options` argument can filter unnecessary or unwanted mapping.\n"),Object(o.b)(s.j,{visibleOn:"android",mdxType:"TextBlock"},"\nSmartlook Middleware integration transalates Segment's `track`,  `screen` `identify` and `alias` calls to the respective Smartlook method calls. The `options` argument can filter unnecessary or unwanted mapping.\n"),Object(o.b)(s.j,{visibleOn:"ios",mdxType:"TextBlock"},"\n| Option        | Segment Event type        | Smartlook API Method(s)                                                  | Notes                                                               |\n|---------------|---------------------------|--------------------------------------------------------------------------|---------------------------------------------------------------------|\n|`.track`     | `SEGEventTypeTrack`     | `trackCustomEvent(name:props:)`                                        | - - -  |\n|`.screen`    | `SEGEventTypeScreen`    |`trackNavigationEvent(withControllerId:type:)`                          | This mapping is set **off** in the `.default` options combinations, as it interferes with Smartlook Heatmap generating. <br /> When enabled, the Smartlook's `type` is always `.enter`.|\n|`.identity`  | `SEGEventTypeIdentify`  |`setUserIdentifier(userIdentifier:); setSessionProperty(value:forName:)`| - - -  |\n|`.alias`     | `SEGEventTypeAlias`     |`setUserIdentifier(userIdentifier:)`                                    | - - -  |\n|`.reset`     | `SEGEventTypeReset`     |`resetSession(resetUser:)`                                              | `resetUser` attribute is always set to `true`.   |\n|`.all`       | - - -                     | - - -                                                                    | Sets all options (all call mappings) enabled.            |\n|`.default`   | - - -                     | - - -                                                                    | Sets all options except for `.screen` to avoid Smartlook heatmap mangling.|\n"),Object(o.b)(s.j,{visibleOn:"android",mdxType:"TextBlock"},"\n| Option                   | Segment Event type | Smartlook API Method(s)                                                   | Notes                                                               |\n|--------------------------|--------------------|---------------------------------------------------------------------------|---------------------------------------------------------------------|\n|`ENABLE_CUSTOM_EVENTS`  | `track`          | `trackCustomEvent(name, props:)`                                        | - - -  |\n|`ENABLE_SCREEN_EVENTS`  | `screen`         | `trackNavigationEvent(name, ViewState.START)`                           | This mapping is **not enabled** in the `.default` option combination, as it interferes with Smartlook Heatmap generating. <br /> When enabled, the Smartlook's `ViewState` is always `.START`.|\n|`ENABLE_IDENTIFY`       | `identify`       | `setUserIdentifier(userIdentifier); setUserProperties(properties)`      | - - -  |\n|`ENABLE_ALIAS`          | `alias`          | `setUserIdentifier(userIdentifier)`                                     | This mapping is **not enabled** in the `.default` option combination, because Smartlook SDK doesnt have alias functionality. If enabled, alias is going to rewrite previous user identifier.  |\n|`ENABLE_ALL`            | - - -              | - - -                                                                     | Sets all options (all call mappings) enabled.            |\n|`ENABLE_DEFAULT`        | - - -              | - - -                                                                     | Sets all options except for `.screen` and `.alias` to avoid Smartlook heatmap mangling and identifier rewritting. |\n"),Object(o.b)(s.c,{kind:"example",snippets:{android:{java:"\nList<SegmentMiddlewareOption> options = new ArrayList<>();\noptions.add(SegmentMiddlewareOption.ENABLE_CUSTOM_EVENTS);\noptions.add(SegmentMiddlewareOption.ENABLE_IDENTIFY);\n\nMiddleware smartlookMiddleware = Smartlook.createSegmentMiddleware(options);\n      ",kotlin:"\nval options = listOf(\n  SegmentMiddlewareOption.ENABLE_CUSTOM_EVENTS,\n  SegmentMiddlewareOption.ENABLE_IDENTIFY)\n\nval smartlookMiddleware = Smartlook.createSegmentMiddleware(options)\n      "}},mdxType:"CodeBlock"}),Object(o.b)("h2",{id:"manual-integration"},"Manual integration"),Object(o.b)("p",null,"Recipes for straigthforward Segment integration in Android or iOS that could be inspiration for other supported platforms as well. "),Object(o.b)("p",null,"Full Segment documentation for mobile platforms can be found on the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://segment.com/docs/connections/sources/catalog/"}),"official website"),"."),Object(o.b)(s.b,{kind:"example",snippets:{java:'\npublic Middleware createSegmentMiddleware() {\n    return chain -> processSegmentPayload(chain.payload());\n}\n\nprivate void processSegmentPayload(BasePayload payload) {\n    switch (payload.type()) {\n        case BasePayload.Type.identify:\n            identify(payload);\n            break;\n\n        // handle other event types ...\n    }\n}\n\nprivate void identify(BasePayload payload) {\n    String userId = payload.userId();\n    if (userId != null) {\n        Smartlook.setUserIdentifier(userId);\n    }\n\n    Map<Object, Object> traits = obtainMapFromPayload(payload, "traits");\n    if (traits != null) {\n        Smartlook.setUserProperties(new JSONObject(traits), false);\n    }\n}\n\nprivate Map<Object, Object> obtainMapFromPayload(BasePayload payload, String key) {\n    Object traits = payload.get(key);\n    if (traits instanceof Map) {\n        return (Map<Object, Object>) traits;\n    }\n\n    return null;\n}\n      ',kotlin:'\n// Make sure to setup and start Smartlook SDK before crating Segment Middleware   \nfun createSegmentMiddleware() = Middleware { chain -> processSegmentPayload(chain.payload()) }\n\nprivate fun processSegmentPayload(payload: BasePayload) {\n    when(payload.type()) {\n        BasePayload.Type.identify -> {\n            identify(payload)\n        }\n        // handle other event types ...\n    }\n}\n\nprivate fun identify(payload: BasePayload) {\n    payload.userId()?.let { userIdentifier ->\n        Smartlook.setUserIdentifier(userIdentifier)\n    }\n\n    payload.obtainMap("traits")?.let { traits ->\n        Smartlook.setUserProperties(JSONObject(traits), false)\n    }\n}\n\nprivate fun BasePayload.obtainMap(key: String): Map<*, *>? {\n    this[key]?.let { map ->\n        if (map is Map<*, *>) {\n            return map\n        }\n    }\n    return null\n}\n      ',swift:"\nlet segmentConfiguration = SEGAnalyticsConfiguration(writeKey: SEGMENT_API_KEY)\n    \nlet smartlookMiddleware = SEGBlockMiddleware(block: { (context, next) in\n  switch (context.eventType) {\n  case .track:\n    if let track = context.payload as? SEGTrackPayload {\n      var props = [String:String]()\n      // striglify payload props\n      Smartlook.trackCustomEvent(name: track.event, props: props)\n    }\n  default:\n    break\n  }\n  next(context)\n})\nsegmentConfiguration.middlewares = [smartlookMiddleware]\n\nSEGAnalytics.setup(with: segmentConfiguration)\n          ","objective-c":"\nSEGAnalyticsConfiguration *segmentConfiguration = [SEGAnalyticsConfiguration configurationWithWriteKey:SEGMENT_API_KEY];\n\nSEGBlockMiddleware *smartlookMiddleware = [[SEGBlockMiddleware alloc] initWithBlock:^(SEGContext * _Nonnull context, SEGMiddlewareNext  _Nonnull next) {\n  switch (context.eventType) {\n    SEGEventTypeTrack:\n    {\n      SEGTrackPayload *track = (SEGTrackPayload *)context.payload;\n      [Smartlook trackCustomEventWithName:track.event props:track.properties];\n    }\n    default: {}\n  }\n  next(context);\n}];\nsegmentConfiguration.middlewares = @[smartlookMiddleware];\n\n[SEGAnalytics setupWithConfiguration:segmentConfiguration];\n"},mdxType:"Code"}))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/integrations/segment-integration.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-integrations-segment-integration-mdx-e886a0e0f5569e65db6f.js.map