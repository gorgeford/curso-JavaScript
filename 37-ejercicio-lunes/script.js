
//hacer una funcion que reciba como parametro 2 numeros
//comprueba si el primer número es divisible por el segundo,
//es decir que la división no de un número decimal, si la division es correcta debe retornar
//el siguente mensaje "La division entre A y B es N y es un numero Entero. Operación exitosa" 
//de lo contrario debe retornar "La division entre A y B es N y es un numero decimal, operación fallida"

let a = prompt('Introdusca el primer valor')
let b = prompt('Introdusca el segundo valor')

valor1 = Number.parseInt(a)
valor2 = Number.parseInt(b)

function dividir(valor1,valor2){
    n = valor1 / valor2  
    if(n % 1 == 0 ){
       result = 'La division entre '+valor1+' y '+valor2+' es '+n+' y es un numero Entero. Operación exitosa'
    }else{
        result = 'La division entre '+valor1+' y '+valor2+' es '+n+' y es un numero decimal, operación fallida' 
    }
    return result 
 
}

console.log(dividir(valor1,valor2));
