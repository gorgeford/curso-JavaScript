// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array
// Escribir una función que tome una matriz (a) y un valor (n) como argumentos
// Guardar cada n-ésimo elemento en una nueva matriz
// Devuelve la nueva matriz

function myFunction(a, n){

  return  a.filter((e, i) => i % n === n - 1);
}

console.log(myFunction([1,2,3,4,5,6,7,8,9,10],3));


//otra solucion
/*
function myFunction(a, n) {
   let rest = [...a];
   let result = [];
   for (let i = 0; i < a.length; i++) {
      if (rest.length < n) break;
      result.push(rest[n - 1]);
      rest = rest.slice(n);
   }
   return result;
}
*/