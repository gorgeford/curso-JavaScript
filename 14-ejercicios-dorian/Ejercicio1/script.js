/*
1 - solicita un nombre, la edad y muestra por la consola el mensaje "hola____, tienes _____ años y el año que viene tendras _____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings
*/

let name = prompt('Introduce tu nombre')
let age = parseInt(prompt('introduce tu edad'))

console.log(`Hola ${name} tienes ${age} años y el año que viene tendras ${age+1} años`);



