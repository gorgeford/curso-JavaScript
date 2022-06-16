// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

// Escribir una función que tome una matriz de objetos como argumento
// Ordenar la matriz por propiedad b en orden ascendente
// Devuelve la matriz ordenada

function myFunction(arr){

 let sortArr = arr.sort((a, b) => {
    if (a.a > b.b) {
      return 1;
    }
    if (a.a < b.b) {
      return -1;
    }
  });
  return sortArr;
}

console.log(myFunction([{a:1,b:2},{a:5,b:4}]));



//otra solucion
/*
function myFunction(arr) {
   const sort = (x, y) => x.b - y.b;
   return arr.sort(sort);
}

*/
