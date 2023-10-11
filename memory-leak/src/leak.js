const memoryLeak = () => {
  const data = [];
  setInterval(() => {
    for (let i = 0; i < 10000; i++) {
      data.push(new Array(1000000).join('x'));
    }
    console.log('Memória alocada:', process.memoryUsage().heapUsed / 1024 / 1024, 'MB');
  }, 1000);
};

memoryLeak();