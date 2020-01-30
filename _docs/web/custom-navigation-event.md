---
title: "Custom navigation event"
subtitle: "Log your own specific navigation event."
description: ""
---

**Custom navigation event** allows for easy tracking of navigation event that happens without actual URL in address bar changing.

Using this API when the url in address bar is changing can result in unwanted URLs duplication in recordings
{: .callout .callout-warning }

Code you need to insert in your site has a following format in **JavaScript**.

```js
<script>
  smartlook('navigation', url);
</script>
```

The `url` parameter can be either:
- full location (URL) of the page
- path portion of a URL that should start with a slash (/) character
