---
layout: page
title: Sensitive data protection
permalink: /docs/sensitive-data-protection/
---

<div class="bs-callout bs-callout-danger">
<h5 id="masking">Masking</h5>

<p>If visitors enter sensitive data (e.g. credit card numbers, visible passwords) on your website, you should exclude this data from the recording by masking forms and inputs.</p>
</div>

By default passwords are not recorded. The same goes for credit cards because most payment gates are 3rd party apps where customer gets redirected to another site or these payment gates are usually in an iframe which we block as well.

## Methods

<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>disable</code></td>
      <td>Disable recordings.</td>
    </tr>
    <tr>
      <td><code>ignore</code></td>
      <td>Ignore recordings of given element.</td>
    </tr>
  </tbody>
</table>

### disable

Following code will disable recording of entire page.

```javascript
<script>smartlook('disable', true);</script>
```

In recording you can ignore selected element. Use attribute data-recording-disable for element that contains sensitive information. This element will not be shown in recording.

```html
<div data-recording-disable>
  Customer sensitive text that won't be recorded
</div>
```

### ignore

Second option is to ignore selected element. Using this option will display element in recordings but values will be hidden.

Attribute `data-recording-ignore` can have following values:

* `mask` - inserted characters will be replaced by asterisk **\'\*\'**, the same for input **\'password\'**. Password is masked by default
* `events` - inserted values will not be displayed at all

```html
<input type="text" placeholder="Card number" data-recording-ignore="events">
```

## Masking

Most often you will need to mask a form. There are 2 ways how you can do it:

### Mask all fields

```html
<!-- Mask all fields in form -->
<form data-recording-ignore="mask">
  <div>
    <label>Card number</label>
    <input type="text" placeholder="Card number">
  </div>
  <div>
    <label>Card year</label>
    <input type="text" placeholder="YYYY-MM">
  </div>
</form>
```

### Mask only selected fields

```html
<form>
  <!-- Mask only field in this div -->
  <div data-recording-ignore="mask">
    <label>Card number</label>
    <input type="text" placeholder="Card number">
  </div>
  
  <!-- This field is not masked -->
  <div>
    <label>Card year</label>
    <input type="text" placeholder="YYYY-MM">
  </div>
</form>
```
