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

<pre>
<code class="language-javascript">
&lt;script&gt;
  smartlook('disable', true);
&lt;/script&gt;
</code>
</pre>

Attribute `data-recording-disable` disables element containing sensitive information which will not be recorded at all. Element *will* ***not*** *be displayed* in recordings.

<pre>
<code class="language-html">
&lt;div data-recording-disable&gt;
  Sensitive information will not be recorded.
&lt;/div&gt;
</code>
</pre>

### ignore

Attribute `data-recording-ignore` ignores elements. Element *will be displayed* in recordings but **values will not**.

This attribute can have 2 values:

1. `mask` - inserted characters will be replaced by asterisk **\'\*\'**
2. `events` - inserted values will not be displayed at all

<pre>
<code class="language-html">
&lt;input type="text" placeholder="Person age" data-recording-ignore="mask"&gt;
</code>
</pre>

<pre>
<code class="language-html">
&lt;input type="text" placeholder="Card number" data-recording-ignore="events"&gt;
</code>
</pre>

You probably noticed the *Card number* example. We block credit cards in recordings by default but it may happen that your site is using some custom coded payment solution that is not either secure or is coded in such a way that our script does not recognise it. For such rare cases you can make sure by using this attribute and value that your customer card numbers are safe and will not be recorded.

## Masking forms

Forms are everywhere these days on webistes and most often you will want to mask some of them.

<div class="callout callout-danger"> Exclude visitors enter sensitive data from recordings by masking forms and inputs.</div>

### Mask all fields

Use this if you need to mask entire form.

<pre>
<code class="language-html">
&lt;!-- Mask all fields in a form --&gt;
&lt;form data-recording-ignore="mask"&gt;
  &lt;div&gt;
    &lt;label&gt;Card number&lt;/label&gt;
    &lt;input type="text" placeholder="Card number"&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label&gt;Expiration Date&lt;/label&gt;
    &lt;input type="text" placeholder="MM-YY"&gt;
  &lt;/div&gt;
&lt;/form&gt;
</code>
</pre>

### Mask selected fields

Maybe you want to mask only some selected fields.

<pre>
<code class="language-html">
&lt;form&gt;
  &lt;!-- Mask this field --&gt;
  &lt;div data-recording-ignore="mask"&gt;
    &lt;label&gt;Card number&lt;/label&gt;
    &lt;input type="text" placeholder="Card number"&gt;
  &lt;/div&gt;
  
  &lt;!-- This field is not masked --&gt;
  &lt;div&gt;
    &lt;label&gt;Expiration Date&lt;/label&gt;
    &lt;input type="text" placeholder="MM-YY"&gt;
  &lt;/div&gt;
&lt;/form&gt;
</code>
</pre>