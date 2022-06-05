// Write a function that takes an array of strings as argument
// Return the longest string
// Escribir una función que tome una matriz de cadenas como argumento
// Devuelve la cadena más larga

function myFunction(arr){
    
let nuevacade = "";

  arr.forEach(function(word) {
    if(word.length > nuevacade.length) {
      nuevacade = word;
    }
  });
  return nuevacade;
}
console.log(myFunction(['I', 'need', 'candy']));



//otras solucion 
/*
function myFunction( arr ) {
    return arr.reduce((a, b) => a.length <= b.length ? b : a)
    }*/