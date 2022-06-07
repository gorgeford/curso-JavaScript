//Recuento de positivos / suma de negativos
//Dada una matriz de enteros.

//Devuelve una matriz, donde el primer elemento es el recuento de números positivos y el segundo elemento es la suma de números negativos. 0 no es ni positivo ni negativo.

//Si la entrada es una matriz vacía o es nula, devuelve una matriz vacía.

//Ejemplo
//Para la entrada [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], debe volver [10, -65].

function countPositivesSumNegatives(input) {
    if (!input || !input.length) return []

  let pos = input.filter(x => x > 0),
      neg = input.filter(x => x <= 0)

  return [pos.length, Math.floor(neg.reduce((s,v)=>s+v,0))]
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));


//otras solucion
/*
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}

function countPositivesSumNegatives(input) {
  return input && input.length ? input.reduce(function(p, c, i, s){
    c <= 0 ? p[1] += c : p[0] += 1;
    return p;
  }, [0, 0]) : [];
}

const countPositivesSumNegatives = input =>
  !(input && input.length) ? [] :
    [input.filter(val => val > 0).length, input.filter(val => val < 0).reduce((pre, val) => pre + val, 0)];
*/










