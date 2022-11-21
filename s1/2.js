// function checkDiv (n, divisor) {
//   if (n % divisor === 0) {
//     return true
//   } else {
//     return false
//   }
// }

const checkDiv = (n, d) => !(n % d)

console.log(checkDiv(6, 3))
console.log(checkDiv(6, 5))
