'use strict';
// Calculate IMC

let peso = '60';

let estatura = '1.60';

function calcularImc(peso, estatura) {
  let imc = 0;
  estatura = estatura.replace(',', '.');

  imc = +peso / (+estatura) ** 2;
  imc = imc.toFixed(1);

  return imc.toString();
}

console.log(calcularImc(peso, estatura));
