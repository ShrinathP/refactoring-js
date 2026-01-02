arr = [
    {name: 'shrinath', surname: 'potul'},
    {name: 'shrinath1', surname: 'potul1'},
    {name: 'shrinath2', surname: 'potul2'},
    {name: 'shrinath2', surname: 'potul3'},
]

const entity = arr.find(({name, surname}) => {
    return name == 'shrinath2';
    //OR
    //return name.includes('shrinath2');
})

const [admin] = arr; //gets the 1st entity of the list
console.log(admin);

console.log(entity);