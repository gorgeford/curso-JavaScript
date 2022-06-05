//Convertir una cadena en una matriz
//Escriba una función para dividir una cadena y convertirla en una matriz de palabras.

//Ejemplos (Entrada ==> Salida):
//"Robin Singh" ==> ["Robin", "Singh"]

//"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string){

	// code code code
return  string.trim().split(" ");

}

console.log(stringToArray("I love arrays they are my favorite"));


//otras solucion 
/*
function stringToArray(string){
  return string.split(' ');
}

let stringToArray = string => string.split(' ');
*/