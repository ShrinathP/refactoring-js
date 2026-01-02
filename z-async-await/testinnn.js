

const isExistingTenantUser = tenantUserResponse && Object.keys(tenantUserResponse).length > 0;

const responseObj1 = {
    canInvite: !isExistingTenantUser,
    ...(isExistingTenantUser && {message: 'Existing User message'})
}

//const isExistingTenantUser = false;
const responseObj2 = {
    canInvite: !isExistingTenantUser,
    ...(isExistingTenantUser && {message: ApiUtil.EXISTING_USER_MSG})
}


console.log(responseObj1);