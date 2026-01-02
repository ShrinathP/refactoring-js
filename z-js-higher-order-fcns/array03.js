//Traversy Media
//forEach

//We can pass 3 parameters in forEach or in any inbuilt filter function
const arr = [11, 22, 33, 44, 55]
let result = arr.map((elem, index, arr) => {
    return { value: elem, index: index, partOf: arr }
})

console.log(result);

//# Map with 'this'
//Complete map method syntax, how to change this value
arr.map(function(element, index, array){  }, this);

//The this argument will be used inside the callback function.
//NOTE: default value of this = undefined 
// changing this

let arr2 = [2, 3, 5, 7] 
const result2 = arr2.map(function(element, index, array){
	console.log(this) // 80
    console.log(element) // 80
    console.log(index) // 80
}, 80);
console.log(result2);