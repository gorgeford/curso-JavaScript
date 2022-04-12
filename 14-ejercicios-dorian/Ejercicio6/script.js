/*
6 - Escriba un programa que permita ir introducciendo una serie indeterminada de numeros mientras su suma no supere 50. cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos numeros se han introducido
*/

let suma=0
let cont=0

while(suma<=50){
    suma += parseInt(prompt('Introduce un numero para añadir a la suma'))
    cont++
}

console.log(`la suma total es de: ${suma}`);
console.log(`El total de numeros introducidos es: ${cont}`);
