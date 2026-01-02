//For Testing Purpose //Ignore this file

let promise2 = (val) => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Promise resolvedd for ${val}`);
      resolve(`Promise resolvedd for ${val}`)
    }, 4000 * val);
  }
)};


//arr.map async functions
//Correct way, Creating a list of promises and 
//running them in parallel
async function listOfAsyncsItr3() {
  const arr = [1, 2, 3, 4, 5];
  const res = [];
  console.log('test print 1');
  const asyncList = arr.map(async (member) => {
    let result = await promise2(member);
    if (member % 2 == 0) {
      res.push(member);
    }
    //console.log(`${result} - ${member}`);
  })
  console.log('test print 2');
  await Promise.all(asyncList);
  console.log(res);
  console.log(`End date: - ${Date.now()}`);
  //return res;
}

let start = Date.now();
console.log(`Start date: - ${start}`);
//listOfAsyncs();
listOfAsyncsItr3();
