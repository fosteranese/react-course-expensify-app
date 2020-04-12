const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
        name: 'Foster',
        age: 28
    });
    // reject('Something went wrong');
  }, 1500);
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
          name: 'Foster',
          age: 28
      });
    }, 1500);
  });
}).then((str)=>{
  console.log('Does this run?', str);
}).catch((error)=>{
    console.log('error:', error);
});

console.log('after');