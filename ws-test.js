setTimeout(function() {
        run();
      }, 5000);

      import init, { fibonacci } from './pkg/fibonacci_ws.js';

      
        async function run() {
              await init();

              function testFibonacci(n) {
                  for (let i = 0; i < n; i++) {
                      fibonacci(10)
                  }
              }

              console.time("fibonacci ws en");
              testFibonacci(1000);
              console.timeEnd("fibonacci ws en");

          }
      