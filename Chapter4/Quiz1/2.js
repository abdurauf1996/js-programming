function and(a, b, c, d) {
  if (a > b && a > c && a > d && b > c && b > d && c > d) {
    return `${a},${b},${c},${d}`;
  } else if (a > b && a > c && a > d && b > d && b > c && d > c) {
    return `${a},${b},${d},${c}`;
  } else if (a > b && a > c && a > d && c > b && c > d && b > d) {
    return `${a},${c},${b},${d}`;
  } else if (a > b && a > c && a > d && c > d && c > b && d > b) {
    return `${a},${c},${d},${b}`;
  } else if (a > b && a > c && a > d && d > b && d > c && b > c) {
    return `${a},${d},${b},${c}`;
  } else if (a > b && a > c && a > d && d > c && d > b && c > b) {
    return `${a},${d},${c},${b}`;
  } else if (b > a && b > c && b > d && a > c && a > d && c > d) {
    return `${b},${a},${c},${d}`;
  } else if (b > a && b > d && b > c && a > d && a > c && d > c) {
    return `${b},${a},${d},${c}`;
  } else if (b > c && b > a && b > d && c > a && c > d && a > d) {
    return `${b},${c},${a},${d}`;
  } else if (b > c && b > d && b > a && c > d && c > a && d > a) {
    return `${b},${c},${d},${a}`;
  } else if (b > d && b > a && b > c && d > a && d > c && a > c) {
    return `${b},${d},${a},${c}`;
  } else if (b > d && b > c && b > a && d > c && d > a && c > a) {
    return `${b},${d},${c},${a}`;
  } else if (c > a && c > b && c > d && a > b && a > d && b > d) {
    return `${c},${a},${b},${d}`;
  } else if (c > a && c > d && c > b && a > d && a > b && d > b) {
    return `${c},${a},${d},${b}`;
  } else if (c > b && c > a && c > d && b > a && b > d && a > d) {
    return `${c},${b},${a},${d}`;
  } else if (c > b && c > d && c > a && b > d && b > a && d > a) {
    return `${c},${b},${d},${a}`;
  } else if (c > d && c > a && c > b && d > a && d > b && a > b) {
    return `${c},${d},${a},${b}`;
  } else if (c > d && c > b && c > a && d > b && d > a && b > a) {
    return `${c},${d},${b},${a}`;
  } else if (d > a && d > b && d > c && a > b && a > c && b > c) {
    return `${d},${a},${b},${c}`;
  } else if (d > a && d > c && d > b && a > c && a > b && c > b) {
    return `${d},${a},${c},${b}`;
  } else if (d > b && d > a && d > c && b > a && b > c && a > c) {
    return `${d},${b},${a},${c}`;
  } else if (d > b && d > c && d > a && b > c && b > a && c > a) {
    return `${d},${b},${c},${a}`;
  } else if (d > c && d > a && d > b && c > a && c > b && a > b) {
    return `${d},${c},${a},${b}`;
  } else {
    return `${d},${c},${b},${a}`;
  }
}
console.log(and(1996, 96, 01, 2005));
