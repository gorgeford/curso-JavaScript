// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

// Escribir una función que tome un objeto (a) y una cadena (b) como argumento
// Devuelve verdadero si a tiene una propiedad con clave b
// Devuelve falso en caso contrario

function myFunction(a, b){

 let proto = a.__proto__ || a.constructor.prototype;
    return (b in a) &&
        (!(b in proto) || proto[b] !== a[b]);
}

console.log(myFunction({a:1,b:2,c:3},'b'));



//otra solucion
/*
function myFunction(a, b) {
   return b in a;
}
*/
