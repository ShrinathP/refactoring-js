//1. Use of ShortHand Operator (!!x) OR Boolean(x)
/** Homework -- Null Coaleascing operator  ?? same as ||
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
 * 
 * //
 * We can use OR(||) short circuit evaluation or Nullish coalescing operator (??) 
 * to assign a default value to a variable
*/
//When working with conditions , shorthand method can save you a lot of time and space
//It converts a nonboolean to an inverted boolean (for instance, !5 would be false, since 5 is a non-false value in JS), 
//So !! is not an operator, it's just the ! operator twice.
//then boolean-inverts that so you get the original value as a boolean (so !!5 would be true).
//https://stackoverflow.com/questions/784929/what-is-the-not-not-operator-in-javascript
/*
The following values are considered by JavaScript to be falseys:
Empty string: ""
0
null
undefined
NaN
*/

const { getDefaultNormalizer } = require("@testing-library/react");

//Add Properties based on falsy values
//https://www.kevinpeters.net/adding-object-properties-conditionally-with-es-6

const result = { data: { id: 'userId' } };
//const result = { newdata: { id: 2 } };
const { data: { id: userId = '' } = {}, data: resultData = {} } = result;
const { data: { id: userId1 = '' } = {} } = result;
console.log(resultData);
console.log(userId);
console.log(userId1);



//Example
const body = { companyName: 4, location: 'Mumbai' };

//If Falsy, null, undefined, '', 0
if (body.companyName) {
  body.organization = body.companyName;
}
console.log('Organization' + body.organization);
//Good way of assigning if the property is present
const body2 = { ...body, ...(Boolean(body.companyName) && { organ22: body.companyName }) };
//Same as Below
//const body2 = { ...body, ...(!!(body.companyName) && { organ22: body.companyName }) };
console.log(`Organization22 + ${body2.organ22}`);
//Same as Below
if(body.companyName) {
    body.organ22 = body.companyName;
}

const user = 'shrinath.potul@gm.com'
const [firstName, lastName] = user.includes(".") ? user.split('.') : [user, user]

//conditional evaluation
const bodys = (req.body && req.body.additional_fields) || req.body || {};



body.companyName && (body.organ = body.companyName);
console.log(body.organ);

//Expression with no assignment // Eslint Error
!!(body.companyName) && (body.organ2 = body.companyName)
console.log(body.organ2);

//This will consider everything as truthy untill companyName is present in any form
body.organ3 = body.companyName && body.companyName;
console.log("organ3" + body.organ3);

const targetTypeFromBody = body.targetType;
const userName = body.email || '';

const targetId = body.targetId || 'beam';// de

console.log(`${targetTypeFromBody}, ${userName}, ${targetId}`);
const { targetType: targetTypeFromBody1, email: userName1 = '', targetId: targetId1 = 'beam' } = body;
body.org = body.companyName && body.companyName;

console.log(`${targetTypeFromBody1}, ${userName1}, ${targetId1}`);


// check empty, 0, null and undefined conditions for a variable
let x = null;

if (x !== '' && x !== null && x !== undefined) { 
    //do something
 }


//Replace above by
if ( !!x ) { 

    //do something
 } else {
     console.log(`x is either 0 or undefined or null`);
 }

 //!!x is same as Boolean(x)
 if(Boolean(x)) {
} else {
     console.log(`x is either 0 or undefined or null`);   
 }

 //!! is same as Boolean value of an entity
 //An easy way to describe it is: Boolean(5) === !!5; Same casting, fewer characters
 

//JS Guard Operators &&
//https://medium.com/@nicolasmarcora/mastering-javascripts-and-logical-operators-fd619b905c8f