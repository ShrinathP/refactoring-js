const mfa = {};
console.log(mfa == null);
console.log(mfa === null);

const resp = null;
const { mfa: { enabled } = { enabled: false } } = resp || {};
console.log(enabled);

const targetId = '';
const templateName = targetId === 'clusters' ? 'emailClustersInviteUser': 'emailInviteUser';
console.log(templateName);