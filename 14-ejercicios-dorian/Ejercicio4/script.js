/*
4 - Escribe un programa que pida un numero entero mayor que 1 y que escriba si el numero primo o no.
     un numero primo es aquel que solo es divisible por si mismo y la unidad
*/

let num = parseInt(prompt('Introduce un número'))
let divisores = 0

if (num === 1) console.log(`El número es valido`)
else {

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            console.log(`${num} / ${i} = ${num / i} no es primo`)
            divisores++
            break
        }
    }
}

if(divisores==0) console.log(`${num} es primo`);
