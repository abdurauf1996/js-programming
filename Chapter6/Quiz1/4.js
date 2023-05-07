// function ar(arr) {
//   let sorted = arr.sort((a, b) => a - b);
//   return sorted[sorted.length - 1];
// }
// const arr = [-100, 1000, 3345, 223, 402, -10, 2];
// let maxVal = ar(arr);
// console.log(maxVal);

function fa(arr) {
  let sor = arr.sort((a, b) => b - a);
  return sor[sor.length - 1];
}
const arr = [-100, 1000, 3345, 223, 402, -10, -300];
let minVal = fa(arr);
console.log(minVal);
