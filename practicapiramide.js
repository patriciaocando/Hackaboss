'use strict';

// Piramide -1
/* 
function printFloorNumbers(floors) {
  for (let i = 0; i < floors; i++) {
    console.log(`Piso ${i + 1}`);
  }
}
printFloorNumbers(5);

// Piramide 1 */

function concatenarAptos(size, tipo) {
  let floor = '';
  for (let i = 0; i < size; i++) {
    floor = floor + tipo;
  }
  return floor;
}
concatenarAptos(3);

function hacerPisos(piso) {
  for (let contador = 0; contador < piso; contador++) {
    console.log(concatenarAptos(contador + 1));
  }
}

//hacerPisos(5);

function hacerPisos2(piso) {
  for (let contador = 0; contador < piso; contador++) {
    console.log(concatenarAptos(piso - (contador + 1), ' ') + concatenarAptos(contador + 1, '*'));
  }
}

//hacerPisos2(5);

function hacerPisos3(piso) {
  for (let contador = 0; contador < piso; contador++) {
    console.log(concatenarAptos(piso - contador + 1, ' ') + concatenarAptos(2 * contador + 1, '*'));
  }
}
//hacerPisos3(5);

function hacerPisos4(piso) {
  for (let contador = 0; contador < piso; contador++) {
    console.log(concatenarAptos(piso - contador + 1, ' ') + concatenarAptos(2 * contador + 1, '*'));
  }
}
//hacerPisos4(5);

function hacerInverso(piso) {
  for (let contador = piso - 2; contador >= 0; contador--) {
    console.log(concatenarAptos(piso - contador + 1, ' ') + concatenarAptos(2 * contador + 1, '*'));
  }
}

//hacerInverso(5);

function hacerpiramide4(pisos) {
  hacerPisos4(pisos);
  hacerInverso(pisos);
}
hacerpiramide4(8);
