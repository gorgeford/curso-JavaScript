/*
document.getElementById(id) - acceder a un elemento a traves de su id

document | element.querySelector('selector CSS') - accede al primer elemento que coincida com el selector css

dociment | element .querySelecorAll('selectorCSS') - accede a todos los elementos que coincidan con el selector css, devuelve un nodelist
*/

/*cons titie = document.getElementById('title')

title.textContent = 'DOM - accediendo a nodo' */

/*const paragraph = ducument.querySelector('.paragraph')*/

const span = document.getElementById('title').querySelector("span")

const paragraphs = document.querySelectorAll('.paragraph')

console.log(paragraphs);
