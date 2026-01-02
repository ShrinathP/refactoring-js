
//Good articles on async await
/*

https://www.freecodecamp.org/news/async-await-in-javascript/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
https://www.programiz.com/javascript/async-await

https://javascript.info/async-await


Can we use async functions inside Promise.all ?

*/

/* V IMP Promise all correct use with async functions

https://stackoverflow.com/questions/64515055/should-i-use-await-inside-promise-all
https://stackoverflow.com/questions/63102685/promise-all-not-working-with-an-array-of-async-functions
*/


// a promise #1
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 4000);
});


// Second promise returns an array #2
const getUsers = () => {
    return new Promise((resolve, reject) => {
      return setTimeout(
        () => resolve([{ id: 'jon' }, { id: 'andrey' }, { id: 'tania' }]),
        2000
      )
    })
  }

//Async Function 1
async function asyncFunc() {
    // wait until the promise resolves 
    let result = await promise; 
    console.log(result);
    console.log('hello');
}

  
  //Async Function 2
  async function asyncGetUsers() {
    let resultArray = await getUsers();
    console.log(resultArray);
    resultArray.forEach(({ id }) => {
        console.log(id);
    })
  }
  

//This is correct 
//This will run promises parallely
async function Combine() {
    await Promise.all([asyncFunc(), asyncGetUsers()]);
    console.log(`End date: - ${Date.now()}`);
}

//This is wrong
//This will run promises sequentially
async function Combine2() {
    await Promise.all([await asyncFunc(), await asyncGetUsers() ])
    //return Date.now();
    console.log(`End date: - ${Date.now()}`);
    
}

//asyncFunc
//asyncGetUsers();
//Combine();

let start = Date.now();
console.log(`Start date: - ${start}`);
Combine();
