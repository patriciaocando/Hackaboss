"use strict";

function numeroPrimo(numero) {
  for (let contador = 2; contador < numero; contador++) {
    if (numero % contador === 0) {
      return false;
    }
  }
  return true;
}

console.log(numeroPrimo(7));

function listaGeneral(limit) {
  for (let i = 2; i < limit; i++) {
    if (numeroPrimo(i) === true) {
      console.log(i);
    }
  }
}

listaGeneral(50);
