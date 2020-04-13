'use strict';

let input = [5, 150, 15, 110, 25];

function aritmethic(value) {
  let difference = 0;
  let count = 0;
  for (let i = 0; i < value.length - 1; i++) {
    difference = value[i + 1] - value[i];

    if (difference === value[0]) {
      count++;
    } else {
      return false;
    }
  }
  if (count === value.length - 1) {
    return true;
  }
  return false;
}

let getAritmethic = aritmethic(input);
console.log(getAritmethic);

function geometric(value) {
  let multypliyer = 0;
  let count = 0;

  for (let i = 0; i < value.length - 1; i++) {
    multypliyer = value[i + 1] / value[i];
    if (value[i + 1] % multypliyer === 0) {
      count++;
    } else {
      return false;
    }
  }
  if (count === value.length - 1) {
    return true;
  }
}

let getGeomethic = geometric(input);
console.log(getGeomethic);

function ArithGeoII() {
  if (getAritmethic) {
    return 'Is Arithmetic';
  } else if (getGeomethic) {
    return 'Is Geometric';
  } else {
    return -1;
  }
}

let total = ArithGeoII();
console.log(total);
