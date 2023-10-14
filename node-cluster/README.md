# App node http em Cluster/Multiplas instâncias (listeners http multiplos)

Para criar mais de uma instância de uma aplicação Node.js, você pode usar o módulo cluster embutido do Node.js. O módulo cluster permite que você crie múltiplos processos filhos que compartilham a mesma porta e o mesmo servidor, distribuindo as solicitações entre esses processos para lidar com a concorrência e o aumento de carga. Cada processo filho executa sua própria instância da aplicação.

## Avaliar 

a. custo de memória multiplos listeners http (qual limite?) em um container
b. custo de memória um listenr por container, multiplos containers
