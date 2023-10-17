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
        
        for (let i = 0; i < maxIterador; i++) {
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



    }

}

const leakArray = [];
const tamanhoArray = 10000;
const maxIterador = 10000;
var temporizador = 500;

const leakFactory = new LeakFactory();

//TODO: Chamar 
setInterval(() => {
    leakFactory.PopulaArrayComObjetoGordo();
    console.log('Tamanho da array: ' + leakArray.length);
    //TODO: Como parar um interval?

    //TODO: Chamar RepopulaArrayComObjetoThin 

    //Verifica o comportamento do uso de memória com a substituição do inicio do leakArray por novos objetos do tipo
    //LeakThin()
    console.log('Memoria alocada:', process.memoryUsage().heapUsed / 1024 / 1024, 'MB');

}, temporizador);
