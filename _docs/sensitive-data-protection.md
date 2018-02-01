---
layout: page
title: Sensitive data protection
permalink: /docs/sensitive-data-protection/
---

**Passwords and credit card numbers are not recorded by default.** Recordings of credit cards are safe because most payment gates are 3rd party apps where customer gets redirected to another site. These payment gates are usually in an iframe which we block from being recorded as well.

## Masking

There can be situations where you want to **disable** recordings or maybe **ignore** certain elements from being recorded.

| Name | Description |
|---|---|
| `disable` | Disable recordings. |
| `ignore` | Ignore recordings of given element. |

### disable

Following code will disable recording of an entire page.

```javascript
<script>
  smartlook('disable', true);
</script>
```

Attribute `data-recording-disable` disables element containing sensitive information which will not be recorded at all. Element *will* ***not*** *be displayed* in recordings.

```html
<div data-recording-disable>
  Sensitive information will not be recorded.
</div>
```

### ignore

Attribute `data-recording-ignore` ignores elements. Element *will be displayed* in recordings but **values will not**.

This attribute can have 2 values:

1. `mask` - inserted characters will be replaced by asterisk **\'\*\'**
2. `events` - inserted values will not be displayed at all

```html
<input type="text" placeholder="Person age" data-recording-ignore="mask">
```

```html
<input type="text" placeholder="Card number" data-recording-ignore="events">
```

*You probably noticed ...*

... the *Card number* example. We block credit cards in recordings by default but it may happen that your site is using some custom coded payment solution that is not either secure or is coded in such a way that our script does not recognise it. For such rare cases you can make sure by using this attribute and value that your customer card numbers are safe and will not be recorded.

## Masking forms

Forms are everywhere these days on webistes and most often you will want to mask some of them.

<div class="callout callout-danger"> Exclude visitors enter sensitive data from recordings by masking forms and inputs.</div>

### Mask all fields

Use this if you need to mask entire form.

```html
<!-- Mask all fields in a form -->
<form data-recording-ignore="mask">
  <div>
    <label>Card number</label>
    <input type="text" placeholder="Card number">
  </div>
  <div>
    <label>Expiration Date</label>
    <input type="text" placeholder="MM-YY">
  </div>
</form>
```

### Mask selected fields

Maybe you want to mask only some selected fields.

```html
<form>
  <!-- Mask this field -->
  <div data-recording-ignore="mask">
    <label>Card number</label>
    <input type="text" placeholder="Card number">
  </div>
  
  <!-- This field is not masked -->
  <div>
    <label>Expiration Date</label>
    <input type="text" placeholder="MM-YY">
  </div>
</form>
```