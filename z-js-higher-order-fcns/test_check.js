

const isAccountUnverified = true
const isNameMissing = true

const message = isAccountUnverified ? 'User\'s firstName or lastName is not set' : isNameMissing ? 'User\'s email' : '';

const messageList = {
    'accountNotVerified': '',
    'NameNotSet': ''    
}

message = messageList['is']

const Verification = {
    isAccVerified: () => {accountLocked && lockedReason === 'UNVERIFIED'},
    isNameValid: () => {!name.givenName || !name.familyName}
}


const isAccountUnverified1 = true
const isNameMissing1 = true
if(isAccountUnverified || isNameMissing) {
    const err = {
        statusCode: ApiConstants.BAD_REQUEST,
        name: 'BadRequest',
        message: isAccountUnverified ? messageList['accountVerifiedMessage'] : messageList['NameNotSetMessage']
      };
    throw err;
}