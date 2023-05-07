function raqam(N) {
  var plos = 0;
  for (; N != 0; N = Math.floor(N / 10)) {
    plos++;
  }
  return plos;
}
console.log(raqam(234));
console.log(raqam(2356789));
console.log(raqam(69));
console.log(raqam(76542));
