# Encapsulate Variable Pg. 89
To avoid global access of data or 
limit mutability of data - use Encapsulate Variable 


- *Encapsulate Variable* 
using 
1. Closures functions on Objects
2. Using private fields in classes using -  hash eg #name

https://sebhastian.com/encapsulation-javascript/

https://medium.com/javascript-scene/encapsulation-in-javascript-26be60e325b4

A closure function (also called inner function) is a function created inside another function.



Factory Functions - same as Encapsulation
-----------------------------------------
a function that returns an Object form of given values
https://www.javascripttutorial.net/javascript-factory-functions/

https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e


# Mutable data
- *Split Temporary Variable*
If a variable is being updated to store different things, use Split Variable (240) both to keep them separate and avoid the risky update. 
https://stackoverflow.com/questions/25612898/split-temporary-variable-refactoring-example
Rather than updation the same temp again and again create another variable
eg.
function(name) {
    const temp = name.familyName;
    temp += name.firstName;
    temp += name.lastName;
    return temp;
}

Better way
function(name) {
    const temp = name.familyName;
    const firstName = name.firstName;
    const lastName = name.lastName;
    return temp + firstName + lastName;
}

- *Separate Query from Modifier*
If there is a method which does 2 things queries and modifies the result, Try separating them
eg:
Change
getTotalOutstandingAndSetReadyForSummaries()
TO->
getTotalOutstanding()
setReadyForSummaries()
https://refactoring.com/catalog/separateQueryFromModifier.html

- *Remove Setting Variable*
If the value of the variable only gets changed during initialization of Object
Then remove the set method from the class/function and move the changes to initializer
This reduces the scope of the variable
Check this
https://www.youtube.com/watch?v=IsVJ-EJctUU

- *Replace Derieved with Query*
If there is a chance of calculating mutable data elsewhere move the calculation to the model class
V good Eg: 
https://www.youtube.com/watch?v=eXElxR1_qOo

Eg: *FOR inside FOR*
- for every Genre of Genres , for every BookList, do something
- Solution :- create a new method for the 2nd for processing in Book class


- *COMBINE functions into TRANSFORM - (enrichObject)*
Using EnrichReading or EnrichObject that has all properties of the current object and + the computed properties

function enrichObj(original) {
    const result = Object.assign({},original);
    result.totalSum = sum(original.marks);
    result.passed = result.totalSum > 35;

    return result;
}

https://refactoring.com/catalog/combineFunctionsIntoTransform.html
https://ehsangazar.com/11-refactoring-methods-197a3921a196


- *CHANGE Value to Reference || Change Reference to Value*

- *CHANGE Value to Reference* 
- # *when customer name changes*
You have many identical instances of a single class that you need to replace with a single Object
Eg. 
Customer customer = new Customer(30);
Customer customer = new Customer(30);

with 
Customer.create(30); //static method which checks for 30, if Object already present in Map, returns the same object


- *CHANGE Reference to Value* - opposite of above - 
- # *when customer name never changes (and reference object is very simple)*
Reference object which is small and immutable, holds a simple value
Throughout the code its used as reference Object and its getting difficult/awkward to manage

Replace reference method to Object constructor

V.good explanation of both
https://stackoverflow.com/questions/48226933/understanding-value-to-reference-and-reference-to-value-in-java-refactoring


- *Encapsulate Collections*
https://sapanparikh18.github.io/Refactoring/


- *Loops with Pipelines*
Replace Loop with pipelines
*V IMP Link*
https://martinfowler.com/articles/refactoring-pipelines.html

