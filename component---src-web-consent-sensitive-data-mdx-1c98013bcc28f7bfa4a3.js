(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{jhot:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return h}));var i=n("Fcif"),o=n("+I+c"),r=(n("mXGw"),n("/FXl")),a=n("TjRS"),s=n("+8zC"),c=n("kbNX"),l=n.n(c),d=n("7REq"),b=n.n(d),p=(n("aD51"),["components"]),m={};void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!Object.prototype.hasOwnProperty.call(m,"__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/web/consent-sensitive-data.mdx"}});var u={_frontmatter:m},f=a.a;function h(e){var t=e.components,n=Object(o.a)(e,p);return Object(r.b)(f,Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s.l,{mdxType:"Title"},"Consent and sensitive data"),Object(r.b)(s.k,{kind:"important",mdxType:"TextBlock"},'\n  <b>IMPORTANT NOTE</b>: This brand-new API is a replacement for an old <a href="/docs/web/gdpr" target="_blank" rel="noopener noreferrer">consent API</a>.\n  It is enabled by default in projects created after the <b>1st of April 2022</b> (consent version 2).\n  If your project was created prior to this date (consent version 1) please refer to <a href="/docs/web/consent-sensitive-data#migration-guide">the migration guide</a>.\n  There is an ongoing transition period until the <b>1st of June 2022</b> in which you should migrate to the new API.\n  After the period old API will no longer work and any call will show only a warning with a link to this documentation.\n  <br /> <br />\n  <b>Project\'s consent version</b> can be found in project detail (screenshot below).\n  <br />\n  <b>Personal data collection settings</b> changes from consent version 1 to consent version 2 can be seen at screenshot below.\n'),Object(r.b)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"24px"}},Object(r.b)("div",{style:{display:"flex",justifyContent:"center"}},Object(r.b)("img",{src:l.a,style:{marginBottom:0,borderRadius:"3px",border:"1px solid black"}})),Object(r.b)("div",{style:{fontStyle:"italic",display:"flex",justifyContent:"center",marginTop:"6px",fontSize:"14px"}},"Project detail with consent version")),Object(r.b)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"24px"}},Object(r.b)("div",{style:{display:"flex",justifyContent:"center"}},Object(r.b)("img",{src:b.a,style:{width:"750px",marginBottom:0,marginTop:"24px",borderRadius:"3px",border:"1px solid black"}})),Object(r.b)("div",{style:{fontStyle:"italic",display:"flex",justifyContent:"center",marginTop:"6px",fontSize:"14px"}},"Personal data collection settings (consent v1 and consent v2)")),Object(r.b)("p",null,"The section covers our API for handling sensitive data.\nIt can be useful especially when you want to have control over which data is being recorded.\nOur WEB SDK is written with privacy-first in mind therefore we do not record any potentially sensitive data by default.\nThis means that inputs, IP addresses, on-page emails and long numbers are not recorded\nunless you enable it explicitly via ",Object(r.b)("a",{parentName:"p",href:"#record-api"},"record API"),"."),Object(r.b)("h2",{id:"consent"},"Consent"),Object(r.b)(s.k,{kind:"note",mdxType:"TextBlock"},"\n <b>By default, no sensitive data are recorded. You most likely need to get visitors' consent first before enabling recording sensitive data.</b>\n"),Object(r.b)("p",null,"We divided sensitive data handling into four categories - form inputs, IP addresses, emails and numbers.\nEach category can be treated separately. This gives you a grained control over which data you want to be recorded.\nPlease keep in mind that before enabling recording of any category you probably need to get consent\nfrom visitor first depending on which jurisdiction you are in.\nYou can read more about it on our ",Object(r.b)("a",{parentName:"p",href:"https://help.smartlook.com/en/articles/3244453-terms-of-service"},"Terms of Service")," page."),Object(r.b)("p",null,"Please note that if you want to disable recording of any sensitive data types, this will apply only prospectively and historical data would need to be deleted on request. For IP addresses, the latest known IP address will remain associated with the visitor ID, unless manually deleted."),Object(r.b)("h2",{id:"record-api"},"Record API"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"record")," API allows you to handle recording of form inputs, IP addresses, emails and longer numbers individually.\nFollowing subsections explain how to use it correctly. This API should be called always after ",Object(r.b)("inlineCode",{parentName:"p"},"init")," call."),Object(r.b)("h3",{id:"form-inputs"},"Form inputs"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"forms")," option covers all interactive form elements such as ",Object(r.b)("inlineCode",{parentName:"p"},"<input />"),", ",Object(r.b)("inlineCode",{parentName:"p"},"<select />")," or ",Object(r.b)("inlineCode",{parentName:"p"},"<textarea />"),".\nThese elements do not necessarily need to be within ",Object(r.b)("inlineCode",{parentName:"p"},"<form />")," to be recorded.\nSensitive inputs such as passwords are never recorded even if recording forms is enabled.\nInstead, in recording we show typing animation to indicate user interaction with that particular field.\nIf you have more elements you want to mask or not record at all you can always use our ",Object(r.b)("a",{parentName:"p",href:"/docs/web/sensitive-data-protection#masking"},"data attributes API"),"."),Object(r.b)("p",null,"To start recording form inputs on your website use ",Object(r.b)("inlineCode",{parentName:"p"},"record")," with ",Object(r.b)("inlineCode",{parentName:"p"},"{ forms: true }"),"."),Object(r.b)(s.b,{kind:"example",snippets:{javascript:"\n<script>\n  smartlook('record', { forms: true });\n<\/script>\n"},mdxType:"Code"}),Object(r.b)("p",null,"To stop recording form inputs on your website use ",Object(r.b)("inlineCode",{parentName:"p"},"record")," with ",Object(r.b)("inlineCode",{parentName:"p"},"{ forms: false }"),"."),Object(r.b)(s.b,{kind:"example",snippets:{javascript:"\n<script>\n  smartlook('record', { forms: false });\n<\/script>\n"},mdxType:"Code"}),Object(r.b)("h3",{id:"ip-address"},"IP address"),Object(r.b)("p",null,"The IP address recording allows us to store customer IP address that can be used for example in filtering later on.\nPlease note that once the IP address recording is enabled it cannot be stopped again."),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"record")," with ",Object(r.b)("inlineCode",{parentName:"p"},"{ ips: true }")," attribute to start recording of IP address."),Object(r.b)(s.b,{kind:"example",snippets:{javascript:"\n<script>\n  smartlook('record', { ips: true });\n<\/script>\n"},mdxType:"Code"}),Object(r.b)("h3",{id:"emails"},"Emails"),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"record")," with ",Object(r.b)("inlineCode",{parentName:"p"},"{ emails: true }")," or ",Object(r.b)("inlineCode",{parentName:"p"},"{ emails: false }")," attributes to start or stop recording of emails on the page."),Object(r.b)(s.b,{kind:"example",snippets:{javascript:"\n<script>\n  smartlook('record', { emails: true });\n<\/script>\n"},mdxType:"Code"}),Object(r.b)(s.b,{kind:"example",snippets:{javascript:"\n<script>\n  smartlook('record', { emails: false });\n<\/script>\n"},mdxType:"Code"}),Object(r.b)("h3",{id:"numbers"},"Numbers"),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"record")," with ",Object(r.b)("inlineCode",{parentName:"p"},"{ numbers: true }")," or ",Object(r.b)("inlineCode",{parentName:"p"},"{ numbers: false }")," attributes to start or stop recording of longer numbers.\nIf longer numbers are not recorded we replace them with wildcards (","*",").\nThis option is especially effective if you do not want to record telephone numbers, social numbers and so on.\nLonger number is defined as a sequence of 8 numbers in a row that can contain hyphens or space characters in between."),Object(r.b)(s.b,{kind:"example",snippets:{javascript:"\n<script>\n  smartlook('record', { numbers: true });\n<\/script>\n"},mdxType:"Code"}),Object(r.b)(s.b,{kind:"example",snippets:{javascript:"\n<script>\n  smartlook('record', { numbers: false });\n<\/script>\n"},mdxType:"Code"}),Object(r.b)("h3",{id:"combining-calls"},"Combining calls"),Object(r.b)("p",null,"All the calls can be combined.\nYou can also specify only the subset of the fields. The fields that are not specified stay untouched."),Object(r.b)(s.b,{kind:"example",snippets:{javascript:"\n<script>\n  smartlook('record', { forms: true, numbers: true, emails: false, ips: true });\n<\/script>\n"},mdxType:"Code"}),Object(r.b)("h2",{id:"migration-guide"},"Migration guide"),Object(r.b)("p",null,"If you use an old ",Object(r.b)("inlineCode",{parentName:"p"},"consent")," API then migration to new ",Object(r.b)("inlineCode",{parentName:"p"},"record")," API is pretty seamless.\nOld consent API will be cut off at the 1st of June 2022. Any calls to this API will only print warning to console."),Object(r.b)("p",null,"As you can see in the example below there is no equivalent for ",Object(r.b)("inlineCode",{parentName:"p"},"consentAPI")," call in the new record API.\nConsent for identifying via API is implicitly given once you call ",Object(r.b)("a",{parentName:"p",href:"/docs/web/identify-visitor"},Object(r.b)("inlineCode",{parentName:"a"},"identify")," API"),".\nAssuming you enabled identify API in project settings in our application."),Object(r.b)("p",null,"Old calls:"),Object(r.b)(s.b,{kind:"example",snippets:{javascript:"\n<script>\n  smartlook('consentForms', 'consent given');\n  smartlook('consentIP','consent given');\n  smartlook('consentAPI', 'consent given');\n<\/script>\n"},mdxType:"Code"}),Object(r.b)("p",null,"New call:"),Object(r.b)(s.b,{kind:"example",snippets:{javascript:"\n<script>\n  smartlook('record', { forms: true, ips: true, api: true });\n<\/script>\n"},mdxType:"Code"}),Object(r.b)("p",null,"If you used to have numbers and emails recording enabled in your application you need to explicitly call it here now."),Object(r.b)(s.b,{kind:"example",snippets:{javascript:"\n<script>\n  smartlook('record', { forms: true, emails: true, ips: true, numbers: true, api: true });\n<\/script>\n"},mdxType:"Code"}))}void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!Object.prototype.hasOwnProperty.call(h,"__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/web/consent-sensitive-data.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-web-consent-sensitive-data-mdx-1c98013bcc28f7bfa4a3.js.map