//Bin a decimal
//Complete la función que convierte un número binario (dado como una cadena) en un número decimal.

function binToDec(bin){
    return bin.split('').reverse().reduce(function(x, y, i){
         return (y === '1') ? x + Math.pow(2, i) : x;
       }, 0)
   }

   console.log(binToDec(1101000, 2, 10));


   //otras solucion
   /*
function binToDec(bin){
  return parseInt(bin,2);
}

function binToDec(bin){
  return bin.split('')
    .reverse()
      .map((x,i)=>x==1?Math.pow(2,i):0)
        .reduce((a,b)=>a+b,0);
}
   */
















