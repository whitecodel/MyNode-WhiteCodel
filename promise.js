const promise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      console.log("this is the promise");
      resolve("Stuff worked!");
    }, 2000);
  } else {
    reject("It broke");
  }
});

const anotherF = () => {
  console.log("this is after the promise");
};

const mainF = async () => {
  const res = await promise;
  anotherF();
};

mainF();

// promise
//   .then((res) => {
//     anotherF(res);
//   })
//   .catch((err) => {});
