//Convertir número a matriz invertida de dígitos
//Dado un número aleatorio no negativo, debe devolver los dígitos de este número dentro de una matriz //en orden inverso.

//Ejemplo:
//348597 => [7,9,5,8,4,3]
//0 => [0]

function digitize(n) {
    let initialArray = (""+n).split('');
   let reversedArray = [];
   for (let i = initialArray.length - 1; i >= 0; i--) {
     reversedArray[i] = parseInt(initialArray.shift(),10);
   }
   return reversedArray;
 }

 console.log(digitize(348597));


 //otras soluciones

 //return String(n).split('').map(Number).reverse()
 //return n === 0 ? [] : [ n % 10, ...digitize(Math.trunc(n / 10)) ]