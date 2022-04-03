/*strings*/

let cadena = "Hola Mundo";

/*PROPIEDADES
length -> devuelve la longitud de la cadena */

/*console.log(cadena.length);*/

/*Métodos

todos los métodos devuelven una cadena nueva, la cadena original no sera modificada.

touppercase() -> devuelve la cadena a mayuscula */

/*console.log(cadena.toUpperCase());*/


/* tolowercase() -> devuelve la cadena a minuscula*/

/*console.log(cadena.toLocaleLowerCase());*/

/*indexOf(strin) -> devuelve la podición en la que se encuentra el string, si no lo encuentra devuelve -1 */

/*console.log(cadena.indexOf('o'));
console.log(cadena.indexOf(Hola));*/

/* replace(valor a buscar, valor nuevo) -> remplaza el fragmento de la cadena que le digamos y pone el valor nuevo*/

/*console.log(cadena.replace('Mundo','youtube'));*/

/*substring(inicio [,fin]) -> Extrae los caracteres desde inicio hasta fin (el final no se incluye)

si no se incluye el fin estrae hasta el final */

/*console.log(cadena.substring(3));
console.log(cadena.substring(3, 8));*/

/*slice(inicio [,fin]) -> igual que substrign pero admite valores negativos, si ponemos valores negativos empezara desde atras

si do se incluye el final extrae hasta el final

(2,-4) -> empieza a contar en el terce caracter y los 4 ultimos*/

/*console.log(cadena.slice(-3));
console.log(cadena.slice(0,-6));*/

/*trim()-> elimina los espacios al inicio y al final de la cadena */

/*let cadena2 = 'Hola youtube, estamos trabajando con cadenas';
console.log(cadena2.trim())*/

/*
--ES6--

startswith(valor [,inicio]) -> sirve para saber si la cadena empieza con ese valor. devuelve true o false */

/*console.log(cadena.startsWith('H'));

console.log(cadena.startsWith('h'));

console.log(cadena.startsWith('M',5));
*/

/* endswith(valor [,longitud]) -> sirve para saber si la cadena termina con ese valor. devuelve true o false */

/*
console.log(cadena.endsWith('a',4));

console.log(cadena.endsWith('n',8));

console.log(cadena.endsWith('Mundo'));
*/

/* includes(valor[,inicio]) -> igual que indexOf pero devuelve true o falce */

/*console.log(cadena.includes('n'));
console.log(cadena.includes('a',5));
console.log(cadena.includes('a',2)); */

/* repeat(valor) -> repite el numero de veces que le indequemos.*/
 
/*let cadena3 = 'Hola';
console.log(cadena3.repeat(3));
console.log('r'.repeat(10));*/

/*Template strings*/

let nombre = 'Juan';
let apellido = 'Gomez';
let edad = 20;

console.log('Hola' + nombre + " " + apellido + ".Tienes " + edad + " años.");

console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años`);

console.log(`Hola ${nombre} ${apellido}. El año que viene tendrás ${edad+1} años`);
