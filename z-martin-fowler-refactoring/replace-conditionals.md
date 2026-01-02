## Replace Conditionals with Polymorphism

# Replace conditionals with Strategy Pattern or Command Pattern

Reference Links:
https://betterprogramming.pub/clean-code-applied-to-javascript-part-6-avoid-conditional-complexity-5ee9cbb1b26a

https://levelup.gitconnected.com/javascript-refactoring-conditionals-6d74a1138c96

# Very Good Example
https://blog.logrocket.com/refactoring-cascading-conditionals-favor-readability/



# Replacing switch statements
1. With Polymorphism
2. Better way to replace switch statements is by using a map/Object of possible Keys and functions
*VIMP link*
https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals

*VIMP Link*
https://www.30secondsofcode.org/articles/s/javascript-switch-object

4. In java - replace switch by Enums as you can 
4.1. - filter through all the enums
4.2. - and filter the current one, 
4.3. - xecute its method
5. In java you can use command pattern
refac

- Refactoring if else
https://dev.to/sylwiavargas/5-ways-to-refactor-if-else-statements-in-js-functions-208e

- Decompose Conditional to a variable or a function eg.below 
https://refactoring.com/catalog/decomposeConditional.html

Design Patterns
NullObject Pattern
https://betterprogramming.pub/design-patterns-null-object-5ee839e37892


# Replacing conditionals with Object
# This
Replacing if..else if..else with objects
if(created.status === 200) {
    //push
} else if(created.status === 201) {

} else {

}

## can be replaced by

const execObj = {
    201:([allUsers,,]) => {allUsers.push();},
    200:([,existingUsers,]) => {existingUsers.push();},
    default:([],,rejectedUsers]) => {rejectedUsers.push();}
}

execObj[created.status]([positivearray, negativeArray, rejectedUsers]) 
|| execObj['default']([positivearray, negativeArray, rejectedUsers])