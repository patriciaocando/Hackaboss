'use strict';
//Ejercicio deletrear atras
function deletrearAtras(elTextoIngresado) {
  let textoConvertido = '';
  for (let contador = elTextoIngresado.length - 1; contador >= 0; contador--) {
    textoConvertido = textoConvertido + elTextoIngresado[contador];
  }
  return textoConvertido;
}

console.log(deletrearAtras('hola que tal'));

//Ejercicio factorial

function FirstFactorial(num) {
  let factorial = num;
  for (let i = num - 1; i > 0; i--) {
    factorial = factorial * i;
  }
  return factorial;
} 

/**Longest Word Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
*If there are two or more words that are the same length, return the first word from the string with that length.
*Ignore punctuation and assume sen will not be empty.
*/
 function LongestWord(sen) {
  let concatenacion = ' ';
  while (concatenacion < sen.length) {
    console.log(sen.length);
  }
  return sen;
} 

/**Ejercicio Have the function LetterCapitalize(str) take the str parameter
* being passed and capitalize the first letter of each word.
*/ Words will be separated by only one space.

let str = 'hola que tal';
function LetterCapitalize(str) {
  let newStr = str.toUpperCase();

  console.log(newStr);
}

let capitalize = LetterCapitalize(str);
console.log(capitalize);



/**Have the function AlphabetSoup(str) take the str string parameter being passed and return the string
*with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.
*/

let example = 'arriba la birra';

function palindromeTwo(str) {
  let string = str.replace(/ /g, '');
  let palindrome = string.split('');

  let palindromeBack = [...palindrome];
  palindromeBack.reverse();

  for (let i = 0; i < palindrome.length; i++) {
    if (palindrome[i] !== palindromeBack[i]) {
      return false;
    }
  }
  return true;
}
console.log(palindromeTwo(example));
