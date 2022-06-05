//¿Qué hay entre?
//Complete la función que toma dos enteros ( a, b, where a < b) y devuelva una matriz de todos los enteros entre los parámetros de entrada, incluidos ellos.

//Por ejemplo:

//a = 1
//b = 4
//--> [1, 2, 3, 4]

function between(a, b) {
    return Array
         .apply(null, Array((b - a) + 1))
         .map(function(_, n){ return n + a; })
 }

 console.log(between(1,4));

 //otra solucion 
 /*
 function between(a, b) {
  // your code here
  arr = []
  for(i = a;i <= b; i++){ 
      arr.push(i)
  }
  return arr
}

const between = (a, b) =>
  [...Array(b - a + 1)].map((_, idx) => idx + a);

  function between(a, b) {
  return Array(b - a + 1).fill(1).map((_, i) => a + i)
}
 */
