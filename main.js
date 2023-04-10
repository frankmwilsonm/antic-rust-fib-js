function fibonacci(n) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return a;
}


function testFibonacci(n) {
  for (let i = 0; i < n; i++) {
      fibonacci(10)
  }
}


console.time("fibonacci en:");
testFibonacci(1000);
console.timeEnd("fibonacci en:");







// console.time("fibonacci tiempo");
// console.log(fibonacci(20));
// console.timeEnd("fibonacci tiempo");


