//Par o impar
//Cree una función que tome un número entero como argumento y devuelva "Par" para números pares o "Impar" para números impares.

function even_or_odd(number) {
    if(number % 2 === 0) {
        return 'Even';
      } else {
        return 'Odd';
      }
  }

  console.log(even_or_odd(7));


  //otras solucion
/*
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}

function even_or_odd(number) {
   return number % 2 === 0 ? 'Even' : 'Odd';
}
*/

