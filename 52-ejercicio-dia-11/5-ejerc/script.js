// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

//Escriba una función que tome una matriz de cadenas como argumento
// Agrupa esas cadenas por su primera letra
// Devuelve un objeto que contiene propiedades con claves que representan las primeras letras
// Los valores deben ser matrices de cadenas que contengan solo las cadenas correspondientes
// Por ejemplo, la matriz ['Alf', 'Alice', 'Ben'] debe transformarse en
// { a: ['Alfa', 'Alicia'], b: ['Ben']}

function myFunction(arr){

    let obj = {};
 arr.forEach(e => obj[e[0].toLowerCase()] = arr.filter(ele => ele[0].toLowerCase() == e[0].toLowerCase()));
 return obj;

}

console.log(myFunction(['Berlin', 'Paris', 'Prague']));


//otras soluciones

/*function myFunction(arr) {
 return arr.reduce((acc, cur) => {
   const firstLetter = cur.toLowerCase().charAt(0);
   return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
 }, {});
}
*/
