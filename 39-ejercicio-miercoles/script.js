/*Escriba una función que sea capaz de invertir un string y convertirlo todo a minúscula, por ejemplo, si se le pasa la cadena 'JoSue' la función debe devolver el string 'eusoj'
*/

let cad = 'JOSUE'

function cadena(cad){

     cadenafinal2 = cad.toLowerCase();

     return cadenafinal2.split("").reverse().join("");
}

console.log(cadena(cad));

