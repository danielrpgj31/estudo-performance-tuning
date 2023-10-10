const { monitorEventLoopDelay } = require('node:perf_hooks');


function fib(n) {
    if(n<=0) return 0;
    if(n<=1) return 1;
    if(n<=2) return 2;

    return fib(n-1) + fib(n-2);
}

function asyncFunctionWithoutAwait() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Sucesso!');
      }, 9000); // Simula uma operação assíncrona que leva 2 segundos
    });
}


async function main() {


    const h = monitorEventLoopDelay({ 
        resolution: 10
    });

    h.enable();

    console.log('Início da função principal');
  
    const result = await asyncFunctionWithoutAwait();
  
    console.log('Resultado da função assíncrona:', result);
  
    console.log('Fim da função principal');

    h.disable();

    console.log('h.min: '+h.min);
    console.log(h.max);
    console.log(h.percentile(50));
    console.log(h.percentile(99)); 

}

main();




