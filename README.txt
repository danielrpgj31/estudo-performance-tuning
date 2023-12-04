1. Avaliação de performance 

    1.1 Engine Bun x V8(NodeJS)
    1.2 CPU com NodeJS 
    1.3 Async
        TODO: Implementar um delay dentro dos metodos assíncronos e executar uma carga grande de chamadas 
        para validar o limite dos pools. 
        a. Event Loop
        b. I/O LIBUV
    1.4 Memory Leak 
    1.5 Microservices
    1.6 Docker 
        a. Avaliar um código que consome carga alta de memória a ponto de estourar o limite disponível. 
           Limite disponível? Maquina host ou Docker? Como ajustar, como monitorar proativamente. 
        b. Avaliar um código nodejs que tenha alto consumo de CPU. Avaliar impactos no Docker e Host. 
           Como monitorar e detectar os impactos. 
    

2. Ferramentas Open Source APM 

    2.1 TODO: APM 
        Implementar monitoramento de docker, docker swarm e nodejs 
        Analisar CPU do Host x CPU do container (nodejs), consumo de memória do NodeJS x container Docker 
        
    2.2 Node.js Inspector: Esta é uma ferramenta de depuração integrada ao Node.js que permite rastrear o desempenho de sua aplicação e identificar problemas de desempenho. Embora não seja um APM completo, é útil para depurar problemas específicos em seu código Node.js.

        import { loadavg } from 'node:os'
        import { cpuUsage, memoryUsage, pid, ppid, platform, uptime, version } from 'node:process'
        import { monitorEventLoopDelay, PerformanceObserver } from 'node:perf_hooks'
        import { getHeapStatistics } from 'node:v8'    
		
		https://github.com/danielrpgj31/pm2.git

    2.3 Prometheus: O Prometheus é uma ferramenta open-source de monitoramento e alerta que é amplamente utilizada para monitorar aplicações Node.js. Você pode usar bibliotecas como o prom-client para instrumentar suas aplicações Node.js e coletar métricas para análise posterior.

        https://prometheus.io/docs/prometheus/latest/installation/

    2.4 Grafana: O Grafana é uma plataforma open-source de visualização e observabilidade que pode ser usada em conjunto com o Prometheus para criar painéis de monitoramento personalizados para suas aplicações Node.js.
    
    2.5 Elastic APM: O Elastic APM é parte do ecossistema Elastic (anteriormente conhecido como ELK Stack) e 
    oferece monitoramento de desempenho para aplicações Node.js. Existem bibliotecas de agentes Elastic APM disponíveis para Node.js que permitem a coleta de métricas e rastreamento de transações.

    2.6 Zipkin: O Zipkin é uma ferramenta open-source de rastreamento distribuído que pode ser usada para monitorar aplicações Node.js que operam em ambientes distribuídos.

    2.7 Jaeger: O Jaeger é outra ferramenta open-source de rastreamento distribuído que é adequada para monitorar aplicações Node.js em ambientes distribuídos.


Rastreabilidade

    Cluster K8S
    Istio + sidecars em todos os pods

    Avaliações:
        Utilizar apps node express, expondo api rest para as integrações entre serviços.
        Utilizar apis com diferentes tempos de execução, para melhor apresentação no tracker analisado.
        Fazer milhares de chamadas, e acompanhar no Istio, para entender como ele apresentará o tempo de cada
        etapa das integrações. 

        Avaliar conexao passando por um tunnel ssh forward.

