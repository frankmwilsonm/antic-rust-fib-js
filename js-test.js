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


console.time("fibonacci js en");
testFibonacci(1000);
console.timeEnd("fibonacci js en");




// function abc(){
//   console.log('Other instance fn -------')
// }

