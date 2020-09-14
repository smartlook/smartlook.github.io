(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"8/tI":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return b}));var o=n("Fcif"),a=n("+I+c"),r=(n("mXGw"),n("/FXl")),i=n("TjRS"),s=n("+8zC"),l=(n("aD51"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/rest-api/rest-api.mdx"}});var c={_frontmatter:l},p=i.a;function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(p,Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s.k,{mdxType:"Title"},"Getting started"),Object(r.b)("p",null,"Smartlook provides a set of useful methods to programmatically retrieve information about various resources. You can use the API to further analyze data of your visitors\nand do a deeper exploration of values collected by Smartlook."),Object(r.b)("h1",{id:"resources"},"Resources"),Object(r.b)("p",null,"This API provides access to a number of resources available in the Smartlook. Currently provided ones are the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Visitors"),Object(r.b)("li",{parentName:"ul"},"Events"),Object(r.b)("li",{parentName:"ul"},"Funnels")),Object(r.b)("h1",{id:"using-the-api"},"Using the API"),Object(r.b)("p",null,"Requests to the API are performed using the HTTP protocol to the host ",Object(r.b)("inlineCode",{parentName:"p"},"https://public-api.smartlook.com"),".\nTo access your project data, you have to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#create-the-api-token"}),"get an API token")," that will be sent together with your request to authenticate it.\nYour request to the API then must contain an authorization header as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"Authorization: Bearer <token>\n")),Object(r.b)("p",null,"For example, to list the events of your project, you perform the following call:"),Object(r.b)(s.b,{kind:"example",snippets:{bash:"\ncurl -X GET \\\n  https://public-api.smartlook.com/api/events \\\n  -H 'authorization: Bearer <token>' \\\n  -H 'cache-control: no-cache'\n"},mdxType:"Code"}),Object(r.b)("p",null,"The complete list of available endpoints is listed in the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/rest-api/reference"}),"API reference"),".\nEach endpoint is prefixed by a version number (eg. ",Object(r.b)("inlineCode",{parentName:"p"},"/api/v1/events"),"), however, it is not mandatory to specify the version. For the calls without version being specified (eg. ",Object(r.b)("inlineCode",{parentName:"p"},"/api/events"),") the latest is used."),Object(r.b)("h2",{id:"traversing-paged-results"},"Traversing paged results"),Object(r.b)("p",null,"When making an API requests to a resource, that returns multiple objects, the result will be split into multiple pages.\nAll the paginated responses are using cursor-based pagination and therefore calls to pages are stable.\nThe response of paginated results has a ",Object(r.b)("inlineCode",{parentName:"p"},"pagination")," property, that contains two values - ",Object(r.b)("inlineCode",{parentName:"p"},"before")," and ",Object(r.b)("inlineCode",{parentName:"p"},"after"),".\nThese values point to the beginning and the end of the returned page respectively."),Object(r.b)(s.j,{kind:"important",mdxType:"TextBlock"},"\n**Don't store cursors.** Cursors are only temporal values as they quickly may become invalid.\n"),Object(r.b)("p",null,"To get the link to the next page add ",Object(r.b)("inlineCode",{parentName:"p"},"after")," cursor to the query (",Object(r.b)("inlineCode",{parentName:"p"},"?after=<after>"),") (for the previous page use the ",Object(r.b)("inlineCode",{parentName:"p"},"before")," the cursor).\nThere can be only one cursor in the query.\nLinks to both previous and next page can be found in the ",Object(r.b)("inlineCode",{parentName:"p"},"_links")," section of the response.\nTo get consistent results we recommend using ",Object(r.b)("inlineCode",{parentName:"p"},"_links")," for navigation between pages."),Object(r.b)("p",null,"To change the number of results returned in response you may pass the ",Object(r.b)("inlineCode",{parentName:"p"},"limit")," parameter in the query.\nThis value will be then propagated to the ",Object(r.b)("inlineCode",{parentName:"p"},"_links")," in further responses or it will be set to a default value."),Object(r.b)("p",null,"The response may then looks as follows:"),Object(r.b)(s.b,{kind:"example",snippets:{json:'\n{\n    ...data,\n    "pagination": {\n        "before": "MTaxX34=",\n        "after": "HellOW0rLD",\n    }\n    "_links": {\n        "nextPage": "/api/events?after=HellOW0rLD&limit=10",\n        "previousPage": "/api/events?before=MTaxX34=&limit=10"\n    }\n}\n'},mdxType:"Code"}),Object(r.b)("h1",{id:"managing-the-api-tokens"},"Managing the API tokens"),Object(r.b)("p",null,"The Smartlook REST API uses tokens for authentication. You will need one if you are about to access the Smartlook REST API or you are integrating some of the third party applications with Smartlook."),Object(r.b)("p",null,"You can manage your tokens in the settings of your project. To obtain a token, navigate in the Smartlook to your ",Object(r.b)("strong",{parentName:"p"},"Account settings"),", and there select a project you want to access through the REST API.\nOn the right side, there is a section ",Object(r.b)("strong",{parentName:"p"},"REST API")," where you can see the list of active tokens in your project. Next to each token, there is a time since the token was last used. Keep in mind, that when the token is inactive for more than 90 days, it will automatically become invalid."),Object(r.b)(s.j,{kind:"note",mdxType:"TextBlock"},"\nThe tokens can be managed only by the owner of the project. If you want to access the REST API of projects you were invited in, please contact the owner to give you the token.\n"),Object(r.b)("h2",{id:"create-the-api-token"},"Create the API token"),Object(r.b)("p",null,"In the bottom part of the ",Object(r.b)("strong",{parentName:"p"},"REST API")," section lives a button ",Object(r.b)("strong",{parentName:"p"},"Create token"),". After clicking the button you will be prompted to enter the token description.\nThe description comes in handy when you have multiple tokens in the project and there it should explain the purpose of the token.\nAfter clicking the ",Object(r.b)("strong",{parentName:"p"},"Create")," button, you will see the token. Now you can copy it to the clipboard and close the dialog.\nWhen you close the dialog with the token, you won't be for the security reasons able to see the token again. So be sure that you have stored your token correctly."),Object(r.b)(s.j,{kind:"important",mdxType:"TextBlock"},"\n**Be careful!** Anyone with the token can access the data of your project. Please store the token securely and don't allow unauthorized entities to access it.\nIn case you might want to delete the token, you can do so in [the tokens list](#managing-the-api-tokens).\n"),Object(r.b)("p",null,"The token is created in the scope of a single project and therefore to be able to access multiple of your projects, you have to create a token for each of them separately.\nTo help you manage the access to your projects in a more granular manner, you may create multiple tokens per a single project where each is for a different purpose."),Object(r.b)("h1",{id:"rate-limits"},"Rate limits"),Object(r.b)("p",null,"There are thousands of developers making requests to the Smartlook REST API at every moment.\nTo keep our API available to as many of you as possible, we introduced rate limits to the number of requests you can make during a time window."),Object(r.b)("p",null,"There is a budget for both a project and endpoints.\nEach endpoint has a price assigned and it might be higher for the endpoints that impose more stress on the system."),Object(r.b)("p",null,"To get information about your usage of the Smartlook REST API you can call ",Object(r.b)("inlineCode",{parentName:"p"},"/api/statistics")," endpoint.\nTo extend limits for your projects please contact the Smartlook support."))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/rest-api/rest-api.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-rest-api-rest-api-mdx-f6deb7b2fb6975549047.js.map