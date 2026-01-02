
/**
 * HERE WE ARE TRYING TO EXPLORE WHAT HAPPENS IF ERRORS ARE THROWN IN PROMISE.ALL OR PROMISE.ALLSETTLED
 * 
 * Error Handling in Promises - V good link
 * https://javascript.info/promise-error-handling
 * 
 * Promise allSettled article
 * https://www.coreycleary.me/better-handling-of-rejections-using-promise-allsettled
 * 
 */

//1 Promise allSettled with throw Error
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise is resolved');
        resolve(20)
    }, 2000);
});

const promise2 = new Promise((res, rej) => {
    throw new Error("Error thrown from 2nd Promise");
})

//This is another way of throwing an error
//promise2 and promise3 do the same thing
const promise3 = new Promise((res, rej) => {
    rej(new Error("Error thrown from 3rd Promise"))
})

async function settleAllPromises() {
    const result = await Promise.allSettled([promise1, promise2, promise3]);
    const [firstPromiseResult, secondPromiseResult, thirdPromiseResult] = result;
    
    const allPromisesResolved = result.every(res => res.status.includes('fulfill'));
    console.log(`All Promises Resolved: ${allPromisesResolved}`);
    console.log(firstPromiseResult);
    console.log(secondPromiseResult);
    console.log(thirdPromiseResult.status);
}

settleAllPromises();