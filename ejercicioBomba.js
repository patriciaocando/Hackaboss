'use strict';
let numeroAleatoreo = Math.round(Math.random() * 10);

function desactivarBomba(contrasena) {
  for (let i = 0; i < 5; i++) {
    let intento = +prompt('Intruduzca el codigo de desactivacion');
    if (intento === contrasena) {
      console.log(`has desactivado la bomba, el codigo era ${numeroAleatoreo}`);
      return true;
    }
  }
  console.log(`ha estallado`);
}

desactivarBomba(numeroAleatoreo);
