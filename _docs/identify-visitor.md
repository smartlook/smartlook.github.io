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

<pre>
<code class="language-javascript">
&lt;script&gt;
  smartlook('identify', uid);
&lt;/script&gt;
</code>
</pre>

**User ID** in short `uid` is unique number used to identify your user. Let's say in your user database is this record. 

| UID | Name | Email |
|---|---|---|
| 123 | John Dove | john.doe@example.com |

`uid` is the identificator you need in your code to lookup corresponding user in your database.

Here is an example in **PHP**.

<pre>
<code class="language-php">
echo "&lt;script&gt;"; 
echo "smartlook('identify', '{$user-&gt;id}');"; 
echo "&lt;/script&gt;";
</code>
</pre>

In your site following code will be generated in **JavaScript**.

<pre>
<code class="language-javascript">
&lt;script&gt; 
  smartlook('identify', '123'); 
&lt;/script&gt;
</code>
</pre>

## More visitor details

You can connect to your user database and get any information you want. It is up to you. There is no limit on what you display in dashboard. It can be **name** or **email** but also what **package** user paid for, in what **currency** and what is the **cost**.

Feel free to modify and expand to your needs example below.

<pre>
<code class="language-javascript">
&lt;script&gt;
  smartlook('identify', uid, {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "package": "Premium",
    "currency": "USD",
    "cost": 150
  });
&lt;/script&gt;
</code>
</pre>