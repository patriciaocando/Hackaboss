'use strict';
let numeroFibo = 12;
function fibonachi(valor) {
  if (valor <= 1) {
    return valor;
  } else if (valor > 1) {
    return fibonachi(valor - 1) + fibonachi(valor - 2);
  }
}

console.log(fibonachi(numeroFibo));

for (let i = 0; i <= numeroFibo; i++) {
  console.log(`el finonachi de ${i} es ${fibonachi(i)}`);
}
