function findNumbers(n) {
  if (Number.isNaN(Number(n))) {
    return "Please enter a number";
  } else {
    let result = [];
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
        result.push(i);
      }
    }
    return result;
  }
}

console.log(findNumbers(15));
console.log(findNumbers("fg"));
