//binario falso
//Dada una cadena de dígitos, debe reemplazar cualquier dígito debajo de 5 con '0' y cualquier dígito 5 y superior con '1'. Devuelve la cadena resultante.

//Nota: la entrada nunca será una cadena vacía

function fakeBin(x){

    return ("" + x).replace(/[0-4]/g,'0').replace(/[5-9]/g,'1');
     
    }

    console.log(fakeBin(357));


    //otras solucion
    /*
    function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
    }

    function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
    }

    function fakeBin(x){
  let result = '';
  for(let i = 0; i < x.length; i++){
    x[i] < 5 ? result += 0 : result += 1;
  }
  return result;
}
    */