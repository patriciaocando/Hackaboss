'use strict';

function LetterCapitalize(str) {
  let strarray = str.split('');
  let newstr = [...str.toUpperCase()];
  let frase = '';

  for (let i = 0; i < strarray.length; i++) {
    if (i === 0) {
      strarray[i] = newstr[i];
    }
    if (strarray[i] === ' ') {
      if (i + 1 < strarray.length - 1) {
        strarray[i + 1] = newstr[i + 1];
      }
    }
    frase += strarray[i];
  }

  return frase;
}

function primeraLetraMayus(valor) {
  let letra = valor.charAt(0).toUpperCase();
  let palabra = valor.slice(1);
  let palabracompleta = '';
  palabracompleta = palabracompleta.concat(letra, palabra);
  return palabracompleta;
}

function fraseConMayus(valor) {
  let strarray = valor.split(' ');
  let nuevaFrase = '';
  const separador = ' ';

  for (let i = 0; i < strarray.length; i++) {
    nuevaFrase += primeraLetraMayus(strarray[i]);
    if (i < strarray.length - 1) {
      nuevaFrase += separador;
    }
  }
  return nuevaFrase;
}

let texto = 'words will be separated by only one space.';

let frasenMayus = fraseConMayus(texto);
console.log(`Metodo string: ${frasenMayus}`);

const upperCase = LetterCapitalize(texto);
console.log(`Metodo array: ${upperCase}`);
