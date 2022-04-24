//DOM - crear e insertar elementos

/*
crear un elemento: document.createElement(element)
Escribir texto en un element: element.textContent = texto
escribir HTML en un elemento: element.innerHTML = codigo HTML

Añadir un elemento al dom: parent.appendChild(element)

fragmento de codigo: document.createDocumentFragment()
*/

const days =  ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'viernes', 'Sabado', 'Domingo']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect')

/*const itemList = document.createElement('LI')
itemList.textContent = 'Lunes'

daysList.appendChild(itemList)*/

title.innerHTML = 'DOM - <span>crear e insertar elementos I</span>'

const fragment = document.createDocumentFragment()
/*
for (const day of days){
    const itemList = document.createElement('LI')
    itemList.textContent = day
    fragment.appendChild(itemList)

}*/

for (const day of days){
    const selectItem = document.createElement('OPTION')
    selectItem.setAttribute('value', day.toLowerCase())
    selectItem.textContent = day
    fragment.appendChild(selectItem)
}
//daysList.appendChild(fragment)
selectDays.appendChild(fragment)
//console.log(fragment);