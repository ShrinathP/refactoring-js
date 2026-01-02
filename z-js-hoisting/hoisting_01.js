

sayHello()

//uncomment below to see
//sayHi()
//ReferenceError: Cannot access 'sayHi' before initialization
//Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value

//uncomment below to see
//sayBye()
//TypeError: sayBye is not a function

//uncomment below to see
//sayMeow()
//TypeError: sayMeow is not a function

//#1 function declarations are scanned and made available 
//But not arrow functions or functions defined as variables
function sayHello() {
    console.log('Saying hello');
}

//#2 Arrow functions behave like another variable
let sayHi = () => { console.log('HI');}
var sayBye = () => { console.log('Bye');}

//#3 Functions saved into a variable will also behave like a variable 
//IMP - Functional Expressions are not hoisted
var sayMeow = function () {
    console.log('sayMeow function');
}

//From MDN
//#4 Variable declarations (defined with var) are scanned and made undefined
//JS only hoists declarations for the variable , not initializations
console.log(Hi);
//undefined
var Hi = 'Hi';
console.log(Hi);
//Hi

//Conceptually variable hoisting is often presented as 
//the interpreter "splitting variable declaration and initialization, 
//and moving (just) the declarations to the top of the code".



//#5 - If we forget declaration and only initialize the value variable isnt hoisted 

//uncomment below to see
//console.log(num);
//ReferenceError: num is not defined //num is not hoisted as its not declared
num = 6;
console.log(num);
console.log(typeof num);



//#6 let and const hoisting
//they are also hoisted but not initialzed with default value eg. undefined
//whereas in case of var, variable is initialized to undefined

//uncomment below to see
//console.log(num2);
//ReferenceError: num is not defined 
let num2 = 7; //Initialization



//#7 Hoisting with Execution context
// var recognizes function scope as a new execution context,
// but not block scope
console.log(myName);
var myName = "hitesh";

function sayName() {
    //inside a new context
    var myName = "MR. H";
    console.log(`${myName} - > inside function scope`);
}
sayName()

console.log(myName);


//#8 var doesnt recognize block scopes as a new execution context
//but it recognizes function scope as a new execution context

console.log(surname);
var surname = 'Chauhan'
console.log(surname);

if(true) {
    var surname = 'Choudhary'
    console.log(`${surname} - > inside block scope`);
}

console.log(`${surname} - > outside block scope`);
