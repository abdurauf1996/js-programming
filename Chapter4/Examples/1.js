function salomash(davlat) {
  let salom;
  if (davlat == "USA") {
    salom = "Hello";
  } else if (davlat == "Russia") {
    salom = "Privet";
  } else if (davlat == "Korea") {
    salom = "안녕";
  } else {
    salom = "Salom";
  }
  return salom;
}

console.log(salomash("Korea"));
console.log(salomash("Zimbabve"));
console.log(salomash("Meksika"));
