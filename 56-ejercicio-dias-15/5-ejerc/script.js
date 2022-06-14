// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

// Escribe una función que tome dos cadenas (a y b) como argumentos
// Crear un objeto que tenga una propiedad con la clave 'a' y un valor de 'b'
// Devolver el objeto

function myFunction(a, b){

return Object.assign({[a]:b});

}


console.log(myFunction('a','b'));



//otra solucion
// return { [a]: b };