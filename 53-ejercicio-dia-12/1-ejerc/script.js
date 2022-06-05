// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

// Escribe una función que tome dos arreglos (a y b) como argumentos
// Crear un objeto que tenga propiedades con claves 'a' y valores correspondientes 'b'
// Devolver el objeto

function myFunction(a, b){

    return Object.assign.apply({}, a.map( (v, i) => ( {[v]: b[i]} ) ) );
}

console.log(myFunction(['a','b','c'],[1,2,3]));



//otra solucion
/*
function myFunction(a, b) {
    return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
 }
*/
