const promise = new Promise((resolve, rejected) => {
  setTimeout(() => {
    rejected("NOK");
  }, 2000);
});

//rejected("NOK");

promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
