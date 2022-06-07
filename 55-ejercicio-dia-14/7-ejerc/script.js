//Volteo por gravedad
//Si ya completaste este kata y quieres un desafío mayor, aquí tienes la versión 3D
/*
Bob se aburre durante sus lecciones de física, así que se construyó una caja de juguetes para pasar el tiempo. La caja es especial porque tiene la capacidad de cambiar la gravedad.

Hay algunas columnas de cubos de juguete en la caja dispuestas en línea. La i-ésima columna contiene a_icubos. Al principio, la gravedad en la caja tira de los cubos hacia abajo. Cuando Bob cambia la gravedad, comienza a tirar de todos los cubos hacia un lado determinado de la caja, dque puede ser 'L'o 'R'(izquierda o derecha). A continuación se muestra un ejemplo de cómo se vería una caja de cubos antes y después de cambiar la gravedad.

+---+                                       +---+
|   |                                       |   |
+---+                                       +---+
+---++---+     +---+              +---++---++---+
|   ||   |     |   |   -->        |   ||   ||   |
+---++---+     +---+              +---++---++---+
+---++---++---++---+         +---++---++---++---+
|   ||   ||   ||   |         |   ||   ||   ||   |
+---++---++---++---+         +---++---++---++---+
Dada la configuración inicial de los cubos en la caja, averigüe cuántos cubos hay en cada una de las ncolumnas después de que Bob cambie la gravedad.

Ejemplos (entrada -> salida:
* 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
* 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]
*/

const flip=(d, a)=>{

    return d === "R" ? a.sort(function(x, y){return x-y}) : a.sort(function(x, y){return y-x})
 }

 console.log(flip('R', [3, 2, 1, 2] ));



 //otras solucion
 /*
const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);

const flip=(d, a)=>{
  if(d === 'R') return a.sort((a,b)=>a-b);
  if(d === 'L') return a.sort((a,b)=>b-a);
}

const flip = (direction, arr) => {
    return arr.sort((a, b) => direction === 'R' ? a - b : b - a);
}

 */







