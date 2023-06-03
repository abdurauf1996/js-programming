const arr1 = ["banana", "olma", "anor"];
const arr2 = ["nok", "bexi", "uzim"];
const arr3 = arr1.concat(arr2);
console.log(arr3);

function addTwo(element) {
  return element ** 2;
}

const number = [4, 36, 64, 121];
const newarr = number.map(addTwo);
console.log(newarr);

const fruits = ["nok", "bexi", "banan", "shaftoli"];
fruits.sort();
console.log(fruits);

const name1 = ["tohir", "deen", "sirojdin", "abdu", "dilshod", "sohib"];
const Mybest = name1.slice(2, 5);
console.log(Mybest);

function filterAge(age) {
  return age >= 15;
}
const namber = [23, 13, 45, 67, 17];
const namber1 = namber.filter(filterAge);
console.log(namber1);

const davlat = ["korea", "japan", "shimol", "vetnam", "tailand"];
const davlat1 = davlat.indexOf("japan");
console.log(davlat1);

function get(define) {
  return define >= 18;
}
const get1 = [32, 56, 76, 89];
const katta1 = get1.find(get);
console.log(katta1);

function myfunction(atm) {}
