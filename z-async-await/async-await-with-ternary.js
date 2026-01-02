
/**
 * ___HOW TO USE FLAGS WITH ASYC AWAIT___
 * This talks about how to use flags with async await or promises
 * 
 * Note we have to wrap the whole ternary with await 
 * Eg:-> await (flag ? firstPromise : secondPromise)
 * 
 * https://medium.com/@griffinmichl/async-await-with-ternary-operators-af19f374215
 */


const firstPromise = new Promise((res,rej) => {
    setTimeout(() => {
        res(1)
    }, 2000)
})

const secondPromise = new Promise((res,rej) => {
    setTimeout(() => {
        res(2)
    }, 2000)
})

async function thirdAsync() {
    const result = await Promise.resolve(3) + 4
    console.log('Logged inside async function: ' + result);
    return result
}

const flag = false

// Note we have to wrap the whole ternary with await 
//Eg.1 firstPromise + secondPromise
async function doSomeAsyncStuff(flag) {
    const result = await (flag ? firstPromise : secondPromise);
    console.log(result);
    return result
}

//doSomeAsyncStuff(flag);


//Eg.2 promise + Promise.resolve
async function doSomeAsyncStufPromisePlusPromiseResolve(flag) {
    const result = await (flag ? firstPromise : Promise.resolve(3));
    console.log('This result: ' + result);
    return result
}

//doSomeAsyncStufPromisePlusPromiseResolve(flag)

//Eg.3 promise + async function
async function doSomeAsyncStufPromisePlusAsync(flag) {
    const result = await (flag ? firstPromise : thirdAsync());
    console.log('This result: ' + result);
    return result
}

doSomeAsyncStufPromisePlusAsync(flag)
