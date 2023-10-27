const express = require("express");
const MonitorGC = require("./diagnostics/gc");

const callbackMemoryLeak = () => {
  for (let i = 0; i < maxIterador; i++) {
    data.push(new Array(tamanhoArray).join("x"));
  }
  //console.log('Memoria alocada:', process.memoryUsage().heapUsed / 1024 / 1024, 'MB');

  //todo: trocar para estrutura de classe para trabalhar com liberação de ponteiro
  //e analisar uso do GC
  //data = [];
};

const memoryLeak = () => {
  //Controle de uso da CPU a partir do controle do tempo para trabalho de join join e cópia da matriz (x)
  setInterval(callbackMemoryLeak, temporizador);
};

const StartServer = async () => {
  const app = express();
  app
    .listen(8001, () => {
      console.log(`listening to port 8001`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit();
    });

  app.get("/geti", (req, res) => {
    return res.status(200).json({ msg: "/geti : I am Customer Service" });
  });
};

//Work 1 - Eventloop latency => 80.000,00 ms
//var tamanhoArray = 1000000;
//var maxIterador = 10000;
//var temporizador = 1000;

//Work 2 - EventLoop latency => 0.21ms
//var tamanhoArray = 1000;
//var maxIterador = 10;
//var temporizador = 60000;

//Teste 3
var tamanhoArray = 10000;
var maxIterador = 10000;
var temporizador = 500;
var data = [];

//var monitoramentoGC = new MonitorGC();
//monitoramentoGC.ObserveGC();

memoryLeak();
StartServer();
