//Destructure with Original Object withheld

//https://stackoverflow.com/questions/48039367/clean-way-to-keep-original-variable-and-destructure-at-the-same-time

const doSomething2 = () => ({
    a: 'dd',
    b: 'sad',
});

const doSomething3 = () => {
    return {
        a1: 'dd',
        b1: 'sad',
    }
}

const [result, { a, b }] = [, ,].fill(doSomething2());
const [result2, { a1, b1 }, { b: { c } }] = [, , ,].fill(doSomething3());

/*Create an Empty array and fill it with the same function result
Destructure array in different ways */