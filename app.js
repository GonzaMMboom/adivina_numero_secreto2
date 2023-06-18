

const readlineSync = require('readline-sync');
const { generarNumeroAleatorio, resultadoNumero } = require('./adivinanza');

const pedirNumero = () => {
  return readlineSync.question('INGRESA UN NUMERO: ');
};

const juegoAdivinanza = () => {
  const numeroReal = generarNumeroAleatorio();
  let numeroPedido = 0;

  console.log('JUEGO DE LA ADIVINANZA');
  console.log('ADIVINA UN NUMERO ENTRE 1 Y 100');

  while (numeroPedido !== numeroReal) {
    numeroPedido = parseInt(pedirNumero());
    resultadoNumero(numeroReal, numeroPedido);
  }
};

juegoAdivinanza();
