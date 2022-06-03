/*secuencia inversa
Cree una función que devuelva una matriz de enteros de n a 1 donde n>0.

Ejemplo : n=5-->[5,4,3,2,1]
*/

const reverseSeq = n => {
    let array = [];
   
   for (let i = n; i > 0; i--) {
      array.push(i);
   } return array ;
   };

console.log(reverseSeq(10));


//otras soluciones
/*
const reverseSeq = length => Array.from({length}, () => length--)

const reverseSeq = n => {
  return Array.from({length:n},(_,i)=>n-i);
};
*/