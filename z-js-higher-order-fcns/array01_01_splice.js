//Splice alters the original array while  - ES1 feature
//Slice returns the shallow copy of the array


//Syntax
//array.splice(index, howmany, item1, ....., itemX
/*
index - Required - The Position to add or remove items
howmany - items to remove
item1...itemX - New Elements to be added
*/

//Example 1 , Remove 0 items, Add 2 Items
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

//Example 2 , Remove 2 Items
const fruits1 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(2, 2);

//Example 3
//At position 2, add new items, and remove 1 item:
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");