const preencheMatriz = (data) => {
  
  //Work 1 - Eventloop latency => 80.000,00 ms
  //var tamanhoArray = 1000000;
  //var maxIterador = 10000;

  //Work 2 - EventLoop latency => 0.21ms
  //var tamanhoArray = 1000;
  //var maxIterador = 10;

  //Work 3 - Eventloop latency => 5.000,00ms
  var tamanhoArray = 10000;
  var maxIterador = 10000;

  for (let i = 0; i < maxIterador; i++) {
    data.push(new Array(tamanhoArray).join('x'));
  }

  console.log('Memoria alocada:', process.memoryUsage().heapUsed / 1024 / 1024, 'MB');

}

const memoryLeak = () => {

  const data = [];

  //Work 1 - Consumo rapido de memoria
  //var temporizador = 500;

  //Work 2 - Controle de uso da CPU a partir do controle do tempo para trabalho de join join e cópia da matriz (x)
  var temporizador = 60000;
  
  setInterval(() => {
    preencheMatriz(data);
  }, temporizador);

};

memoryLeak();