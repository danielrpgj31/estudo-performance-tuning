function asyncFunctionWithoutAwait() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Sucesso!');
      }, 2000); // Simula uma operação assíncrona que leva 2 segundos
    });
  }
  
  async function main() {
    console.log('Início da função principal');
  
    const result = await asyncFunctionWithoutAwait();
  
    console.log('Resultado da função assíncrona:', result);
  
    console.log('Fim da função principal');
  }
  
  main();
  