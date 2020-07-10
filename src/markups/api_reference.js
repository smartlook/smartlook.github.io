export const networkIntercepting1 = `
# Network intercepting
You can track your apps' HTTP traffic using the network inceptor provided by the SDK. This feature is available to you if you are using **OkHttp** for your HTTP/REST communication.

NOTE: If you are using another HTTP library that allows intercepting, please feel free to submit a feature request here.

## OkHttp interceptor
If you are using \`OkHttp\` you can add Smartlook interceptor as a another \`NetworkInterceptor\` when creating a \`OkHttpClient\` like this:
`;

export const networkIntercepting2 = `
We will **not read or send out any body data**, we are reading and sending only these request metadata:
* **Request url** that can be stripped of any sensitive data -> read more.
* **Http method** used for this request.
* **Request headers** that can be filtered out so they do not leak any sensitive data.
* **Response headers** that are filtered out so they do not leak any sensitive data.
* **Protocol** negotiated by this connection.
* **Duration** between request and response/failure.
* **Request status** stating if the request was successful or eventually how it failed, can be one of:
  * Ok
  * Error
  * Abort
  * Timeout
* **Status code** of http response.
* Flag stating if response was received from **cache**.

NOTE: All intercepted requests can be displayed in **dev tools** on every recording.

### Url masks
You can hide sensitive parts of request URLs using \`UrlMask\`:
`;

export const networkIntercepting3 = `
NOTE: If you don't specify \`replaceWith\` \`String\` explicitly the default replace \`String\` is used.
You need to initialize \`SmartlookOkHttpInterceptor\` using \`Builder\` to define used \`UrlMask\`s:
`;

export const networkIntercepting4 = `
EXAMPLE: We are intercepting request with URL containing sensitive query named \`secret\`:
\`\`\`
https://example.com/page?secret=password&second=query
\`\`\`

The content of sensitive query can be hidden for intercepting using \`UrlMask\`:
`;

export const networkIntercepting5 = `
With above shown \`UrlMask\` intercepted request will have following URL stored:

\`\`\`
https://example.com/page?secret=<sensitive>&second=query
\`\`\`

### Sensitive headers

Intercepted headers can contain sensitive data, so they need to be filtered out by their name. This can be done using \`sensitiveHeaderNameRegexps\`, this list of sensitive header names contains these regular expressions by default:
* \`".*csrf.*"\`
* \`".*token.*"\`
* \`".*auth.*"\`
* \`".*key.*"\`
* \`".*cookie.*"\`

You can define your custom list of sensitive header name regular expressions:
`;
