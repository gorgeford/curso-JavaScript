//hacer una función que reciba un array de numeros enteros y retorne un array donde cada elemento este incrementado en dos 

let numero = [1,2,3,4,5,6]

function sumNunber (numero) {

    for (let i = 0; i< numero.length; i++){
         let valor = numero [i] + 2
         numero [i] = valor
    }
        return numero 
}

console.log(sumNunber(numero));