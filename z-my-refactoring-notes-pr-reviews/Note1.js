
/**
 * 1. Avoid creating the array outside the for loop
 * Instead use Array.from or array.map function
 */

//Eg
const results = [
    { id: 1, name: "Nana"}, 
    { id: 2, name: "Janashia"}, 
]

function generatePartnerData(data) {
    return `test_${data}`
}

//# Original
const resultModifiedArray_01 = [];
results.forEach((item) => {
  const pruned = _.pick(item, 'id', 'name'); //uses underscore js
  pruned.isPartner = generatePartnerData(item);
  response.push(pruned);
});

//# Refactored Better Way
const resultModifiedArray_02 = Array.from(results, ({ id, name }, index) => {
return { id, name, isPartner: generatePartnerData(results[index]) }
})

