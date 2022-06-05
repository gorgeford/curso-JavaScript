// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

// Escribir una función que tome argumentos en un número arbitrario de arreglos
// Debería devolver una matriz que contenga los valores de todas las matrices

function myFunction(...arrays){

return arrays.flat();

}

console.log(myFunction([1, 2, 3], [4, 5, 6]));