
//#1 Array.find -> first Match of the element
//If we need only first match object
//Use Array find instead of array.filter

//Example
arr = [
    {name: 'shrinath', surname: 'potul'},
    {name: 'shrinath1', surname: 'potul1'},
    {name: 'shrinath2', surname: 'potul2'},
    {name: 'shrinath2', surname: 'potul3'},
]

const firstMatch = arr.find(({name, surname}) => {
    return name == 'shrinath2';
    //OR
    //return name.includes('shrinath2');
})

console.log(firstMatch);


//#2 Array.findIndex is another Method which will provide the index of the first occurence element
const firstMatchIndex = arr.findIndex(({name, surname}) => {
    return name == 'shrinath2';
    //OR
    //return name.includes('shrinath2');
})

console.log(firstMatchIndex);
