
const body = {
    prop1: 244,
    prop2: 444,
    password: 'secretPass',
    fbpassword: 'adfsdf',
    ntnxpass: 'dfsfsfs'
}

const APIConstantsArray = ['password', 'fbpassword', 'ntnxpass']
const prop = 'prop'

const {[APIConstantsArray[0]]: prop1, ...rest} = body
console.log(rest);
console.log(prop1);


