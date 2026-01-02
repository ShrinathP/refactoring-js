//Replace Inheritance with Delegation
//Replace Inheritance with Composition - Prefer Composition over Inheritance

This has Java examples as well as JS examples


https://www.jetbrains.com/help/idea/replace-inheritance-with-delegation.html


## Java way
In the constructor of the child class create an Instance of Super Class
and the child class methods use superr class instance methods

Eg.
class Super {
    method1() {

    }
}

# - *Replace this*
class Child extends Super {
    
}

# - *With This*
// Child can access method1 here
class Child {
    instance = null
    constructor {
        instance = new Super();
    }

    method1Child() {
        let result = instance.method1();
        return result + "from child";
    }
}

# - *if superclass is abstract class - DO THIS*
https://www.jetbrains.com/help/idea/replace-inheritance-with-delegation.html


## JS way
Create action functions
Functions that return an object of functions

Web Dev Simplified
Composition over Inheritance - Why you should stop using Inheritance
https://www.youtube.com/watch?v=nnwD5Lwwqdo

Eg:- 
const barker = (state) => {
    return {
        bark: () => console.log('Woof, I am ' + state.name)
    }
}

OR
const driver = (state) => ({
        drive: () => console.log('Woof, I am ' + state.name)
})



## Also called *Replace subclass with Delegate* / *Replace Superclass with delegate* in Fowler Refactoring
Check this:
https://refactoring.com/catalog/replaceSuperclassWithDelegate.html
https://refactoring.com/catalog/replaceSubclassWithDelegate.html
