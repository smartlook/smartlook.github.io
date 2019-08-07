---
title: "Error logging"
subtitle: "Automatic and manual error logging"
description: "Use in case you have on your site our API code."
---

## Custom errors

Smartlook automatically catches all unhandled Javascript errors (except TODO cors errors).

With custom errors API, you can log errors that had been handled in your application however you want to see it in the recordings or use in analytics as well.

```js
<script>
  smartlook('error', error);
</script>
```

## Example usage

```js
<script>
  try {
    // ...custom code
  } catch (e) {
    // ...custom code that handles the error

    // log error using Smartlook API
    smartlook('error', e);
  }
</script>
```

```js
<script>
  // ...custom code
  
  // log some unexpected behaviour using Smartlook API
  smartlook('error', 'calendar showing bad week');
</script>
```
