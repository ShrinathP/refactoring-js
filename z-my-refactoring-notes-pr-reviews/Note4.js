//IMP - Never use else
//Why I Don't Use Else When Programming - Web Dev Simplified - Youtube
//https://www.youtube.com/watch?v=EumXak7TyQ0

//(Extension of Guard Clause)
//Refactoring 1 (if guards)- use if guards instead of if else
//Refactoring 2 (extract function) - in case you are assigning a variable based on if else if condition - its better to use extractFunction 

//Original
function canDrink(person) {
    if (person.age != null) {
        if (person.age < 18) {
            console.log("Nope");
        } else if (person.age < 21) {
            console.log("Not in US");
        } else {
            console.log("Yes ");
        }
    } else {
        console.log("You are not a person");
    }
}

const p = {
    age: 22,
}

canDrink(p)

//Iteration1 - using if guards - better but not best
//As we are calling console log all the time @ every step
//This can be refactored to
function canDrinkBetter(person) {

    if (person.age == null) {
        console.log("You are not a person");
        return
    }
    /*
    Above can be written as
    if(person.age == null) return console.log("You are not a person");
    */

    if (person.age < 18) {
        console.log("Nope");
        return
    }

    if (person.age < 21) {
        console.log("Not in US");
        return;
    }
    console.log("Yes ");

}

const p2 = {
    age: 22,
}

canDrinkBetter(p2)

//Iteration2 store logging variable and log only at one place
//Instead of logging all the time
//ISSUE - We have to use `else`
function canDrinkBetter2(person) {
    if (person.age == null) {
        console.log("You are not a person");
        return
    }

    let result
    if (person.age < 18) {
        result = "Nope";
    } else if (person.age < 21) {
        result = "Not in the US";
    } else {
        result = "Yes"
    }
    console.log(result);

}

const p3 = {
    age: 22,
}

canDrinkBetter2(p3)

//Iteration3 - Extract function to assign the result variable
//In the extracted function use if guards
function canDrinkBetter3(person) {
    if (person.age == null) {
        console.log("You are not a person");
        return
    }

    let result = canDrinkResponse(person.age)
    console.log(result);
}

//extract function
function canDrinkResponse(age) {
    if (age < 18) return "Nope "
    if (age < 21) return "Not in the US "
    return "Yes"
}

const p4 = {
    age: 22,
}

canDrinkBetter3(p4)


