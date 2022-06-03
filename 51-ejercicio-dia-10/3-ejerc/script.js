//Eliminación de elementos
/*
Tome una matriz y elimine cada segundo elemento de la matriz. Mantenga siempre el primer elemento y comience a eliminar con el siguiente elemento.

Ejemplo:

["Conservar", "Eliminar", "Conservar", "Eliminar", "Conservar", ...] --> ["Conservar", "Conservar", "Conservar", ...]

Ninguna de las matrices estará vacía, ¡así que no tienes que preocuparte por eso!
*/

function removeEveryOther(arr){

    return arr.filter((_, idx) => idx % 2 === 0);
  }

let input = ["Conservar", "Eliminar", "Conservar", "Eliminar", "Conservar",];


console.log(input);









//otras soluciones

/*unction removeEveryOther(arr){
  var newArr=[];
for (var i = 0; i < arr.length; i+=2){
  newArr.push(arr[i]);
  }
return newArr;
} */

/*function removeEveryOther(arr){
  //your code here
  for (var i = 1; i < arr.length;i++){
      arr.splice(i,1);
  }
  return arr;
} */