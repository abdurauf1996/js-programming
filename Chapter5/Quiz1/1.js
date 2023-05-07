function print(N) {
  for (let i = 1; i <= N; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j + " ";
    }
    console.log(line);
  }
}
print(5);
print(6);
print(9);
