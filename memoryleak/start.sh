#!/bin/bash

# Obter a data e hora atual
current_datetime=$(date +"%Y%m%d_%H%M%S")

# Caminho para o arquivo Node.js que você deseja executar
node_script="./src/leak.js"

# Nome do arquivo de log com data e hora
log_file="./trace/${current_datetime}_trace-gc.out"

# Verifique se o arquivo Node.js existe
if [ -f "$node_script" ]; then
    # Execute o arquivo Node.js e redirecione a saída para o arquivo de log
    echo "Script leak.js executando e log gerado em $log_file..."
    node --trace-gc-nvp "$node_script" > "$log_file" 2>&1
else
    echo "Arquivo Node.js não encontrado: $node_script"
fi
