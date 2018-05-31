---
title: "GDPR"
subtitle: "Record user information of EU visitors."
---

Depending on content you record you need your user’s consent. Once user gave you his consent this API. The code below needs to be adjusted based on what answer you received.

Make sure you enabled required project settings before using this API.
{: .alert .alert-warning }

## Form inputs

User consented to have his form inputs recorded.

```js
<script>
  // in this variable inser your consent
  var consentText = 'Here goes consent text from your website.';

  // choose only one variable
  var clientDecision = true; // if user agreed and provided consent
  var clientDecision = false; // if user refused to provide consent

  smartlook('consentForms', clientDecision ? consentText : false);
</script>
```

## IP address

User consented to have his IP address recorded.

```js
<script>
  // in this variable inser your consent
  var consentText = 'Here goes consent text from your website.';

  // choose only one variable
  var clientDecision = true; // if user agreed and provided consent
  var clientDecision = false; // if user refused to provide consent

  smartlook('consentIP', clientDecision ? consentText : false);
</script>
```

## Identify user via API

User consented to being identified via the API.

```js
<script>
  // in this variable inser your consent
  var consentText = 'Here goes consent text from your website.';

  // choose only one variable
  var clientDecision = true; // if user agreed and provided consent
  var clientDecision = false; // if user refused to provide consent

  smartlook('consentAPI', clientDecision ? consentText : false);
</script>
```

## Verify consent

Verify if a visitor gave his consent or not by using this code.

```js
<script>
  smartlook(function() {
    console.log(smartlook.consent.api)
    console.log(smartlook.consent.forms)
    console.log(smartlook.consent.ip)
  });
</script>
```

There are 3 possible values that you can see in the console:

1. `true` if user agreed and provided consent
2. `false` if user refused to provide consent
3. `null` if user was not asked for consent yet