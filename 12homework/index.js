function createGenerator() {
  let count = 0;

  return function () {
    //   first variant
    // if (count < 3) {
    //   count++;
    //   return count;
    // } else {
    //   return undefined;
    // }
    //   second variant
    return count < 3 ? ++count : undefined;
  };
}

const generator2 = createGenerator();

console.log(generator2()); // 1

console.log(generator2()); // 2

console.log(generator2()); // 3

console.log(generator2()); // undefined
