/**
 * #1 Default Assignments
 * #2 Renaming variables 
 * #3 Rename variable with Default assignment (#1 + #2)
 * #4 Nested Destructuring
 * #5 Default Assignments for Nested Destructuring
 * #6 Default Object Assignments for Nested Destructuring
 * #7 Complex Example
 */
const person = {
    name: 'CJ' ,
    dog : {
        name: 'Panzer',
    },
    snack: 'Cashew butter cup',
    drink: 'Water',
    food: 'Rice',
    place: 'India',
    hairy: true,
    date: '01-01-1967'
}


//#1 default assignments, if name doesnt exist print Shrinath
const { name = 'Shrinath', snack } = person

//#2 Renaming variables
const { name : firstName, drink } = person
console.log(firstName);

//#3 Rename variables with Default assignment
const { name: myName = 'defaultName', food} = person

//#4 Nested Destructuring
/* Suppose you have a clash in name and dog.name, you will have to rename one of them
either name or dog.name */
const {
    name: myFirstName,
    dog,
    dog: {
        name: dogName,
    },
} = person
console.log(dog);
console.log(dogName);
//Note Lines 39 and 40, 
//you can destructure dog as an Object and only dog's name both in a single destructuring


//#6 Default Object Assignments for Nested Destructuring
//Here dog object has a default object asssignment
//If no dog object found in response, a dog object will be created with name Panzer
const {
    name: newName,
    dog: {
        name: newDogName,
    } = {
        name: 'Panzer',
    },
} = person
console.log(newDogName);

//#7 Complex example
// cats: destructure areEvil, if not present set default {areEvil: false} and return the value

//const {value: {another: {cats: { areEvil } = {areEvil: false} } = {}} = {}} = data

//#8 Complex example 2
const employee = {
    id: 1,
    name: "Shree Pee",
    age: 22,
    department: "UI",
    address: {
        city: "Makati",
        country: "PH"
    }
}

//#9 Destructure with default values
const { processedSpeed = parseInt(201.231), speed = 200, width = 500 } = {};
console.log("Speed" + speed);
console.log("width" + width);
console.log("processedSpeed" + processedSpeed);


const { name: fullName = "Nikesh Gadekar" , age } = employee
console.log(fullName, age);

//#9 Destructuring on functions
function displayEmployee({ age, name }) {
    console.log(`The employee name is ${name} and age is ${age}`);
}
displayEmployee(employee)
