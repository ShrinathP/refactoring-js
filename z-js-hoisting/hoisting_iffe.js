// Only initialized variables are accessible outside an IFFE, eg name
// but the declared variables remain private, privateVar

(function () {
    var privateVar = "I am private to IIFE";
    name = "Shrinath"
    // Output: "I am private to IFFE" 
    console.log(privateVar);
})(); 

//Array from


console.log(name); //only initialized one accessible
console.log(privateVar); // ReferenceError: privateVar is not defined 
