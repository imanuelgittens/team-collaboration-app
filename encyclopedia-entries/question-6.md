##Javascript: Math.sqrt()
---
###Description
---

Math.sqrt is a built-in static function that is available to developers from the Math object (method of). This function is used to return the square root of a number.

The function accepts one parameter as its input. If the value is not a positive number (with or without quotes) or nothing is passed then NaN will be returned.


###Usage
---

```
	Math.sqrt(16); // 4 is the returned value
	
	Math.sqrt(3) // 1.7320508075688772
	
	Math.sqrt() // NaN
	
	Math.sqrt("Josh") //NaN
	
	Math.sqrt("16") // 4
	
	Math.sqrt(16) + Math.sqrt(4) // returns 6
	
	Math.sqrt(4+4+4+4) // returns 4
	
	
```



###Special Notes
---

When using the method, you need to make sure that the function does not return NaN or you could get the wrong results. This will happen if a negative number or even a string
is accidently passed to the function.




###Browser Support
---

On a desktop, browser support is as follows:

1. Chrome - All
2. Firefox - All
3. Internet Explorer - All
4. Opera - All
5. Safari - All

On mobile devices, browser support is as follows:

1. Android - All
2. Firefox - All
3. IE Mobile - All
4. Opera Mobile - All
5. Safari Mobile - All

