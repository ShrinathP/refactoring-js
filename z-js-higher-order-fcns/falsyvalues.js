//Falsy Values on Variables
let shrinath;

if(!shrinath) {
    console.log('Falsy');
}
const object = {prop1: 2, prop: 2, prop3: ''};

if(!object.prop3) {
    console.log('prop3 is falsy');
}
