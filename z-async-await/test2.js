
const obj = {
    true: {obj1: "val1"},
    default: {obj2: "val1"}
  }
  let result = '';
  let isExistingUser = false;
  result = (isExistingUser && obj[isExistingUser]) || obj['default'];
  //query = true ? obj[isExistingUser] : obj[default];
  console.log(result);
  