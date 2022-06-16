//multiplicación sencilla
//Este kata consiste en multiplicar un número dado por ocho si es un número par y por nueve en caso contrario.

function simpleMultiplication(number) {

    return  number * (number % 2 > 0 ? 9 : 8)

}

console.log(simpleMultiplication(8));


//otra solucion
/*
const simpleMultiplication = number =>
  (8 + number % 2) * number;

  function simpleMultiplication(value){
    
    if(value%2===0 ){
     return value *8
    }
    else{
    return value* 9;
    }    
}

*/