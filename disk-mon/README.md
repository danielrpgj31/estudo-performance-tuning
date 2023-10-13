# Criacao de VM Virtualbox com diferentes controladoras de disco

## Monitoramento de disco com nmon

Criar relatório para análise de desempenho, especifica-se 15 minutos entre as capturas instantâneas (900 segundos) durante 24 horas (96 capturas instantâneas). Por exemplo, emita o seguinte comando:

```bash
$ nmon -f -s 900 -c 96
```

## Referencias

https://www.ibm.com/docs/pt-br/spectrum-protect/8.1.15?topic=tools-using-nmon-command
