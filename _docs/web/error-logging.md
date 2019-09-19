---
title: "Error logging"
subtitle: "Automatic and custom error logging"
---

Smartlook automatically catches all unhandled Javascript errors.

Though, Smartlook cannot log the precise error message if the error is from a script that has different origin. This is known as a CORS error.
CORS is short for “Cross Origin Resource Sharing”, and it’s a set of APIs (mostly HTTP headers) that dictate how files ought to be handled when used from a different origin (domain).

When a CORS error occurs in Smartlook’s Javascript console you’ll see a message: 

`Cross-origin error - look at https://smartlook.github.io/docs/web/error-logging/ for more info.`


## Fixing the CORS errors

To fix the CORS error you have to:

1) Add a `crossorigin="anonymous"` script attribute
```
<script src="http://different-domain.com/script.js" crossorigin="anonymous"></script>
```

2) Add a Cross Origin HTTP header
```
Access-Control-Allow-Origin: *
```

You can use Smartlook’s Custom Errors API (see below) if you cant fix the CORS errors.

## Custom errors

With the Custom Errors API, you can customize how Smartlook log errors that had been handled in your application in any way you wish. 

You can then use these logs in Smartlook analytics and session replay to visualize and understand where the errors you’ve logged occured.

Custom Errors API is used as follows:

```js
<script>
  smartlook('error', errorArg);
</script>
```

Where `errorArg` could be either an instance of Error object or simple string message.


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
