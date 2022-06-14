// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

// Escribir una función que tenga una cadena (a) como argumento
// Crear un objeto que tenga una propiedad con clave 'clave' y un valor de a
// Devolver el objeto

function myFunction(a){

return Object.assign({key:a});

}

console.log(myFunction('a'));



//otra solucion

//return {key:a};
