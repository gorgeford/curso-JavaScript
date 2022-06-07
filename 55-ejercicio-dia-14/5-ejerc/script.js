//Cuerdas fibrosas
//escríbeme una función stringyque tome a sizey devuelva a stringde alternando '1s'y '0s'.

//la cadena debe comenzar con un 1.

//una cadena con size6 debería devolver: '101010'.

//con size4 debe devolver : '1010'.

///con size12 debe devolver : '101010101010'.

//El tamaño siempre será positivo y solo usará números enteros.

function stringy(size) {
    var str = '';
  
  for (var i = 1; i <= size; i++) {
    str = str + i%2
    }
   return str;
}

console.log(stringy('1','0'));




//otras solucion 
/*
const stringy = size => "10".repeat(size).slice(0,size);

function stringy(size) {
  return new Array(size).join('10').substr(0,size)   
}

*/



