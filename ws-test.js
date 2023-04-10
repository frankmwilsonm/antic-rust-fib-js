setTimeout(function() {
        run();
      }, 3000);

      import init, { fibonacci } from './pkg/fibonacci_ws.js';

      var ttt;
      
        async function run() {
              await init();

              function testFibonacci(n) {
                  for (let i = 0; i < n; i++) {
                      fibonacci(10)
                  }
              }

              const t0 = performance.now();
              testFibonacci(1000);
              const t1 = performance.now();

              const WSms = t1 - t0;

              ttt = WSms;

              console.log(`WASM en ${WSms} ms`);

              sendBenchFib()
          }

function sendBenchFib(){

  console.log("=========================")
  console.log("=========================")


console.log("Algorit: Fib ")


console.log("Platform: "+navigator.platform)


var userAgent = navigator.userAgent;

// Encontrar el dispositivo
var device = "Dispositivo Desconocido";
if (userAgent.match(/iPhone/i)) device = "iPhone";
if (userAgent.match(/iPad/i)) device = "iPad";
if (userAgent.match(/Android/i)) device = "Android";
if (userAgent.match(/Windows Phone/i)) device = "Windows Phone";
if (userAgent.match(/Win64/i)) device = "Win";
if (userAgent.match(/Win32/i)) device = "Win";

console.log("Device: " + device);




// Encontrar el sistema operativo


// Encontrar el sistema operativo
var os = "OS Desconocido";
if (userAgent.indexOf("Win") != -1) os = "Windows";
if (userAgent.indexOf("Mac") != -1) os = "MacOS";
if (userAgent.indexOf("X11") != -1) os = "UNIX";
if (userAgent.indexOf("Linux") != -1) os = "Linux";

console.log("OS: " + os);





var browserName;

// Identificar el navegador
if (userAgent.indexOf("Firefox") > -1) {
    browserName = "Mozilla Firefox";
} else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR/") > -1) {
    browserName = "Opera";
} else if (userAgent.indexOf("Trident") > -1) {
    browserName = "Microsoft Internet Explorer";
} else if (userAgent.indexOf("Edge") > -1) {
    browserName = "Microsoft Edge";
} else if (userAgent.indexOf("Chrome") > -1) {
    browserName = "Google Chrome";
} else if (userAgent.indexOf("Safari") > -1) {
    browserName = "Apple Safari";
} else {
    browserName = "Desconocido";
}

console.log("Browser: " + browserName);



console.log("wsTM "+ttt)

console.log("jsTM "+JSms)


//Data

let ts_algor = "fibonacci";
let ts_platform = navigator.platform;
let ts_device = device;
let ts_os = os;
let ts_browser = browserName;
let ts_wsTM = Number(ttt);
let ts_jsTM = Number(JSms);

// Send
fetch(`https://maker.ifttt.com/trigger/data-wasm-v1-uc8/with/key/d47g5fZHaqzGu_0dEX-kcW?value1=${ts_algor},${ts_platform},${ts_device},${ts_os},${ts_browser},${ts_jsTM},${ts_wsTM}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))

}

