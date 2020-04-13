'use strict';

/* EJERCICIO: Have the function Division(num1, num2) take both parameters being passed and return the Greatest Common Factor.
 *That is, return the greatest number that evenly goes into both numbers with no remainder.
 *For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4.
 */

function divisores(num) {
  let divisoresNum = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      divisoresNum.push(i);
    }
  }
  return divisoresNum;
}

function maxComunDivisor(num1, num2) {
  let div1 = divisores(num1);
  let div2 = divisores(num2);
  console.log(div1);
  console.log(div2);

  for (let i = div1.length - 1; i >= 0; i--) {
    for (let j = 0; j < div2.length; j++) {
      if (div1[i] === div2[j]) {
        return div1[i];
      }
    }
  }
}
let result = maxComunDivisor(1, 1);
console.log(result);
