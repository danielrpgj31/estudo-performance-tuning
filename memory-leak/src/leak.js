function preencheMatriz = (data) => {
  for (let i = 0; i < 10000; i++) {
    data.push(new Array(1000000).join('x'));
  }
  console.log('Memoria alocada:', process.memoryUsage().heapUsed / 1024 / 1024, 'MB');
}
const memoryLeak = () => {
  const data = [];
  setInterval(() => {
    preencheMatriz(data);
  }, 1000);
};

memoryLeak();