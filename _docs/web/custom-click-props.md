---
title: "Custom click props"
subtitle: "Log your own specific data for click tracking."
description: "Use in case you have on your site our API code which can record visitors."
---

## What props can you add

By adding `data-recording-click-props` attribute into any html element, data contained in this attribute on this element and on every parent element up the body will be added to the click params.

The attribute `data-recording-click-props` enabled values is only a JSON.

```html
<div data-recording-click-props='{"customDivData":"customDivValue"}'>
    <a data-recording-click-props='{"customLinkData":"customLinkValue"}'>
        Link
    </a>
</div>
```

{: .alert .alert-warning }
Pay attention on the format of the single and double quotes. Other format of quotes is not supported.

When the link is clicked, the click properties will contain both values in addition to other values like the ones from identify API.

```json
{
   "customDivData": "customDivValue",
   "customLinkData": "customLinkValue"
}
```