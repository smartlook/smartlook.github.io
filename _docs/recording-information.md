---
title: "Recording information"
subtitle: "Get recording information such as URL."
---

Our API offers options to display even more information about your recordings.

## Variables

 We prepared for you some variables with specific indentificators. The most useful one will be recording URL as it gives you a link to see and play given recording.

{% include component/tables/docs/{{ page.title | slugify }}/variables.html %}

### Access variables

This example shows a code how it can look in a console.

```js
<script>
  smartlook(
    function () {
      console.log(smartlook.playUrl);
      console.log(smartlook.visitorId);
    }
  );
</script>
```

Now let's say you want to save recording URL = `playUrl` in your own service.

```js
<script>
  smartlook(
    function () {
      MyServiceToLogUrl.sendToApi(smartlook.playUrl);
    }
  );
</script>
```
