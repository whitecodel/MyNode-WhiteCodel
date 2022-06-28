const promise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        console.log("this is the promise");
        resolve("Stuff worked!");
      }, 2000);
    } else {
      reject("It broke");
    }
  });
};

const anotherF = (msg) => {
  console.log(msg, "from antoher function");
};

const mainF = async () => {
  const res = await promise();
  anotherF(res);
};

mainF();

// promise
//   .then((res) => {
//     anotherF(res);
//   })
//   .catch((err) => {});
