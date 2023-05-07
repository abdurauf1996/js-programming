let sonlar = ["abdurauf", "deen", "abror", "tohir", "sirojddim"];
let [sonlar1, sonlar2, ...qolgani] = sonlar;
console.log(sonlar1);
console.log(sonlar2);

console.log(qolgani);

let sonlar67 = [23, 4567, 876, 9876];
let copya = [...sonlar67];
// console.log(copya);
function juftVaKvadrat(a) {
  return a
    .filter((element) => element % 2 === 0)
    .map((element) => element * element);
}
let a = [11, 22, 33, 46, 75, 86, 97, 98];
let b = juftVaKvadrat(a);
console.log(b); //Kutilgan Natija: [484, 2116, 7396, 9604]

function someMath(a, b) {
  return a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n);
}
console.log(someMath([1, 2, 3, 4], "[5, 4, 3, 2]"));
