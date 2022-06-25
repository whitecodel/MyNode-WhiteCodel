const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 2000);
});

promise.then((res) => {}).catch((err) => {});
