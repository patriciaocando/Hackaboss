'use strict';
let matrix = new Array(7);

for (let i = 0; i < matrix.length; i++) {
  matrix[i] = new Array(7).fill(' ');
}

console.log(matrix);

let longitud = matrix.length - 1;
console.log(longitud);

for (let i = 0; i < matrix.length; i++) {
  matrix[i][i] = '*';
  matrix[longitud - i][i] = '*';
}

console.log(matrix);
