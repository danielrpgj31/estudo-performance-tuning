const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

if (isMainThread) {
  // Este é o thread principal.
  const numbersToCheck = 1000000;
  const numberOfWorkers = 4;
  const chunkSize = numbersToCheck / numberOfWorkers;

  // Dividindo a carga de trabalho em várias partes para cada worker.
  for (let i = 0; i < numberOfWorkers; i++) {
    const start = i * chunkSize;
    const end =
      i + 1 === numberOfWorkers ? numbersToCheck : (i + 1) * chunkSize;

    // Cria um novo worker para cada parte da carga de trabalho.
    const worker = new Worker(__filename, {
      workerData: { start, end },
    });

    // Recebe mensagens do worker.
    worker.on("message", (message) => {
      console.log(`Worker said: ${message}`);
    });

    // Envia dados para o worker.
    worker.postMessage("Start");
  }
} else {
  // Este é o worker.
  const { start, end } = workerData;
  let primes = [];

  for (let number = start; number < end; number++) {
    if (isPrime(number)) {
      primes.push(number);
    }
  }

  // Envia o resultado de volta para o thread principal.
  parentPort.postMessage(`Primes in range ${start}-${end}: ${primes.length}`);
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}
