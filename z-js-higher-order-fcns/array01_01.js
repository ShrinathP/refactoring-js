
//slice - Shallow Copy
//slice makes a shallow copy of the original array
//it doesnt modify the original array
//Florin Pop youtube and this article
//https://www.javascripttutorial.net/javascript-array-slice/

const numbers = [1,2,3,4,5];

//#1
//slice the array from start index 
//to end index, excluding the end index
const numbers2 = numbers.slice(1, 4);
console.log(numbers2);

//#2 - Clone into new Array
//shallow copy
const numbers3 = numbers.slice();
console.log(numbers3);

//#3 
//slice from start index till last
const numbers4 = numbers.slice(1);
console.log(numbers4);

//#4 
//get the last 3 elements of the array
const numbers5 = numbers.slice(-3);
console.log(numbers5);

//#5 Convert ArrayLike objects to Array, using slice
/*
What is an ArrayLike object

It is any object with a "length" 
property that returns the number of elements inside the object, 
plus numeric indices giving access to elements inside it.

Following are all arrayLike objects
Eg 1. arguments/parameters passed into a function 
   2. HTMLCollection - NodeList Object which we get from (document.querySelectorAll)
*/
//Eg - custom object with index and length
var testObj = {
    length: 4,
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
}
let realArray = Array.prototype.slice.call(testObj)
console.log(realArray);

//2nd example - custom object with index and length
var arrayLike2 = {
    0: 'Value 0',
    1: 'Value 1',
    2: 'Value 2',
    length: 3,
  };

  var realArray2 = Array.prototype.slice.call(arrayLike2);
 console.log(realArray2);

 //3rd Example - arguments
 function toArray() {
    return Array.prototype.slice.call(arguments);
}
var classification = toArray('A','B','C');
console.log(classification); // ["A", "B", "C"]


//4th Example - HTMLCollection

/*
var p = document.querySelectorAll('p');

var list = Array.prototype.slice.call(p);
//OR
list = [].prototype.slice.call(p)  
*/

//Shorter version [].slice.call()
 realArray2 = [].slice.call(arrayLike2); // Shorter version  
console.log(realArray2);
 realArray2.indexOf('Value 1'); // Wow! this works

 //
 //slice.call() with Arraylike Object and index
 realArray2 = [].slice.call(arrayLike2, 1); // Shorter version  
console.log(realArray2);

//slice.call() with start and end index
realArray2 = [].slice.call(arrayLike2, 1, 2); // Shorter version  
console.log(realArray2);

//WebTable Example
//For a customers Table Example here
// https://www.techlistic.com/p/demo-selenium-practice.html
/*
var trlist = document.querySelectorAll('table#customers tr')
var res = [].slice.call(trlist)
console.log(res)
res[2]
res[2].innerHTML.toString().includes('Meta')
*/


//#ES6
//With ES6 we can directly use spread Operator
//const spanList = [...document.querySelectorAll("span")];

//Better way is to use Array.from() ES6

