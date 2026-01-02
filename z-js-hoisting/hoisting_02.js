//https://www.jsmount.com/javascript-hoisting-interview-question-answers/

//Example 0
//=======================
function parent() {
    console.log(hoisted);   //can try //hoisted() hoisted here
    var hoisted = "'I'm a variable"; //renamed, so now only variable stays
    function hoisted() {            //this too hoisted
        return "I'm a function";
    }
    console.log(hoisted);
    return hoisted();

}
console.log(parent());
//output > Uncaught TypeError: hoisted is not a function

//Example 1
//Even this will not work
//=======================
function parent2() {
    function hoisted2() {
        return "I'm a function";
    }
    var hoisted2 = "'I'm a variable";
    return hoisted2();

}
console.log(parent2());
//output > Uncaught TypeError: hoisted is not a function

//Example 2 // This works
//=======================
function parent3() {
    return hoisted3(); //hoisted3 is hoisted here, we return the same function
    var hoisted = "'Im a variable";
  
    function hoisted3() {
      return "Im a function";
    }
  }
  console.log(parent3());

  //output > "Im a function";



  //Example 4
  function parent4() {
    var hoisted = "'Im a variable"; //initialized
    var hoisted  = function hoisted4() { //renamed to function
      return "Im a function";
    }
    return hoisted4();
  }
  console.log(parent4());
  
  //output > 'I am a function'


//Example 2
alert(a());
function a() {
    var b = function () {
        return 3;
    };
    return b();
    var b = function () {
        return 8;
    };
}


//Example 3
//Function Hoisting 
alert(a());
function a() {
//both function b are hoisted but the 2nd b stays
    function b() {
        return 3;
    }
    return b();
    
    function b() {
        return 8;
    }
}
//OP -> 8

//Example 5
function emp() {
    console.log('111');
    }
    emp();
    function emp() {
    console.log('2');
    }
    
   // Output > 2


   //Example 6
   //===================

                            //emp2 function hoisted here
    emp2();       //this prints 2
   var emp2 = function() {  //emp2 is renamed to function
    console.log('1');
    }
    emp2();                 //prints 1
    function emp2() {
    console.log('2');
    }
    emp2();                 //prints 1
    
    // output > 
    // 1
    // 1