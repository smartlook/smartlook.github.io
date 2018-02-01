---
layout: page
title: Recording information
permalink: /docs/recording-information/
---

Do you need even more information about your recordings? We prepared for you some variables with specific indentificators. The most useful one will be recording URL as it gives you a link to see and play given recording.

| Variable | Description | Example |
| --- | --- | --- |
| `playUrl` | Recording URL | https://www.smartlook.com/app/12a3bcd45678efa90123b4567/play/a12bCDEfg | 
| `projectId` | Project ID | 12a3bcd45678efa90123b4567 |
| `sessionId` | Session ID | a12bCDEfg |
| `visitorId` | Visitor ID |  AbcDeFGhi |
| `recordId` | Recording ID | A1B2c345dE |
| `key` | Project key | a123bcd4e56ab123b3456789b12ab1234abcde1a |

## Access variables 

This example shows a code how it can look in a console.

```javascript
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

```javascript
<script>
  smartlook(
    function () {
      MyServiceToLogUrl.sendToApi(smartlook.playUrl);
    }
  );
</script>
```