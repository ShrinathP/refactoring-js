//Dipesh Malvia - ES6 Destructuring
//https://youtu.be/rpYg2M2lNAE

//##1 
//Array of Objects Destructuring

const groceryList = [
    { item: "apples", price: 25, category: "fruits" },
    { item: "Mongoes", price: 25, category: "fruits" },
    { item: "Tomatoens", price: 25, category: "vege" },
    { item: "Milk", price: 25, category: "misc" },
    { item: "Bread", price: 25, category: "misc" },
    { item: "Egg", price: 25.5, category: "misc" },

];

//1. this will print only first object
const [apple] = groceryList;
console.log(apple);

//2. getting the first item from array of ojects
const [{ item: item1 }] = groceryList;
console.log(item1);
//OR
const [{ item }] = groceryList;
console.log(item);

//3. getting the third array item property
const [, , { item: item3 }, ...rest] = groceryList;
console.log(item3);

//4th Better way - Use Computer array object property 'length'
//Get the last item price of the array
const { length, [length - 1]: {price: lastItemPrice} } = groceryList;
console.log(`Last Item Price is: - ${lastItemPrice}`);

//Get the third item name of the array
const {[2]: { item: itemName }} = groceryList;
console.log(`Third Item Name is - ${itemName}`);

//##2
//Object of Array Destructuring
const company = {
    name: "Google",
    locations: ["Singapore", "India", "Germany"]
};

//this will give the whole locations array
const { locations } = company
const { locations: [, secondLocation,] } = company
console.log(secondLocation);


//#3 Convert array of array  => array of objects
const users = [
    ["dipesh", "malvia"],
    ["Nikhil", "Gadekar"],
    ["Daniel", "Mether"],
];

/*
Convert to 
[
    {
        firstName: "dipesh",
        lastName: "malvia"
    },
    {
        firstName: "Nikhil",
        lastName: "Gadekar"
    },
    {
        firstName: "Daniel",
        lastName: "Mether"
    },
] 
*/

//0. naive way without destructuring
const usersObj = users.map(user => {
    return { firstName: user[0], lastName: user[1] };
});
console.log(usersObj);

//1. other way using destructuring
const usersObj2 = users.map(([firstName, lastName]) => {
    return { firstName: firstName, lastName: lastName };
});
console.log(usersObj2);

//2. as in ES6 we can replace "name: name" with "name"
const usersObj3 = users.map(([firstName, secondName]) => {
    return { firstName, secondName }
})
console.log(usersObj3);

//3. mapping as firstName & secondName and returning as one and two
const usersObj4 = users.map(([firstName, lastName]) => {
    return { one: firstName , two: lastName }
})
console.log(usersObj4);

//MAP without return statements
//Using map without return statements
// Check this link
// https://stackoverflow.com/questions/28889450/when-should-i-use-a-return-statement-in-es6-arrow-functions

//Implicit return of () is an object
// explanation: implicit return of expression ( ) which evaluates to an object
const usersObj5 = users.map(([firstName, lastName]) => (
    { one: firstName, two: lastName }
))
console.log(usersObj5);


//Implicit return is considered if we dont have block statements
//Like below
const usersObj6 = users.map(([firstName, lastName]) => `Hi + ${firstName} + ${lastName}`)
console.log(usersObj6);


//JS map returns an Object and not array
//Check this
// https://stackoverflow.com/questions/56195959/return-object-from-map-function-not-array