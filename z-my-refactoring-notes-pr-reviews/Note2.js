/**
 * Explore possibility of Promise.all, Promise.allSettled - parallel Promise Executions
 * to execute multiple independent API executions
 * 
 * If you want to Fail early if any one of the Promises reject - use Promise.all
 * Eg. validations for an Email
 * 
 * If you want to continue, and execute all the Promises, doesnt matter if one fails - use Promise.allSettled
 * 
 */


//Eg
//First Promise
//Promise 1
let promise1 = Promise.resolve(3).then(
    (result) => {
        return new Promise((res, rej) => {
            setTimeout(() => res(result * 2),
                2000)
        })
    }
)

//Second Promise
//Function that returns a Promise 2
let promise2 = (num) => {
    return new Promise((res, rej) => {
        setTimeout(() => res(3 * num),
            3000)
    })
}

//# Original
//Instead of this
async function executePromisesSequential() {
    const result1 = await promise1;
    console.log(result1);
    const result2 = await promise2(3);
    console.log(result2);
}
//executePromisesSequential();

//# Refactored
//Refactor to Parallel Execution
async function executePromisesParallel() {
    const [result1, result2] = await Promise.all([promise1, promise2(3)]);
    console.log(result1);
    console.log(result2);
}

executePromisesParallel();

