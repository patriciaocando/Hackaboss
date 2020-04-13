"use strict";

const patients = [true, false, true, false, false, false, true, true];

function infected(patients) {
  let copiaPatients = [...patients]; //se clona el array original

  for (let i = 0; i < patients.length; i++) {
    //ser recorre el array hasta la longitud del mismo
    if (patients[i]) {
      //si el paciente de este momento esta enfermo
      if (i - 1 > 0) {
        //y si el paciente de su derecha es mayo a cero
        copiaPatients[i - 1] = true; //entonces el paciente de la derecha ambiene esta enfermo
      }
      if (i + 1 < patients.length) {
        //si el paciente de la izquierda es menor que el final del array
        copiaPatients[i + 1] = true; //tambien se enferma
      }
    }
  }
  return copiaPatients;
}

console.log(patients, infected(patients));
