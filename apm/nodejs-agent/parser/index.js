const fs = require('fs');

// Defina as posições de início e tamanho de cada coluna
const colunas = [
  { nome: 'gc-type', inicio: 31, tamanho: 9 },
  { nome: 'size1-heap', inicio: 40, tamanho: 6 },
  { nome: 'size2-heap', inicio: 57, tamanho: 6 },
  { nome: 'gc-time', inicio: 57, tamanho: 6 },
];

// Função para analisar uma linha de texto com base nas posições definidas
function parseLinha(linha) {
  const dados = {};
  colunas.forEach((coluna) => {
    const valor = linha.substr(coluna.inicio, coluna.tamanho).trim();
    dados[coluna.nome] = valor;
  });
  return dados;
}

// Ler o arquivo de texto linha por linha

function ParserFile(){

  const arquivo = 'dados.txt';
  const linhas = fs.readFileSync(arquivo, 'utf-8').split('\n');
  
  linhas.forEach((linha) => {
      if (linha.trim() !== '') {
        const dados = parseLinha(linha);
        console.log('Nome:', dados.nome);
        console.log('Sobrenome:', dados.sobrenome);
        console.log('Idade:', dados.idade);
        console.log('---');
      }
    });

}

module.exports = ParserFile;