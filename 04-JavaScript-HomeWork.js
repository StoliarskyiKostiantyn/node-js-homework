function double(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 1000);
  });
}

function addTen(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num + 10);
    }, 1000);
  });
}

double(5)
  .then(addTen)
  .then((result) => {
    console.log(result);
  });
