//Higher Order Function Custom Example
//https://dmitripavlutin.com/javascript-higher-order-functions/

//#1 Calculate Higher order Function
function calculate(operation, initialValue, numbers) {
    let total = initialValue;
    for (const number of numbers) {
        total = operation(total, number);
    }
    return total;

}

function sum(n1, n2) {
    return n1 + n2;
}

function multiply(n1, n2) {
    return n1 * n2
}

console.log(calculate(sum, 0, [1, 2, 6])); //9
console.log(calculate(multiply, 1, [1, 2, 4])); //8


//# 2
//Inbuilt addEventListener accepts another function
/*
document
  .getElementById('#myButton')
  .addEventListener('click', function handler() {
    console.log('The button was clicked!');
  });
*/

//# 3 
//Implementation of reduce function
const reduce = (reducer, initial, arr) => {
    // shared stuff
    let acc = initial;
    for (let i = 0, { length } = arr; i < length; i++) {
        // unique stuff in reducer() call
        acc = reducer(acc, arr[i]);
        // more shared stuff
    }
    return acc;
};
reduce((acc, curr) => acc + curr, 0, [1, 2, 3]); // 6

// #4
//Another function implementation, return multiply by 2 array
function copyArrayAndManipulate(arr, instructions) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(instructions(arr[i]));
    }
    return output;
}

function multiplyBy2(input) {
    return input * 2;
}
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

//#5
//Map Implementation
function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

console.log(map([43, 21, 77, 11, 81], s => s == `${Math.sqrt(s)}`));


//#6 Filtering function implementation
//If test is passed push the elment to result array
function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

console.log(
    filter(
        [{
            living: true
        }, {
            living: false

        }], script => script.living)
);