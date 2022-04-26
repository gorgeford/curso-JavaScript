/*
insertar,clonar y borrar elementos */

const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = "I'm a new element"

//list.appendChild(newElement)

//list.children[0].insertAdjacentElement('beforebegin',newElement)
//list.insertAdjacentElement('afterbegin',newElement)
//list.insertAdjacentElement('beforeend',newElement)
//list.children[1].insertAdjacentElement('afterbegin',newElement)

//list.children[1].insertAdjacentHTML('afterend','<li>Elemento con HTML</li>')

//list.children[1].insertAdjacentText('afterend', '<li>Elemento con HTML</li>')

list.replacechild(newElement,list.children[1])