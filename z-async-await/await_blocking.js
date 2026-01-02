// Does await block the main js thread ?
// Ans : async does not block the main js thread but blocks the async function further lines

// IMP - Hence ALWAYS KEEP AWAIT AT LAST IN THE ASYNC FUNCTION
// ===========================================================

// https://medium.com/geekculture/does-async-await-block-javascript-main-thread-c07db9c48c3e
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function timeout() {
    console.log("inside timeout");
    return new Promise(resolve => setTimeout(resolve, 3000));
}
async function sleep() {
    await timeout();
    let name = "Shrinath";  //this gets blocked
    console.log(name); //this gets blocked
}

sleep();
console.log("Welcome to Programiz!");

//Output will be
/**
inside timeout
Welcome to Programiz!
Shrinath
 */


//Extracting mfa enabled
const resp = { mfa: { enabled: true } };
const { mfa: { enabled } = { enabled: false } } = resp;
console.log(enabled);