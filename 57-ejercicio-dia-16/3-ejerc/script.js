//Encuentra valores máximos y mínimos de una lista

//Su tarea es hacer dos funciones ( maxy min, o maximumy minimum, etc., dependiendo del idioma) que reciban una lista de enteros como entrada y devuelvan, respectivamente, el número más grande y más bajo en esa lista.

//Ejemplos (Entrada -> Salida)
//* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
//* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
//* [42, 54, 65, 87, 0]             -> min = 0, max = 87
//* [5]                             -> min = 5, max = 5

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);


console.log(min([4,6,2,1,9,63,-134,566]));

console.log(max([4,6,2,1,9,63,-134,566]));



//otras solucion

/*
var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}

var min = function(list){
    return Math.min(...list)
}

var max = function(list){
    
    return Math.max(...list)
}

*/




