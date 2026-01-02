//https://www.javascripttutorial.net/es6/javascript-array-from/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
////https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/

//In ES5
//Conversion of array like object to array
function arrayFromArgs() {
    var results = [];
    for (var i = 0; i < arguments.length; i++) {
        results.push(arguments[i]);
    }
    return results;
}

var fruitList = arrayFromArgs('Apple', 'Mango', 'Cherry');
console.log(fruitList);

//Keeping it concise using array.prototype.call
function arrayFromArgs() {
    return Array.prototype.slice.call(arguments);
}
var fruits = arrayFromArgs('Apple', 'Orange', 'Banana');
console.log(fruits);

//SYNTAX
//Syntax Array.from
//Array.from(target [, mapFn[, thisArg]])


//Using Array.from
//#1 Array from String
console.log(Array.from('foo'));
// [ "f", "o", "o" ]

//#2 Array form using Mapping arrow function
console.log(Array.from([1, 2, 3], x => x + x));

//#3 Array.from with mapping function - another example
function addOne() {
    return Array.from(arguments, x => x + 1);
}
console.log(addOne(1, 2, 3));

//Array from with complex destructuring
/*
const userList = Array.from(results, result => {
    const { username, association = {}, attributes = [] } = result;
    return { username,
      association,
      attributes };
  });

//Array from improved
  const userList2 = Array.from(results, ({ username, association = {}, attributes = [] }) => {
    return { username,
      association,
      attributes };
  });
  */

//#4 Array.from with a this() value
/*
If the mapping function belongs to an object, you can optionally pass the third argument to the Array.from() method. 
The object will represent the this value inside the mapping function.
*/
let doubler = {
    factor: 2,
    double(x) {
        return x * this.factor;
    }
}

let scores = [5, 6, 7];
let newScores = Array.from(scores, doubler.double, doubler);
//here this  = doubler (object passed into Array.from)
console.log(newScores);

//NOTE: IMP
/*
Array.from(obj, mapFn, thisArg) has the same result as Array.from(obj).map(mapFn, thisArg), 
except that it does not create an intermediate array, 
and mapFn only receives two arguments (element, index).
*/

//#5 Array.from with iterables like Map and Set
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);

const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];



//#6 Sequence Generation - (from array Like Object) - MDN Docs
//Generate a sequence of Numbers
//Array.from(arrayLike, function mapFn(element, index) { /* ... */ }, thisArg)

//generate FirstN
const generateFirstN = (n) => Array.from({ length: n }, (elem, index) => index + 1);
console.log(generateFirstN(10));


//generate Range 0 to N with Step
const range = (start, stop, step) => Array.from(
    { length: (stop - start) / step + 1 }, //arrayLike
    (elem, index) => start + (index * step) //mapFunction
)
console.log(range(5, 100, 2));

//#6 Create Array from Iterabe Object - Symbol.iterator
//Since the Array.from() method also works on an iterable object,  
//you can use it to create an array from any object that has a [symbol.iterator] property.
let even = {
    *[Symbol.iterator]() {
        for (let i = 0; i < 10; i+= 2) {
            yield i;
        }
    }
}
let evenNumbers = Array.from(even);
console.log("Even Nos: - " + evenNumbers);

//#7 generate Alphabets using Array.from - MDN docs

//Step 1
//Generating only char int values
//charCodeAt gives the char int values
let charIntArray = range('D'.charCodeAt(0), 'Z'.charCodeAt(0), 1);

console.log(range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1));

console.log(charIntArray);

//Step 2 , mapping the char int values to String
let arrayOfChars = range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1)
    .map(charInt => String.fromCharCode(charInt));
console.log(arrayOfChars);

//Mapping 
//for comparing chars
//console.log('Z'.localeCompare('Y'));



//#8  Note Spread of Array from creates Shallow Copy Only Of One Level
//https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
/*
Please note spread only goes one level deep when copying an array. 
So if you're trying to copy a multi-dimensional arrays,
 you will have to use other alternatives.
 */

 const nums = [[1, 2], [10], [300]];

 //Old way
// const cloneSheeps = sheeps.slice();

 //ES6 way to clone an array
const cloneNums = [...nums];

console.log(cloneNums);

//VV IMP. Shallow copy means the first level is copied, deeper levels are referenced.

// Let's change the first item in the first nested item in our cloned array.
cloneNums[0][0] = '👻';
// you are changing the reference, as spread only shallow copies one level

console.log(cloneNums);
// [ [ '👻', 2 ], [ 10 ], [ 300 ] ]

// NOOooo, the original is also affected
console.log(nums);
// [ [ '👻', 2 ], [ 10 ], [ 300 ] ]

//VV IMP. Shallow copy means the first level is copied, deeper levels are referenced.