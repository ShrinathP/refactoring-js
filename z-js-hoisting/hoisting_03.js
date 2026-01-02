//Example 8

emp2();                 //function emp2 hoisted here //so will print 2
var emp2 = function() { //emp2 renamed
 console.log('1');
 }
 emp2();                //prints 1
 function emp2() {
 console.log('2');
 }
 emp2();                //prints 2 , No Prints 1, why ??



 greetings();
 var greetings = function() {
     console.log('First Greetings');
 };
 greetings();

 function greetings() {
     console.log('Second Greetings');
 }
 greetings()

 //OP -> Second Greeting, First Greetings, First Greetings