/**
 * `Promise.all`__HOW TO EXTRACT RESULTS FROM ALL PROMISE ALL RESPONSES__
 * NOTE: Promise.all returns an array of results having the resolved values
 * https://www.javascripttutorial.net/es6/javascript-promise-all/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * 
 * * Promise chaining - https://www.javascripttutorial.net/es6/promise-chaining/
 * How to write a js promise - https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/
 */


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise is resolved');
        resolve(10)
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise is resolved');
        resolve(20)
    }, 500);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The third promise is resolved');
        resolve(30)
    }, 3000);
});

//1
//* Printing results of Promise.all using `then`
/*
Promise.all([p1, p2, p3]).then((results) => {
    console.log(`Results: ${results}`);
})
*/

//2
//* Printing results of Promise.all inside an async function
/*
async function getResultsFromPromises() {
    const results = await Promise.all([p1, p2, p3]);
    console.log(results);
}
*/

//3
//* Printing only the second result of Promise.all inside an async function
async function getSecondResultFromPromises() {
    const [,secondResult,] = await Promise.all([p1, p2, p3]);
    console.log(secondResult);
}



getSecondResultFromPromises();
//getResultsFromPromises();

/**
 * Promise.race([p1, p2, p3])
 * returns a single result of p1, p2 or p3 which resolves/rejects fastest
 */

/*
The JavaScript Promise.race() static method accepts an iterable of Promises
and returns a new Promise which resolves or rejects as soon as the first of the promises in the iterable has resolved or rejected.

The Promise.race() method accepts a list of promises/array of promises as an argument. 
The name of the Promise.race() method indicates that all the promises are raced against each other 
to win with a single winner that will be either resolve or rejected.

*/

async function getRacedSingleResultFromPromises() {
    const racedResult = await Promise.race([p1, p2, p3]);
    console.log(racedResult);
}

//getRacedSingleResultFromPromises();