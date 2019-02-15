---
title: "Identify visitor"
subtitle: "Display detailed visitor information in dashboard."
description: "In addition to basic info shown in dashboard you can also identify your users with their email, name or any other property."
---

**Developer needed:** The `identify` method requires you or *your developer* to propagate the information from your service. This method is called from the browser of your visitor, therefore any information you want to associate with your visitor needs to be part of your webpage.
{: .callout .callout-warning }

## Visitor information

Following example presents the simplest usage of `identify` method. The example expects there is an `user_id` variable that is identifying your visitor. Code you need to insert in your site has a following format in **JavaScript**:

```js
<script>
  smartlook('identify', user_id);
</script>
```

**User ID** is unique number or string used to identify your user.

Following example assumes you are using a template used for rendering the final HTML in which you can pass in the information of current visitor. Pairing your visitor with your internal identifier enables you to find this user in Smartlook by this identifier.

{% include component/tables/docs/{{ page.title | slugify }}/visitor-information.html %}

Here is an example in **PHP**.

```php
echo "<script>"; 
echo "smartlook('identify', '{$user->id}');";
echo "</script>";
```

In your site following code will be generated in **JavaScript**.

```js
<script> 
  smartlook('identify', '123');
</script>
```

## More visitor details

There is no limit on what you display in dashboard. It can be **name** or **email**, but also what **package** user paid for, in what **currency** and what is the **cost**.

The third parameter of the `identify` method is optional. It is expected to be an object. The keys of this object are entirely up to you, as well as all of the values.

Feel free to modify the code and expand it to your needs as you can see in an example below.

```js
<script>
  smartlook('identify', uid, {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "package": "Premium",
    "currency": "USD",
    "cost": 150
  });
</script>
```

## Final notes

Following section is applicable to those using Smartlook within static website.

The `identify` method should always be called after Smartlook Web SDK is initialized.

If you are integrating your Smartlook Web SDK within the `<head></head>` section of your site, the actual `identify` call should just before the closing `</body>` tag.

You need to propagate your data into the HTML that is sent to your client. The `identify` call is done on the client and your data can only be passed to Smartlook when they are part of your HTML.
