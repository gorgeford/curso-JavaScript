//pilares
//Hay pilares cerca de la carretera. La distancia entre los pilares es la misma y el ancho de los pilares es el mismo. Su función acepta tres argumentos:

//número de pilares (≥ 1);
//distancia entre pilares (10 - 30 metros);
//ancho del pilar (10 - 50 centímetros).
//Calcular la distancia entre el primer y último pilar en centímetros (sin el ancho del primer y último pilar).

function pillars(num_pill, dist, width) {
    return num_pill == 1  ? 0 : ((num_pill-2)*width) + ((100*dist)*(num_pill-1)) 
  }

console.log(pillars(11,15,30));


//otras solucion
/*
const pillars = (n, d, w) => Math.max(0, n - 1) * (d * 100) + Math.max(0, n - 2) * w; 


function pillars(num_pill, dist, width) {
    if (num_pill === 1) {
        return 0;
    }else{
        let distance = dist * ((num_pill -1) * 100 );
        let pillars = num_pill - 2;
        return distance + (width * pillars);
    }  
}

*/


