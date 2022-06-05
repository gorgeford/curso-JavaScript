// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

// Escribir una función que tome un objeto como argumento que contenga propiedades con información personal
// Extraer nombre, apellido, tamaño y peso si está disponible
// Si se da tamaño o peso, transforma el valor en una cadena
// Adjunte la unidad cm al tamaño
// Adjunte la unidad kg al peso
// Devuelve un nuevo objeto con todas las propiedades disponibles que nos interesan

function myFunction(obj){

const {fn:fn , ln:ln ,size:s ,weight:w}= obj;
var newObj= {fn:fn , ln:ln};
if (s!==undefined && w!==undefined){
    newObj={fn:fn , ln:ln ,size:s.toString()+'cm' ,weight:w.toString()+'kg'};
}
else if(s===undefined || w===undefined){
    if (s===undefined && w!==undefined){
        newObj={fn:fn , ln:ln ,weight:w.toString()+'kg'};
    }
    else if (s!==undefined && w===undefined) {
        newObj={fn:fn , ln:ln ,size:s.toString()+'cm'};
    }
}
return newObj
}

console.log(myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}));


//otra solucion
/*
function myFunction(obj) {
  return {
    fn: obj.fn,
    ln: obj.ln,
    ...(obj.size && { size: `${obj.size}cm` }),
    ...(obj.weight && { weight: `${obj.weight}kg` }),
  };
}

*/