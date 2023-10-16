class Leak {

    data = [];

    MemoryLeak() {
        
        for (let i = 0; i < maxIterador; i++) {
          this.data.push(new Array(tamanhoArray).join('x'));
        }
      
        console.log('Memoria alocada:', process.memoryUsage().heapUsed / 1024 / 1024, 'MB');
    }
}

class LeakFactory {
    
    BoomMemory() {
        let leak = new Leak();
        leak.MemoryLeak();
        leakArray.push(leak);
    }

}

const leakArray = [];
const tamanhoArray = 10000;
const maxIterador = 10000;
var temporizador = 500;

const leakFactory = new LeakFactory();

setInterval(() => {
    leakFactory.BoomMemory();
    console.log('Tamanho da array: ' + leakArray.length);
}, temporizador);
