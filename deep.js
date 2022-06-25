const myF = (newFun) => {
  newFun();
};

// const newFun = () => {
//   console.log("this function called");
// };

myF(() => {
  console.log("this function called");
});
// newFun();
