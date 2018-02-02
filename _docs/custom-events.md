---
layout: page
title: Custom events
permalink: /docs/custom-events/
---

It may happen that our predefined events are not enough for what you need to track at this moment. No problem. Simply add your own events and we will track them as well. Maybe you already have on your site our API code which can [Identify Visitor](../identify-visitor/). Well in that case our **custom events** information (custom user action) will be displayed in recording as well.

Code you need to insert in your site has a following format in **JavaScript**.

```javascript
<script>
  smartlook('track', eventName, properties);
</script>
```

For example if user gets to see in your application a pop up window for package upgrade in that moment when this event occurs you can send us the information using following code.

```javascript
<script>
  // full example with your defined variables
  var eventName = 'UserOpenUpsellWindow';
  var properties = {
    "type": "SmallDiscLimit"
  };
  smartlook('track', eventName, properties);
</script>
```

Parameter `properties` is variable. In case you need to display only a specific information about your user there is no need to use any other parameters in your custom event. 

Have a look at this example where user reached app preset limit.

```javascript
<script>
  smartlook('track', 'UserLimitReached');
</script>
```