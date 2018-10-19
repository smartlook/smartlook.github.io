---
title: "Typography"
---

Markdown that can be used for writing content.

---

## Emojies

```md
You can use same [Emojies](https://emojipedia.org/) as on Slack :fire: :sunglasses: :heart:
```

You can use same [Emojies](https://emojipedia.org/) as on Slack :fire: :sunglasses: :heart:

---

## Headings

```md
# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading
```

# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading

---

## Text

```md
What you type will become a paragraph.
```

What you type will become a paragraph.

```md
Blockquote text ...

> "Do. Or do not. There is no try."  ~ Yoda
```

Blockquote text ...

> "Do. Or do not. There is no try."  ~ Yoda

---

## Lists

```md
1. First item
2. Second item
3. Third item
```

1. First item
2. Second item
3. Third item

```md
* First item
* Second item
* Third item
```

* First item
* Second item
* Third item

---

## Text elements

```md
* **Bold**
* *Emphasis*
* ~~Deleted~~
```

* **Bold**
* *Emphasis*
* ~~Deleted~~

---

## Code

Code has 2 types and accepts language property.

### Inline code

```md
Inline code looks like this: `inline code` or `!@#$%^&*()` or `<p>lorem</p>`.
```

Inline code looks like this: `inline code` or `!@#$%^&*()` or `<p>lorem</p>`.

### Code in a block

```js
<script>
  function myFunction() { 
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
  }
</script>
```

**Code in a block** and this time JavaScript used as an example.

### How to display code

Type **3 [backticks](https://www.google.com/search?ei=z0sMW5f2HcKrswHJi7ToDQ&q=%60+backtick&oq=%60+backtick&gs_l=psy-ab.3..0i67k1j0i7i30k1l9.14290.16267.0.16597.3.3.0.0.0.0.114.342.0j3.3.0....0...1c.1.64.psy-ab..0.3.342...0.0.WFRLstR8oMY) \`\`\`** followed by language `js` or `php` or `html`, add code and end the whole block with 3 backticks again.

Have a look at screenshot for better understanding.

![code-block-with-language](/assets/img/pages/typography/code-block-with-language.png)

#### Examples

```js
<script>
  alert( 'Hello, world!' );
</script>
```

```php
&copy; <?php echo date("Y"); ?>
```

```html
<p>Lorem ipsum.</p>
```

```objc
[Smartlook  setUserIdentifier:@"some-user-identifier"];
```

```swift
Smartlook.setUserIdentifier("some-user-identifier");
```

```json
{ 
  "name":"John",
  "surname":"Doe",
  "car":1
}
```

```md
* this 
* will be 
* an unordered list
```

---

## Links

```md
Links are easy to create: [Google.com](https://google.com/)
```

Links are easy to create: [Google.com](https://google.com/)

```md
Direct links with no custom text <https://google.com/>
```

Direct links with no custom text <https://google.com/>

---

## Images

```md
![image alt text](/path/to/img.jpg)
```

![Godzilla](/assets/img/pages/typography/godzilla-01.jpg)

Adding a link to image is simple. Wrap image into link syntax.

```md
![image alt text](/path/to/img.jpg) + []() = [![image alt text](/path/to/img.jpg)](link)

```

[![Godzilla](/assets/img/pages/typography/godzilla-02.jpeg)](https://en.wikipedia.org/wiki/Godzilla)

---

## Separator

```md
Horizontal rule is created by `---` but it is not recommended. Better not to use it or if then via CSS.
```

Horizontal rule is created by `---` but it is not recommended. Better not to use it or if then via CSS.

---