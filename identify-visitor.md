---
layout: page
title: Identify visitor
permalink: identify-visitor.html
---

Display in Smartlook Dashboard information such as: e-mail and name.

Code that you need to insert has a following format:

{% highlight javascript %}
<script>
  smartlook('identify', uid);
</script>
{% endhighlight %}

`uid` is unique number used to identify user = user ID. Let's say in your user database is following record:

<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">uid</th>
      <th scope="col">name</th>
      <th scope="col">e-mail</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>12345</td>
      <td>John Doe</td>
      <td>john.doe@example.com</td>
    </tr>
  </tbody>
</table>

Now let's have a look at example in **PHP**:

```php
echo "<script>";
echo "smartlook('identify', '11');";
echo "</script>";
```

In your website the following code will be generated:

```javascript
<script>
  smartlook('identify', 12345);
</script>
```

## Detailed identification

You can get more information using another parameter which can contain all information you want to assign to any given recording. Except email and name, it can be information about what package user as prepaid or total sum paid. There is no limit on what information you assign to recording so use the code below as an example only:

```javascript
<script>
  smartlook('identify', uid, {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "sex": "male",
    "package": "Premium",
    "totalSpend": 150
  });
</script>
```