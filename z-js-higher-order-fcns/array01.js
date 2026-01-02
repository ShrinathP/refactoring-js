const groceryList = [
    { name: "apples", price: 25, category: "fruits" },
    { name: "Mongoes", price: 22, category: "fruits" },
    { name: "Tomatoens", price: 20, category: "vege" },
    { name: "Milk", price: 18, category: "misc" },
    { name: "Bread", price: 5, category: "misc" },
    { name: "Egg", price: 2, category: "misc" },

];

console.log(groceryList);

//forEach
groceryList.forEach(item => {
    console.log(`The price for ${item.name} is ${item.price}`);
})

//NOTE - Index is necessary for all below methods
console.log("=============== \n");
//Map
const newPrice = groceryList.map(item => {
    return {name: item.name, price: item.price * 2};
})
console.log(newPrice);

console.log("=============== \n");
//Filter
const fruitList = groceryList.filter(item => {
    return item.category === 'fruits';
})
console.log(fruitList);


console.log("=============== \n");
//find
const result = groceryList.find(item => {
    return (item.category).toLowerCase() === 'vege'
})

console.log(result);

//Filter VS find
//Filter will filter all the values in the array
//While
//Find will stop the search as soon as we get the first Object match

console.log("=============== \n");
//findIndex
const index = groceryList.findIndex(item => {
    return (item.name).toLowerCase() === 'egg'
})

console.log(index);

console.log("=============== \n");
//sort
const sortedArray = groceryList.sort((a, b) => {
    return a.name.localeCompare(b.name)
})
console.log(sortedArray);

const sortedArray2 = groceryList.sort((a, b) => {
    return a.price - b.price
})
console.log(sortedArray2);


//sort based on multiple properties
//https://stackoverflow.com/questions/6913512/how-to-sort-an-array-of-objects-by-multiple-fields
var homes = [
    {
    "h_id": "3",
    "city": "Dallas",
    "state": "TX",
    "zip": "75201",
    "price": "162500"},
{
    "h_id": "4",
    "city": "Bevery Hills",
    "state": "CA",
    "zip": "90210",
    "price": "319250"},
{
    "h_id": "6",
    "city": "Dallas",
    "state": "TX",
    "zip": "75000",
    "price": "556699"},
{
    "h_id": "5",
    "city": "New York",
    "state": "NY",
    "zip": "00010",
    "price": "962500"}
];

homes.sort(function(a,b){
      if (a.city===b.city){
         return (b.price-a.price);
      } else {
          return a.city.localeCompare(b.city)
      }
   });

console.log(homes);

//chained sorting approach
//Check what is chained sorting
//https://stackoverflow.com/questions/6913512/how-to-sort-an-array-of-objects-by-multiple-fields
homes.sort((a, b) => a.city.localeCompare(b.city) || b.price - a.price);

//Same as Java comparing and thenComparing methods
/*
Comparator<Entity> comparator = Comparator.comparing(Entity::getPrice,
    Comparator.reverseOrder());
comparator = comparator.thenComparing(Entity::getProdName, 
Comparator.reverseOrder());
comparator = comparator.thenComparingLong(Entity::getId);
*/

console.log("=============== \n");
//some - returns boolean value if any element satisfied the criteria
const checkPrice = groceryList.some(item => {
    return item.price > 20;
})
console.log(checkPrice);

console.log("=============== \n");
//every - returns boolean value if every element satisfied the criteria
const checkPriceEvery = groceryList.some(item => {
    return item.price > 20;
})
console.log(checkPriceEvery);

console.log("=============== \n");
//reduce 
//first arg = function(reducer, element)
//second argument = initialValue
let initialValue = 0;
const total = groceryList.reduce((currTotal, item, index) => {
    //For debugging purpose we use index
    console.log("-------" + index + "--------");
    console.log(currTotal);
    return item.price + currTotal;
}, initialValue)
console.log(total);

console.log("=============== \n");
//includes
//doesnt take any argument
const numbers = [1,2,3,4,5,6,7]
console.log(numbers.includes(5));

console.log("=============== \n");
//concat
const letter = ["a", "b", "c"]
console.log(numbers.concat(letter));

console.log("=============== \n");
//flat
const numbers2 = [1,2,3,4,[6,7],[6,[3,2]]]
console.log(numbers2.flat());
//Note - will only flatten 1 level

//flattening 2 levels
const numbers3 = [1,2,3,4,[6,7],[6,[3,2]]]
console.log(numbers3.flat(2));

console.log("=============== \n");
//IMP in java flatMap is mapping then flattening - Java  - IMP - Venkat

//flat().map() in js
console.log(numbers3.flat(2).map(num => {
   return Math.pow(num, 2) ; 
}));


//flatMap in a sinle line
//but only 1 level of flattening is done in flatMap
console.log(numbers3.flatMap(num => {
    return Math.pow(num, 2) ; 
 }));
 

 //ES6s
//Create a Prefilled Array with .fill
//ES6 had Array.prototype.fill
const sameValArr =  new Array(10).fill(2);
console.log(sameValArr);

//Using Array.from to fill the array with precomputed values
const randArr = Array.from(Array(10), () => Math.floor(10 * Math.random()))
console.log(randArr);