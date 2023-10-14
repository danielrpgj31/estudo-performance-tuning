const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // O processo mestre cria os processos filhos
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Gerenciamento de eventos para processos filhos
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Processo filho ${worker.process.pid} morreu`);
  });
} else {
  // Cada processo filho executa a instância da aplicação
  const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello, World!\n');
  });

  server.listen(8000);

  console.log(`Processo filho ${process.pid} está ouvindo na porta 8000`);
}
