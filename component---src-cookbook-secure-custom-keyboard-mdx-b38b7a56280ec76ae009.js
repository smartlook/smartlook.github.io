(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"7qIa":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return p})),t.d(n,"default",(function(){return g}));var o=t("Fcif"),i=t("+I+c"),a=(t("mXGw"),t("/FXl")),r=t("TjRS"),c=t("+8zC"),s=(t("NRsk"),t("II6R")),d=t.n(s),l=t("jN6t"),b=t.n(l),p=(t("aD51"),{});void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/cookbook/secure_custom_keyboard.mdx"}});var m={_frontmatter:p},u=r.a;function g(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)(u,Object(o.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)(c.i,{kind:"important",invisibleOn:"android",mdxType:"TextBlock"},"\nCode samples in this guide are written in Java/Kotlin but the principles are applicable on all platforms.\n"),Object(a.b)(c.j,{mdxType:"Title"},"Secure custom keyboard"),Object(a.b)("p",null,"Some applications use non-native keyboards, typically for entering pin codes, etc.\nThis can lead to recording of sensitive data as we are gonna demonstrate by simple example."),Object(a.b)("img",{src:d.a}),Object(a.b)("p",null,"For this screen we need to change rendering mode to ",Object(a.b)("inlineCode",{parentName:"p"},"RenderingMode.NO_RENDERING"),":"),Object(a.b)(c.b,{snippets:{java:"\nSmartlook.setRenderingMode(RenderingMode.NO_RENDERING);\n",kotlin:"\nSmartlook.setRenderingMode(RenderingMode.NO_RENDERING);\n"},mdxType:"Code"}),Object(a.b)("p",null,"By doing this we will ensure the SDK will not record the pin when the user enters it into the application. The visual clues might be:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Number buttons have a hover effect on them."),Object(a.b)("li",{parentName:"ul"},"Numbers might be visible for a small period of time after they are entered.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Setting rendering mode is not enough!")," SDK automatically tracks touch events, so even with blank video, we can clearly see where the user is touching on the recording."),Object(a.b)("img",{src:b.a}),Object(a.b)(c.i,{kind:"note",mdxType:"TextBlock"},"\nSDK does not record touches on native keyboard, so there is no risk of leaking any sensitive data this way.\n"),Object(a.b)("p",null,"Automatic touch detection can be disabled by setting event tracking mode to ",Object(a.b)("inlineCode",{parentName:"p"},"EventTrackingMode.IGNORE_USER_INTERACTION"),":"),Object(a.b)(c.b,{snippets:{java:"\nSmartlook.setEventTrackingMode(EventTrackingMode.IGNORE_USER_INTERACTION);\n",kotlin:"\nSmartlook.setEventTrackingMode(EventTrackingMode.IGNORE_USER_INTERACTION);\n"},mdxType:"Code"}),Object(a.b)("p",null,"After applying these two steps SDK will not record any sensitive data on this “pin” screen."),Object(a.b)("p",null,"When your application is leaving this screen just set rendering mode and event tracking mode, back to your preferred values:"),Object(a.b)(c.b,{snippets:{java:"\nSmartlook.setRenderingMode(RenderingMode.NATIVE);\nSmartlook.setEventTrackingMode(EventTrackingMode.FULL_TRACKING);\n",kotlin:"\nSmartlook.setRenderingMode(RenderingMode.NATIVE);\nSmartlook.setEventTrackingMode(EventTrackingMode.FULL_TRACKING);\n"},mdxType:"Code"}))}void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/cookbook/secure_custom_keyboard.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-cookbook-secure-custom-keyboard-mdx-b38b7a56280ec76ae009.js.map