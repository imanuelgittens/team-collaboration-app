# background-size

*This CSS Property sets specifies the size of an HTML element's background image*

This `background-size` property  specifies the size of an element's background image. It accepts HTML length units such as `px` and `%` as inputs and also a number of other text inputs that affect its behaviour. 


## Syntax

Introduction to the syntax/usage. An example of the `background-size` property's syntax  and its values are shown below:

```
        background-size: auto|length|cover|contain|initial|inherit;
```

### Values

We explore each of the property's values below:

1. **auto**: This is the default behaviour which states that the background image retains its original size (width and height). 

2. **length**: This specifies length units of the form (20px 20px). The first value sets the width and the second sets the height of the background image.

3. **percentage**: This specifies length units of the form (20% 20%) and sets the size of the background image to be a percentage of its parent element. The first values sets the width and the second values sets the height.   

4. **cover**: This specifies that the background image be scaled as much as possible so that the background area is fully covered by the image. 

5. **contain**: This specifies that the background image be scaled as much as possible so that it can fit within a specific content area. 

6. **initial**: This specifies that the property be set to its default value.

7. **inherit**: This specifies that the property be inherited from its parent element i.e. whatever background property is set on this element's parent will be the same for this element. 



## Example 1

This example will scale the background image until it completely covers the background area.

```
        background-size: cover;
```

## Example 2

This example will set the specific width and height of the background image. The first value sets the width and the second sets the height. 

```
        background-size: 100px 150px;
```

## Example 3 - Complex

This example will set the width and height of the background image to be a percentage of its parent element. If we assume that the parent element has a width of 500px and a height of 500px, this example will calculate the size of the background image based on percentages of these values. 

```
        background-size: 20% 10%
```

###Browser Support

On a desktop, browser support is as follows:

1. Chrome - 4.0+
2. Firefox - 4.0+
3. Internet Explorer - 9+
4. Opera - 10.5+
5. Safari - 4.1+


## Special Notes

This property can be defined along with many other background  properties by using the `background` property. 