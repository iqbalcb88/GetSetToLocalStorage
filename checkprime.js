function myFunction(n) {
  if (n == 1) {
    return 1 + ' is not a prime number';
  }
  if (n == 2) {
    return 2;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      n++;
    }
  }

  return n;
}
/* const x = myFunction(115);
console.log(x); */
console.log(myFunction(38));
