// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

// Escribir una función que tome un objeto como argumento
// Debería devolver un objeto con todas las propiedades del objeto original
// excepto por la propiedad con clave 'b'

function myFunction(obj){

return (({ b, ...o }) => o)(obj)

}


console.log(myFunction({ a: 1, b: 7, c: 3 }));



//otra solucion
/*
function myFunction(obj) {
  const { b, ...rest } = obj;
  return rest;
}
*/