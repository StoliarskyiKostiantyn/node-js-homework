// Вхід: x = 121
// Вихід: true
// Пояснення: 121 читається як 121 зліва направо і справа наліво.

const isPalindrome = (x) => {
  // check fr x to be a number
  if (Number.isNaN(Number(x))) {
    return "Please enter a number";
  }
  return x === Number(x.toString().split("").reverse().join(""));
};

console.log(isPalindrome(121));
console.log(isPalindrome("fg"));
