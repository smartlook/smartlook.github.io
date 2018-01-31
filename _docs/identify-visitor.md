---
layout: page
title: Identify visitor
permalink: /docs/identify-visitor/
---

Display detailed information about visitor in dashboard such as: **email** and **name**.

Code that you need to insert has a following format.

```javascript
<script>
  smartlook('identify', uid);
</script> 
```

**User ID** = `uid` is unique number used to identify user. Let's say in your user database is following record.

| uid | name | email |
|---|---|---|
| 12345 | John Doe | john.doe@example.com |

Now let's have a look at example in **PHP**.

```php
echo "<script>";
echo "smartlook('identify', '12345');";
echo "</script>";
```

In your website the following code will be generated.

```javascript
<script>
  smartlook('identify', 12345);
</script>
```

## Detailed identification

You can get more information using another parameter which can contain all information you want to assign to any given recording. Except email and name, it can be information about what package user as prepaid or total sum paid. There is no limit on what information you assign to recording so use the code below as an example only.

```javascript
<script>
  smartlook('identify', uid, {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "package": "Premium",
    "currency": "USD",
    "totalSpend": 150
  });
</script>
```