//#1 Emptying an Array

let myItems = ["apples", "oranges", "bananas", "kiwis"];
console.log(myItems.length); // 4

myItems.length = 0;
console.log(myItems.length); // 0


//#2  Remove duplicates from array - make values unique
//ES6 Set Object
let names = ["Peter", "Joe", "Cleveland", "Quagmire", "Joe"];
let uniqueNames = [...new Set(names)];

console.log(uniqueNames);

//#3 Picking a random Item in an Array
let myArray = ["Unos", "Dos", "Tres", "Catorce"];
let value = myArray[Math.floor(Math.random() * myArray.length)];
console.log(value);

//Get Random Array while Destructuring
const { length, [Math.floor(Math.random() * length)]: randomItem } = myArray
console.log('Random Item: ' + randomItem);

//#4
//Create a Prefilled Array with .fill
//ES6 had Array.prototype.fill
const sameValArr1 = Array(10).fill(0)
console.log(sameValArr1);

const sameValArr =  new Array(10).fill(2);
console.log(sameValArr);

//Using Array.from to fill the array with precomputed values
const randArr = Array.from(Array(10), () => Math.floor(10 * Math.random()))
console.log(randArr);


//#5
//Remove falsy values from an array
var mixedArr = [0, 'blue', '', NaN, 9, true, undefined, 'white', false];
var trueArr = mixedArr.filter(Boolean);
console.log(trueArr); // prints [“blue”, 9, true, “white”]



//#6. Prevent an object’s properties value from updating
const obj = {name: 'Codedrops'};
console.log(obj.name);

/* Set the writable descriptor to false for the 'name' key */
Object.defineProperty(obj, 'name', {
    writable: false
})

obj.name = 'ABC'
console.log(obj.name); //Codedrops


//#7 Array.from results array and return a new array of Objects
const results = [
    {username: "Shrinath", 
    association: {assc1:"1", assc2:"2"},
    attributes: [1,2,3,4]
    },
    {username: "Shrinath2", 
    association: {assc1:"12", assc2:"22"},
    },
]

const userList = Array.from(results, result => {
    const { username, association = {}, attributes = [] } = result;
    return { username,
      association,
      attributes };
  });
console.log(userList);


//Array.from improved -- most succint
//https://stackoverflow.com/questions/47841899/js-map-return-object
//IMP  map function to return object, use rounded brackets ()
  const userList2 = Array.from(results, ({ username, association = {}, attributes = [] }) => (
    { username,
      association,
      attributes })
  );
  console.log(userList2);

//Array.from, using return instead of rounded braces (), more explanatory  
  const userList3 = Array.from(results, ({ username, association = {}, attributes = [] }) => {
    return { username,
      association,
      attributes }}
  );
  console.log(userList3);


  const userList4 = Array.from(results, ({ username, association = {}, attributes = [] }) => {
    return { username,
      association,
      attributes }}
  );
  console.log(userList4);



/*
So (x) => x + 1 is translated to:

function (x) {
  return x + 1;
}
And (x) => { x + 1 } is translated to:

function (x) {
  x + 1;
}
I must also add that (x) => ({ x }) is translated to:

function (x) {
  return { x: x };
}
*/

//10 js clean code tips
//https://dev.to/redbossrabbit/10-clean-code-examples-javascript-37kj
//Same value to different property
// Assigning the same value to a specific object property conditionally.
let c = 2;
let d = 1;
let a = {};
//legacy way
c > d ? a.foo = 'apple' : a.bar = 'apple';
//Better way
a = { [c > d ? 'foo' : 'bar']: 'apple' }
console.log(a);


//Different value, different property
var size = 3;
var val1 = null;
var val2 = null;
size === 3 ? (val1 = 999, val2 = 100) : 0;
console.log(val1, val2)


//#10 Repeat a string multiple times
//Longhand 
let str = ''; 
for(let i = 0; i < 5; i ++) { 
  str += 'Hello '; 
} 
console.log(str); // Hello Hello Hello Hello Hello 
// Shorthand 
'Hello '.repeat(5);
