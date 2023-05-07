// function sortArr(a) {
//   return a.filter((element) => typeof element === "number");
//   //   let newVal = [];
//   //   for (let i = 0; i <= a.length; i++) {
//   //     if (a[i] === Number(a[i])) {
//   //       newVal.push(a[i]);
//   //     }
//   //   }
//   //   return newVal;
// }
// let a = [45, true, "JS", 23, false, 22];
// let newVal = sortArr(a);
// // for (let i = 0; i <= a.length; i++) {
// //   if (a[i] === Number(a[i])) {
// //     newVal.push(a[i]);
// //   }
// // }
// console.log(newVal);
function ab(element) {
  return typeof element === "number";
}
function sort(a) {
  return a.filter(ab);
}
let fan = [1, true, 2];
let sralangan = sort(fan);
console.log(object);
