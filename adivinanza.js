
const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
  };
  
  const resultadoNumero = (numeroReal, numeroPedido) => {
    if (numeroPedido === numeroReal) {
      console.log('¡ACERTASTE, FELICIDADES!');
    } else if (numeroPedido > numeroReal) {
      console.log('EL NÚMERO DE LA ADIVINANZA ES MÁS CHICO');
    } else {
      console.log('EL NÚMERO DE LA ADIVINANZA ES MÁS GRANDE');
    }
  };
  
  module.exports = {
    generarNumeroAleatorio,
    resultadoNumero
  };
  