const express = require('express');
const parserLib = require('./parser')
const promBundle = require('express-prom-bundle');
const promClient = require('prom-client');
const ParserFile = require('./parser');
const metricsMiddleware = promBundle({ includeMethod: true });
const app = express();
const port = 7001;

ParserFile();

app.use(metricsMiddleware);

// Crie uma métrica do tipo "gauge"
const customGauge = new promClient.Gauge({
  name: 'custom_gauge_metric',
  help: 'Métrica do tipo gauge personalizada',
  labelNames: ['label'],
});

// Endpoint para atualizar a métrica do tipo "gauge"
app.get('/update-gauge', (req, res) => {
  const parser = ParserFile;
  const value = Math.random() * 100; // Valor aleatório para o exemplo
  const label = 'example';
  customGauge.set({ label }, value);
    
  parser();

  res.send(`Métrica do tipo "gauge" atualizada: ${value}`);
});

/*
app.listen(port, () => {
  console.log(`Exporter do Prometheus está rodando na porta ${port}`);
});
*/


