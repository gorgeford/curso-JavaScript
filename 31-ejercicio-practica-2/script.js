// Escribir una función que tome un número como parametro (a)
// separar (a) en sus dígitos individuales y devolverlos en una array


let number = prompt ('ingresa la sifra una cifra numerica a consultar')

function digitos( number){
    return number.split('');

}
let salida = digitos(number)
console.log( salida);