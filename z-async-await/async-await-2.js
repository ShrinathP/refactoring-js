
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
let promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Promise resolveeed');
    resolve('Promise resolved')}, 10000);
});


let promise2 = (val) => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Promise resolvedd for ${val}`);
      resolve(`Promise resolvedd for ${val}`)
    }, 4000 * val);
  }
)};

// Second promise returns an array #2
const getUsers = () => {
    return new Promise((resolve, reject) => {
      // return setTimeout(   [dont have to mention explicitly 'return' when returning only one execution statement]
      setTimeout(
        () => resolve([{ id: 'jon' }, { id: 'andrey' }, { id: 'tania' }]),
        2000
      )
    })
  }

//Async Function 1
async function asyncFunc() {
    // wait until the promise resolves 
    let result = await promiseOne; 
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
  

//CORRECT
//This is correct as //ASYNC functions when executed return a promise
//This will run promises parallely

async function Combine() {
    await Promise.all([asyncFunc(), asyncGetUsers()]);
    console.log(`End date: - ${Date.now()}`);
}

//Also Promise.all can take a normal function returning a Promise
//Eg
const promiseReturningFunction = function() {
	return new Promise((res, rej) => {
    	res(444);
    });
}

//WRONG 1, awaiting for exeucted async functions
//This is wrong, as we are AWAITING for the promise to be executed, makes no sense
//This will run promises sequentially
async function Combine2() {
    await Promise.all([await asyncFunc(), await asyncGetUsers() ])
    //return Date.now();
    console.log(`End date: - ${Date.now()}`);
    
}

//WRONG 2, passing only unexecuted async functions
//This is wrong
//IMP: Never Pass only function Names
//Promise all with async functions not called
//async functions should always be called inside promise all
async function Combine3() {
  await Promise.all([asyncFunc, asyncGetUsers]);
  console.log(`End date: - ${Date.now()}`);
}

//CHeck dev.to/jamesliudotcc
// https://dev.to/jamesliudotcc/how-to-use-async-await-with-map-and-promise-all-1gb5

//This is correct, 
//You can create an asyncList using map and pass it on fly
async function listOfAsyncs() {
  const arr = [1,2,3,4,5];
  const asyncList = arr.map(async (member) => {
    let result = await promiseOne;
    console.log(`${result} - ${member}`);
  })
  await Promise.all(asyncList);
  console.log(`End date: - ${Date.now()}`);
}


//Correct one
async function listOfAsyncsItr2() {
  const arr = [1, 2, 3, 4, 5];
  const res = [];
  const asyncList = arr.map(async (member) => {
    let result = await promise;
    if (member % 2 == 0) {
      res.push(member);
    }
    //console.log(`${result} - ${member}`);
  })
  await Promise.all(asyncList);
  console.log(res);
  console.log(`End date: - ${Date.now()}`);
  //return res;
}



//Correct way, Creating a list of promises and 
//running them in parallel

//IMP: We collect an array of unresolved promises right away
async function listOfAsyncsItr3() {
  const arr = [1, 2, 3, 4, 5];
  const res = [];
  console.log('test print 1');
  const asyncList = arr.map(async (member) => {
    let result = await promise2(member);
    if (member % 2 == 0) {
      res.push(member);
    }
    //console.log(`${result} - ${member}`);
  })
  await Promise.all(asyncList);
  console.log('test print 2');
  console.log(res);
  console.log(`End date: - ${Date.now()}`);
  //return res;
}


// IMP
// Another Example
// Wait for randomtimes and return double value

const arr1 = [1,2,3,4,5,6,7,8,9];
const randomDelay = () => new Promise((res,rej) => setTimeout(res, Math.random()*1000));

const calc = async n => {
  await randomDelay();
  return n*2;
}

const asyncFuncRandomDelay = async() => {
  const unresolvedPromises = arr1.map(calc);
  const results = await Promise.all(unresolvedPromises)
  console.log(results);
}


/*
NOTE:
1. Notice we only "await for Promise.all"
2. We call calc without "await" multiple times,
3. **and we collect an array of unresolved promises right way**
4. Then Promise.all waits for resolution of all of them and 
returns an array with the resolved values in order
*/



//asyncFunc
//asyncGetUsers();
// Combine();

let start = Date.now();
console.log(`Start date: - ${start}`);

asyncFuncRandomDelay()
// listOfAsyncs()
// listOfAsyncsItr3();
