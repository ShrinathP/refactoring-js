## Long Functions - Martin Fowler Refactoring Pg. No 86

First iteration
1. Decompose the functions into shorter functions - Extract Function

Next Iteration
1. You end up to pass a lot of parameters into newly formed functions

If you try to use Extract Function (106), you end up passing so many parameters to the extracted method.  

If local variables and parameters interfere with extracting a method, use 
* Replace Temp with Query, 
* Introduce Parameter Object, or 
* Preserve Whole Object.

If you’ve tried all and you still have many temps and parameters, it’s time to get out the heavy artillery: 
* Replace Function with Command (337).
Also called
* Replace Method with Method Object

https://refactoring.com/catalog/replaceFunctionWithCommand.html
https://www.youtube.com/watch?v=Emyyp8giuf0
https://dev.to/matheusgomes062/food-review-refactoring-a-long-method-4in5


## __REFACTORING A LARGE FUNCTION__
# *IMP Links*
Part 1
https://codingitwrong.com/2020/09/08/refactoring-a-large-function.html
Part 2
https://codingitwrong.com/2020/09/09/refactoring-a-large-function-part-2.html

*Remove flag arguments*
Remove flag arguments and add a new function for the flag argument