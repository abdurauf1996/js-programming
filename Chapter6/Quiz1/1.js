function foksNum(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(array[i] + " juft son");
    } else {
      console.log(array[i] + " toq son");
    }
  }
}
let array = [3, 4, 12, 77, 2324, 13];
foksNum(array);
