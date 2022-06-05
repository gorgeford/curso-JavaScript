// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

// Escribir una función que tome un objeto como argumento
// De alguna manera, las propiedades y claves del objeto se mezclaron
// Intercambiar la clave del objeto Javascript con sus valores y devolver el objeto resultante
function myFunction(obj){

return Object.fromEntries(Object.entries(obj).map(a => a.reverse()))

}


console.log(myFunction({z:'a',y:'b',x:'c',w:'d'}));

//otra so;ucion 
/*
function myFunction(obj) {
   return Object.entries(obj).reduce((acc, [key, val]) => {
      return { ...acc, [val]: key };
   }, {});
}
*/
