// Write a function that takes an object (a) as argument
// Return an array with all object keys

//Escribe una función que tome un objeto (a) como argumento
// Devolver una matriz con todas las claves de objeto

function myFunction(a){

return  Object.entries(a).map(item => item[0]);

}

console.log(myFunction({a:1,b:2,c:3}));


//otras solucion
/*
function myFunction(a) {
   return Object.keys(a);
}
*/
