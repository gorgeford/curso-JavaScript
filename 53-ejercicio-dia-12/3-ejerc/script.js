// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

// Escribir una función que tome una matriz de números como argumento
// Convierte la matriz en un objeto
// Debe tener una clave para cada valor único de la matriz
// El valor del objeto correspondiente debe ser el número de veces que aparece la clave dentro de la matriz

function myFunction(a){

return a.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})

}

console.log(myFunction([1,2,2,3]));


//otra solucion
/*
function myFunction(a) {
   return a.reduce((acc, cur) => {
   	return { ...acc, [cur]: (acc[cur] || 0) + 1 };
   }, {});
}
*/
