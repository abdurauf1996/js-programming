function namber(l) {
  let fu = 0;
  for (; l != 0; l = Math.floor(l / 10)) {
    fu = fu + (l % 10);
  }
  return fu;
}
console.log(namber(4567890));
