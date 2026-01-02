
//Common JS exporting

function add (a, b) {
    return a + b;
}

function multiply (a, b) {
    return a * b;
}

//Common Js renamed exports vs basic exports
module.exports = {
    addfunction: add,
    multiply
}