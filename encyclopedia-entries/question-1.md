# Anchor Element (`<a>`)

*The `<a>` element defines a hyperlink to some location on the web.* 

The **Anchor Element** (`<a>`) is the **HTML Tag** that defines a hyperlink, which is used to link one page to another between any two points on the web. This location definition can point to the current page, another page on that website or a totally random page anywhere on the Internet. 


## Syntax

Introduction to the syntax/usage. A example of the `<a>` element's syntax  and its attributes are shown below:

```
        <a href="https://facebook.com" | target="_blank" | download="fb" | hreflang="en" | type="text/html" | media="screen" | rel="next">Click Here</a>
```

###Attributes

1. **href**: This attribute describes the link target or the location to which the link points. It can either be a URL or a URL fragment. The URL fragment links begin with a `#` and specifies a location or ID on the current page. 

2. **target**: This attributes defines where the link should be opened. 
	1. `_blank`: opens the link in a new tab or window. 
	2. `_self`: This is the default behaviour, which opens the link in the same frame that it was clicked. 
	3. `_parent`: The link is opened in its parent frame.
	4. `_top`: The link is opened in the full body of the window.

3. **download**: This attribute specifies that a file will be downloaded when a user clicks the hyperlink. The value that is given to this attribute will be the name of the downloaded file and the location of this file must be added to the `href` attribute for it to work properly.

4. **hreflang**: This attribute defines the language of the linked attribute and can only be used when the `href` attribute is set. It accepts language code values, a full list of which can be found [here](https://www.loc.gov/standards/iso639-2/php/code_list.php). 

5. **type**: This attribute defines the Internet Media Type of the document being linked to. 

6. **media**: This attribute defines the optimal device for the linked resource.

7. **rel**: This attribute defines the relationship that the current document shares with the documented being linked to. 


## Example 1

This example shows a simple link that points to facebook.com. The word between the tags is the text that show up on the page. When the user clicks `here` they will be routed to www.facebook.com. 

```
        <a href="facebook.com">here</a>;
```

## Example 2

This example extends the first and goes on to add the language of the link. It also specifies that the link be opened in a new tab.

```
        <a hreflang="en" href="facebook.com" target="_blank">here</a>
```

## Example 3 - Complex

This example goes even further with the link specification and specifies that the resource being linked to is an unendorsed document, like a paid link. ("nofollow" is used by Google to specify that the Google search should not follow that link.) 

```
        <a hreflang="en" href="facebook.com" target="_blank" rel="nofollow">here</a>
```

###Browser Support

On a desktop, browser support is as follows:

1. Chrome - All
2. Firefox - All
3. Internet Explorer - All
4. Opera - All
5. Safari - All


## Special Notes

No extra notes...