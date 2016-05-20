##CSS: Outline Property
---
###Description
---

The CSS Outline property is used to add visual effects on elements by creating an outline around an element. You can alter the thickness of the line but this property does not 
add height and width to an elements dimensions like the border property (not part of box-model). Also, the line that goes around the element is on all sides and you can't specify a particular side.

There are a lot of different ways in which you can create the Outline around the element:

1. dotted
2. dashed 
3. solid
4. double
5. inset(3D)
6. outset(3D)
7. groove

###Usage
---


CSS:

```
.first {
	outline: 1px solid red;
}

.second {
	outline: 3px dotted blue;
}

.three {
	outline: 5px inset salmon;
}

```

HTML:

<p class="first"> Make me stand out from the crowd! I want to be a shining star! </p>
<p class="second"> Make me stand out from the crowd! I want to be a shining star! </p>
<p class="three"> Make me stand out from the crowd! I want to be a shining star! </p>





###Special Notes
---

A lot of web developers like to use outline:none for textboxes in forms since it gets rid of the "focus" highlight. This is not good because if users aren't using a mouse to
navigate then it will be hard form them to see if they are actually within the box to start typing. There should always be some sort of visual cue when focused on a textbox to
indicate to users that they are within the textbox to start providing input. If you must remove it, try to test user accessibility with the tab button and use background-color 
to give some visual feedback to users. 





###Browser Support
---

On a desktop, browser support is as follows:

1. Chrome - 1.0 and up.
2. Firefox - 1.5 and up
3. Internet Explorer - 8.0 and up
4. Opera - 7.0 and up
5. Safari - 1.2 and up

On mobile devices, browser support is as follows:

1. Android - 1.0 and up
2. Firefox - 1.0 and up
3. IE Mobile - 8.0 and up
4. Opera Mobile - 6.0 and up
5. Safari Mobile - 3.1 and up