//Creating delay functions

//https://stackoverflow.com/questions/39538473/using-settimeout-on-promise-chain

//Eg 1
const delay = (time) => new Promise((resolve, reject) => {
    setTimeout(() => resolve('SuccessVal'), time)   //setTimeout always takes a function which resolved the value
})

delay(3000).then((resolvedValue) => console.log(`My resolved value: ${resolvedValue}`))


/*
Succint Way
const delay2 = t => new Promise(resolve => setTimeout(resolve, t));
delay2(3000).then(() => console.log('Hello'));
*/

/* Promises Mistake
https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/

Advanced mistake #2:
Always replace
then(resolveHandler, rejectHandler)
with
then(resolveHandler).catch(rejectHandler)

never use the second argument to then()
*/