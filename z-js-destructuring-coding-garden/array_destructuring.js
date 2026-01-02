//import { divide, subtract } from './math-utils-2.js';
//import statement never works ??
//node default uses CommonJs to import using require???

//exporting and importing using common JS
const { addfunction, multiply } = require('./math-utils')


console.log(addfunction(100, 101));
console.log(multiply(100, 101));
//console.log(divide(100, 101));
//console.log(subtract(100, 101));

//#1 getting first and 2nd value
const values = [1, 2, 3];
const [first, second] = values;

console.log(first);
console.log(second);

console.log('---------------');

//#2 Get Nth value, skip getting initial values
const [, , fly] = values
console.log(fly);

//#3 Object destructuring on an array
// In js everything is an object,
// so with index_no: variable ,
// you can extract array value
const { 2: thirdValue } = values
console.log(thirdValue);

//#4
// direct get the index of the array
console.log(values[2]);

//#5 Complex example
const fruits = ["apple", "mango", "banana", "pineapple", "chiku"];
const [fruit1, , fruit2, ...restFruits] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(restFruits);

//#4 Getting the last element of the array, without knowing the length

//4.1 destructure as an object, same as #3 
// {index : value}
const {
    [values.length - 1]: last
} = values
console.log(`The last value is ${last}`);

//4.1 Arrays have length property, so length also can be destructured, to use it as index get last Value using
// {index : value}
const { length: size, [size - 1]: lastElem } = values;
console.log(lastElem);

//4.1 Get the last value of array inside the object
//IMP
var person = {name: 'Sarah', country: 'Nigeria', friends: ['Annie', 'Beckie', 'Nana']};
const { name: friendName, friends: { length, [length - 1]: lastFriend } } = person;
console.log(`Name: ${friendName}, Her Last Friend: ${lastFriend}`)


//4.2 reverse and destructure the first element
const [aa, ...rest] = values.reverse()
console.log(`The last value is ${aa}`);
//but the elements get reversed
console.log(values);

//#5 destructure arguments in a function
function sayHello({ name }) {
    console.log('Hello', name);
}
sayHello({ rollno: 1, name: 'Shrinath' })

//All below From MDN
//#6 Swapping variables - xor swap trick
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]

//#7 Unpacking values from regular expression matching
function parseProtocol(url) {
    const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
    if (!parsedURL) {
        return false;
    }
    console.log(parsedURL);
    // ["https://developer.mozilla.org/en-US/docs/Web/JavaScript", 
    // "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]

    const [, protocol, fullhost, fullpath] = parsedURL;
    return protocol;
}

console.log(parseProtocol('https://developer.mozilla.org/en-US/docs/Web/JavaScript'));
// "https"

//#8 Unpacking properties from objects passed as function parameter
//Setting a function parameter's default value

//Example 1
function whois({ displayName, fullName: { firstName: name } }) {
    return `${displayName} is ${name}`;
}

//console.log(whois(user));  // "jdoe is John"

// Below we show a function where 
// the default size is 'big',
//  default co-ordinates are x: 0, y: 0 
//  and default radius is 25.
//Example 2 - IMP Complex one
function drawChart({ size = 'big', coords = { x: 0, y: 0 }, radius = 25 } = {}) {
    console.log(size, coords, radius);
}

drawChart({
    coords: { x: 18, y: 30 },
    radius: 30
});

//#9 IMP - For of iteration and destructuring
//Destructuring directly in FOR...OF loop

const people = [
    {
        name: 'Mike Smith',
        family: {
            mother: 'Jane Smith',
            father: 'Harry Smith',
            sister: 'Samantha Smith'
        },
        age: 35
    },
    {
        name: 'Tom Jones',
        family: {
            mother: 'Norah Jones',
            father: 'Richard Jones',
            brother: 'Howard Jones'
        },
        age: 25
    }
];

for (const { name: n, family: { father: f } } of people) { //map
    console.log('Name: ' + n + ', Father: ' + f);
}
  // "Name: Mike Smith, Father: Harry Smith"
  // "Name: Tom Jones, Father: Richard Jones"

  //#10 IMP - Computed Property Object Destructuring
  //Suppose there is a property which is computed on the fly
  //based on another property
  //Eg - rawr property is a computed property
const response = { bb: 1, c: 2, d: 'rawr', rawr: 10 };

  //can destructure like this
  let {bb, c, d, [d]: value} = response
  console.log(c, bb, d, value);

//# 11 Rest in object destructuring
//Rest properties collect the remaining own enumerable property keys that are not already picked off
let {a: aaa, b: bbb, ...restt} = {a: 10, b: 20, c: 30, d: 40}
console.log(`remaining properties of object ${restt}`);

//#12 Invalid Javascript identifier as property name
//Check valid and invalid js identifiers - 
//NOTE - invalid identifiers can be used with single quotes
//Eg. s4: "test1" - valid identifier
// 4s: "test1" is invalid identifier - coz
//coz identifiers cant start with numbers. so add quotes.
// '4s': "test1" - this will work - correct way to use invalid identifiers
// console.log($['4s']) - this will work
const foo = { 'fizz-buzz': true };
const { 'fizz-buzz': fizzBuzz } = foo;

console.log(fizzBuzz); // true
