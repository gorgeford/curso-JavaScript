//Suma de diferencias en matriz
//Su tarea es sumar las diferencias entre pares consecutivos en la matriz en orden descendente.

//Ejemplo
//[2, 1, 10]  -->  9
//En orden descendente:[10, 2, 1]

//Suma:(10 - 2) + (2 - 1) = 8 + 1 = 9

//Si la matriz está vacía o la matriz tiene solo un elemento, el resultado debería ser 0( Nothingen Haskell, Noneen Rust).


function sumOfDifferences(arr) {
    return arr
        .sort((a, b) => b - a)
        .reduce((acc, curr, index, array) => {
          const next = array[index + 1];
          if (!isNaN(curr - next)) {
            acc += curr - next;
          }
          return acc;
        }, 0);
    }

    console.log(sumOfDifferences((10-2)+(2-1)));
    
    //otra solucion
    /*
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

function sumOfDifferences(arr) {
  let sorted = arr.sort((a, b) => b - a)
  let sum = 0;
  for (let i = 0; i < sorted.length - 1; i++) {
    sum += (arr[i] - arr[i + 1]);
  }
  return sum;
}
    */



