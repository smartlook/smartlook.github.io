---
layout: page
title: Identify visitor
permalink: /docs/identify-visitor/
---

Display detailed visitor information in dashboard such as: **email** and **name**.

<div class="alert alert-warning">
<strong>Database connection:</strong> This API code needs a connection to <em>your</em> user database in order to work.
</div>



Code you need to insert in your site has a following format in **JavaScript**.

```javascript
<script>
  smartlook('identify', uid);
</script> 
```

**User ID** in short `uid` is unique number used to identify your user. Let's say in your user database is this record. 

| UID | Name | Email |
|---|---|---|
| 123 | John Doe | john.doe@example.com |

`uid` is the identificator you need in your code to lookup corresponding user in your database.

Here is example in **PHP**.

```php
echo "<script>";
echo "smartlook('identify', '{$user->id}');";
echo "</script>";
```

In your site following code will be generated in **JavaScript**.

```javascript
<script>
  smartlook('identify', '123');
</script>
```

## More visitor details

You can connect to your user database and get any information you want. It is up to you. There is no limit on what you display in dashboard. It can be **name** or **email** but also what **package** user paid for, in what **currency** and what is the **cost**.

Feel free to modify and expand to your needs example below.

```javascript
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