---
layout: page
title: Identify visitor
permalink: /identify-visitor/
---

Display in Smartlook Dashboard information such as: e-mail and name.

Code that you need to insert has a following format:

<pre class="language-javascript">
<code class="language-javascript">
&lt;script&gt; 
  smartlook('identify', uid); 
&lt;/script&gt;
</code>
</pre>

`uid` is unique number used to identify user = user ID. Let's say in your user database is following record:

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

Now let's have a look at example in **PHP**:

<pre class="language-php">
<code class="language-php">
echo &quot;&lt;script&gt;&quot;;
echo &quot;smartlook('identify', '12345');&quot;;
echo &quot;&lt;/script&gt;&quot;;
</code>
</pre>

In your website the following code will be generated:

<pre class="language-javascript">
<code class="language-javascript">
&lt;script&gt; 
  smartlook('identify', 12345); 
&lt;/script&gt;
</code>
</pre>

## Detailed identification

You can get more information using another parameter which can contain all information you want to assign to any given recording. Except email and name, it can be information about what package user as prepaid or total sum paid. There is no limit on what information you assign to recording so use the code below as an example only:

<pre class="language-javascript">
<code class="language-javascript">
&lt;script&gt; 
  smartlook('identify', uid, { 
    &quot;name&quot;: &quot;John Doe&quot;, 
    &quot;email&quot;: &quot;john.doe@example.com&quot;, 
    &quot;sex&quot;: &quot;male&quot;, 
    &quot;package&quot;: &quot;Premium&quot;, 
    &quot;totalSpend&quot;: 150 
    }); 
&lt;/script&gt;
</code>
</pre>