/**
 * @description
 * 
 */
class LeakFat {

    data = [];

    MemoryLeak() {
        
        for (let i = 0; i < maxIterador; i++) {
          this.data.push(new Array(tamanhoArray).join('x'));
        }
    }
}

/**
 * @description
*/
class LeakThin {

    data = [];

    MemoryLeak() {
        
        for (let i = 0; i < 2; i++) {
          this.data.push(new Array(1).join('x'));
        }
    }
}

class LeakFactory {
    
    PopulaArrayComObjetoGordo() {
        let leak = new LeakFat();
        leak.MemoryLeak();
        leakArray.push(leak);
    }

    RepopulaArrayComObjetoMagro() {

        //TODO: Percorrer 50% do array LeakArray e substituir por objetos do tipo LeakThin()
        for(let i = 0; i < (leakArray.length/2); i++) {
            let leak = new LeakThin();
            leak.MemoryLeak();
            leakArray[i] = leak;
        }

    }

}

const leakArray = [];
const tamanhoArray = 10000;
const maxIterador = 10000;
var temporizador = 500;

const leakFactory = new LeakFactory();

meuInterval = setInterval(() => {

    leakFactory.PopulaArrayComObjetoGordo();
    console.log('Tamanho da array: ' + leakArray.length);
    console.log('Memoria alocada:', process.memoryUsage().heapUsed / 1024 / 1024, 'MB');

}, temporizador);

setTimeout(() => {

    //Verifica o comportamento do uso de memória com a substituição do inicio do leakArray por novos objetos do tipo
    //LeakThin()

    leakFactory.RepopulaArrayComObjetoMagro();

    console.log('Parada do Interval. Memoria alocada total:', process.memoryUsage().heapUsed / 1024 / 1024, 'MB');
    clearInterval(meuInterval);

    meuInterval2 = setInterval(() => {

        console.log('Tamanho da array: ' + leakArray.length);
        console.log('Memoria alocada:', process.memoryUsage().heapUsed / 1024 / 1024, 'MB');
    
    }, temporizador);
    

}, 60000)

