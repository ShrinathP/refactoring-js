
//ES6 exporting
//NOTE
//import { divide, subtract } from './math-utils-2.js';
//rename the file to math-utils-2.mjs so that the new import work
//or add "type: module" to package.json file

//import statement never works ??
//node default uses CommonJs to import using require???

/*
When we add type:module to package.json we get error saying (require is invalid)

Hello Shrinath
shrinath.potul@NTJQLK200C z-js-destructuring-coding-garden % node array_destructuring.js
file:///Users/shrinath.potul/Documents/testin/javascript%20mastery/react-crash-course/z-js-destructuring-coding-garden/array_destructuring.js:6
const { addfunction , multiply } = require('./math-utils')
                                   ^

ReferenceError: require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and '/Users/shrinath.potul/Documents/testin/javascript mastery/react-crash-course/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
    at file:///Users/shrinath.potul/Documents/testin/javascript%20mastery/react-crash-course/z-js-destructuring-coding-garden/array_destructuring.js:6:36
*/

const subtract =  (a, b) => {
    return a - b;
}

const divide  = (a, b) => {
    return a / b;
}

export default function hello () {
    console.log('test');
}
//ES6 exporting
export { subtract, divide };