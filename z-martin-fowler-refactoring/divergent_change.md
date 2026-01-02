# Martin Fowler Pg. 90

Divergent change occurs when one module is often changed in different ways for different reasons. 

If you look at a module and say, “Well, I will have to change these three functions every time I get a new database; I have to change these four functions every time there is a new financial instrument,” this is an indication of divergent change


- *Split Phase*
Split your get data from database and financial processiong into different phases

- *Move function* - to divide the processing up
IF there is more back and forth calls, divide the processing and create appropriate modules.

https://methodpoet.com/move-method-refactoring/#How_to_do_a_Move_Method_refactoring

- *Extract function*
If there are 2 types of processing, extract function and then move the function

- *Extract Class*
Extract Delegate
lets you extract some of the fields and methods into a separate newly created class
https://www.jetbrains.com/help/idea/extract-into-class-refactorings.html

