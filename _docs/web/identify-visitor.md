---
title: "Identify visitor"
subtitle: "Display detailed visitor information in dashboard."
---

In addition to basic info shown by default in dashboard you can also display: **email** and **name**.

**Database connection:** This API needs a connection to *your user database* in order to work.
{: .callout .callout-warning }

## Visitor information

Code you need to insert in your site has a following format in **JavaScript**.

```js
<script>
  smartlook('identify', uid);
</script>
```

**User ID** in short `uid` is unique number used to identify your user. Let's say in your user database is this record. 

{% include component/tables/docs/{{ page.title | slugify }}/visitor-information.html %}

`uid` is the identificator you need in your code to lookup corresponding user in your database.

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

You can connect to your user database and get any information you want. It is up to you. There is no limit on what you display in dashboard. It can be **name** or **email** but also what **package** user paid for, in what **currency** and what is the **cost**.

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
