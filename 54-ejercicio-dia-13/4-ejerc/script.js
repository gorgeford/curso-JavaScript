//Plural
//Necesitamos una función simple que determine si se necesita un plural o no. Debe tomar un número y devolver verdadero si se debe usar un plural con ese número o falso si no. Esto sería útil al imprimir una cadena como 5 minutes, 14 appleso 1 sun.

//Solo debe preocuparse por las reglas de la gramática inglesa para este kata, donde todo lo que no es singular (uno de algo), es plural (no uno de algo).

//Todos los valores serán enteros positivos o flotantes, o cero.


function plural(n) {
    return  !(n === 1);
  }

  console.log(plural(0.5));



  //otra solucion
/*
function plural(n) {
  return n === 1 ? false : true;
}

function plural(n) {
    if (n >= 0){
      if (n == 1){
        return false;
      }else{
        return true;
      }
     }
}
*/
