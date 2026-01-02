const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

const promiseReturningFunction = function() {
	return new Promise((res, rej) => {
    	res(444);
    });
}


Promise.all([promise1, promise2, promise3, promiseReturningFunction() ]).then((values) => {
  console.log(values);
});