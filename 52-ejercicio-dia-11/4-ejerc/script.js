// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

//Escriba una función que tome una matriz con elementos arbitrarios y un número como argumentos
// Devuelve una nueva matriz, el primer elemento debe ser el mismo número dado
// o cero si el número es menor que 6
// Los otros elementos deben ser los elementos de la matriz original
// Intenta no mutar la matriz original

function myFunction(arr, num){

const firstElm = num >= 6 ? num : 0;
   let result = [];
   result.push(firstElm);
   for(let i =0; i < arr.length; i++) {
       result.push(arr[i]);
   }
   return result;
}

console.log(myFunction([1,2,3], 6));

//otras solucion
/*
function myFunction(arr, num) {
 return [...(num > 5 ? [num] : [0]), ...arr];
}
*/
