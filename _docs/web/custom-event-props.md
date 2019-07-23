---
title: "Custom event properties"
subtitle: "Log your own specific data for every event."
description: ""
---

You can add properties to every event that is being tracked using the `properties` call as shown below:

```js
<script>
  smartlook('properties', { 'package': 'free', 'environment': 'production' });
</script>
```

Properties `package` and `environment` will be added to every event that is being tracked (urls, clicks, ...) including the custom events.

Can be called multiple times, all properties will be merged.
To remove existing property, set its' value to `null` or `undefined`.

{: .alert .alert-info }
Useful for filtering or events breakdowns