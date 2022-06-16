//Cuadrado(n) Suma
//Completa la función de suma de cuadrados para que eleve al cuadrado cada número que se le pasa y luego suma los resultados.

//Por ejemplo, for [1, 2, 2]it should return 9because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    let sum = 0
    
    for(let i = 0; i < numbers.length; i++){
      sum += numbers [i] **2
      
    }
      return sum;
    }

    console.log(squareSum([1,2,2]));





    //otra solucion
/*
function squareSum(numbers){
 return numbers.reduce((sum, n) => sum + Math.pow(n, 2), 0);
}

function squareSum(numbers) {
  return numbers.map(n => n ** 2).reduce((a, b) => a + b, 0);
}



*/


