// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max
// Escribe una función que tome dos números (mínimo y máximo) como argumentos
// Devuelve una matriz de números en el rango min a max

function myFunction(min, max){

return  Array.from({length: max-min+1}, (_, i) => i + min);

}

console.log(myFunction(-5,5));





//otras soluciones
/*
function myFunction(min, max) {
    let arr = [];
    for (let i = min; i <= max; i++) {
      arr.push(i);
    }
  return arr;
  }
  */