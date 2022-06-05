//Carácter doble
//Dada una cadena, debe devolver una cadena en la que cada carácter (sensible a mayúsculas y minúsculas) se repite una vez.
/*
Ejemplos (Entrada -> Salida):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/
function doubleChar(str) {
 
    return str.replace(/./g, c => c+c);
    
  }

  console.log(doubleChar("string"));


  //otras solucion
  /*
const doubleChar = (str) => str.split("").map(c => c + c).join("");

function doubleChar(str) {
  return str.split("").map(function (c) {
    return c + c;
  }).join("");
}
  */
