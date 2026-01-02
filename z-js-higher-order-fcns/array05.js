/*
const response = [];
results.forEach((item) => {
  const pruned = _.pick(item, 'id', 'name');
  pruned.isPartner = promoUtil.isValidPartnerAccount(item);
  response.push(pruned);
});
*/

const data = 'annnnn'
const results = [
    { id: 1, name: "Nana"}, 
    { id: 2, name: "Janashia"}, 
]

/*
const response = Array.from(results, ({id, name}) => {
    pruned = true
    return {id, name, isPartner: `${data}`}
})
*/

const response = Array.from(results, ({id, name}) => {
    pruned = true
    return {id, name, isPartner: `${data}`}
})

const response2 = Array.from(results, ({id, name}, index) => {
    pruned = true
    return {id, name, isPartner: `${results[index].id}`}
})

//destructure and also add another Parameter to Object
const response3 = Array.from(results, ({id, name}, index) => {
    isPartner = generatePartnerData(results[index].id)
    return {id, name, isPartner}
})

const response4 = Array.from(results, ({ id, name }, index) => {
    return { id, name, isPartner: generatePartnerData(results[index].id) }
})

const response5 = Array.from(results, ({ id, name }, index) => (
    { id, name, isPartner: generatePartnerData(results[index].id) }
    ))

function generatePartnerData(data) {
    return `test_${data}`
}
//console.log(response2);
console.log(response4);