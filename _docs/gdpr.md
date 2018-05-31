---
title: "GDPR"
subtitle: "Record user information of EU visitors."
---

Depending on content you record you need your user’s consent. Once user gave you his consent use API code below. The code needs to be adjusted based on what answer you received.

Make sure you enabled required project settings before using this API.
{: .alert .alert-warning }

There are 3 possible values to choose from which you can enter in the code:

1. `true` if user agreed and provided consent
2. `false` if user declined
3. `null` if user was not asked or did not chose an option yet

## Form inputs

User consented to have his form inputs recorded.

```js
<script>
  smartlook('consentForms', 'YOUR_CONSENT_VALUE');
</script>
```

## IP address

User consented to have his IP address recorded.

```js
<script>
  smartlook('consentIP', 'YOUR_CONSENT_VALUE');
</script>
```

## Identify user via API

User consented to being identified via the API.

```js
<script>
  smartlook('consentAPI', 'YOUR_CONSENT_VALUE');
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
