---
layout: page
title: Identify visitor
permalink: /identify-visitor/
---

Display in Smartlook Dashboard information such as: e-mail and name.

Code that you need to insert has a following format:

{% highlight javascript %}
<script>
  smartlook('identify', uid);
</script>
{% endhighlight %}

<p>`uid` is unique number used to identify user = user ID. Let's say in your user database is following record:</p>




<table>
  <thead>
    <tr>
      <th>uid</th>
      <th>name</th>
      <th>e-mail</th>
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

<p>Now let's have a look at example in <strong>PHP</strong>:</p>

{% highlight php %}
echo "<script>";
echo "smartlook('identify', '11');";
echo "</script>";
{% endhighlight %}

In your website the following code will be generated:

{% highlight javascript %}
<script>
  smartlook('identify', 12345);
</script>
{% endhighlight %}

<h2>Detailed identification</h2>

<p>You can get more information using another parameter which can contain all information you want to assign to any given recording. Except email and name, it can be information about what package user as prepaid or total sum paid. There is no limit on what information you assign to recording so use the code below as an example only:</p>

{% highlight javascript %}
<script>
  smartlook('identify', uid, {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "sex": "male",
    "package": "Premium",
    "totalSpend": 150
  });
</script>
{% endhighlight %}