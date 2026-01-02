
/**
 * 
 * Reduce
 * Pushing data into the accumulator
 * https://stackoverflow.com/questions/62066192/array-reduce-accumulator-as-an-empty-array-push-not-working
 * 
 * Full Explanation of reduce
 * 
 */
const orders = [
    {amount: 20, id: 91233},
    {amount: 20, id: 91234},
    {amount: 20, id: 91235},
    {amount: 20, id: 91236},
    {amount: 20, id: 91237},
]

// .reduce takes 3 arguments 
// reduce((accumulator, currentValue) => { /* ... */ } , initialValue)
//          reducer function                             ,initialvalue of accumulator

//NOTE: VVIMP - the reducer function should return a proper accumulator
//https://stackoverflow.com/questions/62066192/array-reduce-accumulator-as-an-empty-array-push-not-working


//#1 Pushing in the acc and returning acc
const total = orders.reduce((acc, curr) => {
    acc.push(curr.amount * 2);
    return acc;
}, []) //the last parameter is important, determines the type of accumulator, in this case acc is an array


//#2
//Pushing using spread
const total2 = orders.reduce((acc, curr) => {
    return [...acc, curr.amount * 2];
}, [])


console.log(total2)


/**
 * 
 * Pending notees to do - very good
 * https://www.youtube.com/watch?v=E0xCNrLTjRw
 * https://www.youtube.com/watch?v=Mus_vwhTCq0
 * https://www.youtube.com/watch?v=Ntd_rT-ZSBM
 */