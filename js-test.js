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


const t0 = performance.now();
testFibonacci(1000);
const t1 = performance.now();

const tiempoTranscurrido = t1 - t0;

console.log(`El tiempo transcurrido es de ${tiempoTranscurrido} milisegundos.`);



// console.time("fibonacci js en");
// testFibonacci(1000);
// console.timeEnd("fibonacci js en");


// function abc(){
//   console.log('Other instance fn -------')
// }

