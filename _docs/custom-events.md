---
layout: page
title: Custom events
permalink: /docs/custom-events/
---

In case our defined events are not enough, you can add your own and we will track them. The format you need in your JavaSript is as follows:

```javascript
<script>
  smartlook('track', eventName, properties);
</script>
```

For example, if inside your app a user sees a window for package upgrade. In the moment this event happens, you can send us this information using following code:

```javascript
<script>
  smartlook('track', 'UserOpenUpsellWindow', {
    "type": "SmallDiskLimit"
  });
</script>
```

Parameters `properties` are variable. In case your event does not need any parameters, you do not use this one. In case user will reach prepaid limit and all you need to do is to display this action in recording, you do not need to use any other parameters.

```javascript
<script>
  smartlook('track', 'UserReachLimit');
</script>
```

In case you use in your website [Identify Visitor](/identify-visitor/), this identification will be displayed in recording with this user action.