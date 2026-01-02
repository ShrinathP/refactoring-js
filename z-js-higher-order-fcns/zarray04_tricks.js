// #7 Array.from results array and return a new array of Objects
const results = [
  {
    username: 'Shrinath',
    association: { assc1: '1', assc2: '2' },
    attributes: [1, 2, 3, 4],
  },
  {
    username: 'Shrinath2',
    association: { assc1: '12', assc2: '22' },
  },
];

const userList = Array.from(results, (result) => {
  const { username, association = {}, attributes = [] } = result;
  return {
    username,
    association,
    attributes,
  };
});
/* eslint no-console: 0 */
console.log(userList);

// Array.from improved -- most succint
// https://stackoverflow.com/questions/47841899/js-map-return-object
// IMP  map function to return object, use rounded brackets ()
const userList2 = Array.from(results, ({ username, association = {}, attributes = [] }) => (
  {
    username,
    association,
    attributes,
  }));
console.log(userList2);

// Array.from, using return instead of rounded braces (), more explanatory
const userList3 = Array.from(results, ({ username, association = {}, attributes = [] }) => ({
  username,
  association,
  attributes,
}));
console.log(userList3);


const userList4 = Array.from(results, ({ username, association = {}, attributes = [] }) => {
  return {
    username,
    association,
    attributes
  }
}
);
console.log(userList4);

//getting multiple results from same user body
const { user: { defaultTenant }, user: { email }, user: { tenants: userTenants = [] } } = req
const isDefaultenant = tenant => tenant['tenant-domain'] === defaultTenant;
userTenants.filter(isDefaultenant);

