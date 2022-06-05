// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

// Escribir una función que tome una matriz como argumento
// Debería devolver verdadero si todos los elementos de la matriz son iguales
// Debería devolver falso de lo contrario

function myFunction(arr){

return arr.every(val => val === arr[0]);

}

console.log(myFunction([true, true, true, true]))


//otro solucion
/*
function myFunction( arr ) {
  return new Set(arr).size === 1
}
*/