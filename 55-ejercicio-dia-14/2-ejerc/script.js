//Devolver Negativo
//En esta sencilla tarea se te da un número y tienes que hacerlo negativo. ¿Pero tal vez el número ya es negativo?

//Ejemplos
//makeNegative(1);    // return -1
//makeNegative(-5);   // return -5
//makeNegative(0);    // return 0
//makeNegative(0.12); // return -0.12
//notas
//El número ya puede ser negativo, en cuyo caso no se requiere ningún cambio.
//El cero (0) no se comprueba para ningún signo específico. Los ceros negativos no tienen sentido matemático.

function makeNegative(num) {
    return num > 0 ? num * -1 : num;
 }


console.log(makeNegative(5));




//otras solucion 
/*
function makeNegative(num) {
  return -Math.abs(num);
}

function makeNegative(num) {
  if ( num > 0 ) {
        return -num;
    }
    else {
        return num;
    }
}

function makeNegative(num) {
  return Math.abs(num) * -1;
}
*/



