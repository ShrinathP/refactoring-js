const req = {params: {}}

//For this
//const email = (params && params.id) || '';
//const tenantUUID = user.defaultTenant || '';

//can  be refactored to 
const { params: {id: email1 = 'ss'} = {}, user: {defaultTenant: tenantUUID1 = 'sss'} = {} } = req;


//let tenantUserResponse = {};

console.log(email1, tenantUUID1);