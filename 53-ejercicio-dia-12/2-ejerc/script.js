// Write a function that takes an object (a) as argument
// Return the sum of all object values

// Escribir una función que tome un objeto (a) como argumento
// Devuelve la suma de todos los valores de los objetos

function myFunction(a){

return Object.values(a).reduce((a, b) => a + b);

}

console.log(myFunction({a:1,b:2,c:3}));

//otra solucion
/*
function myFunction(a) {
   return Object.values(a).reduce((sum, cur) => sum + cur, 0);
}
*/