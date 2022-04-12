/*
10 - dado un array que cuntiene ["azul", "amarillo", "rojo","verde", "rosa"] determinar si un color introducido por el usuario a traves de un prompt se encuentra dentro del array o no.
*/

const colors = ["azul", "amarillo","rojo","verde", "rosa"]

const color = prompt('Introduce un color').toLowerCase()

if(colors.indexOf(color) !== -1){
    console.log('tu color se encuentra en el array');
}else{
    console.log('tu color no esta definido');
}