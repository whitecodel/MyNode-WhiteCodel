const funOne = () => {
  setTimeout(() => {
    console.log("Function One");
  }, 3000);
};

const funTwo = () => {
  console.log("Function Two");
};

const main = async () => {
  await funOne();

  await funTwo();
};

main();
