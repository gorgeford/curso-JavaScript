/* Objetos nativos 

const button = document.getElementById('button')

if (confirm('acepta')){
    console.log('el usuario acepto');
}else{
    console.log('el usuario no acepto')
}
*/

/*Objetos console - Es el objeto que contiene la consola del navegador
console.log()
console.dir()
console.error()
console.table()
*/
const persol = {
    name: 'Dorian',
    ege: 30,
    email: 'dorian@gmail.com'
}

//console.table([1,2,3,4])

/* Objetos location - es el objeto que contiene la barra de direcciones
https://developer.mozilla.org/es/docs/web/API/Location
location.href 
location.protocol
location.host
location.pathname
location.hash
location.reload()
*/
/*
console.log(location.href)
console.log(location.protocol)
console.log(location.host)
console.log(location.hostname)
console.log.apply(location.hash)
//location.reload()
*/
//location.href = 'https://google.com'

/* Objetos history
https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador
back()
forward()
go(n|-n)

length
*/

/* Objetos date
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/date
https://www.w3schools.com/jsref/jsref_obj_date.asp
*/
/*
const date = new Date()

console.log(date)
*/

/* Timers
timeout:
https://developer.mozilla.org/en-us/docs/web/API/WindowDrWorkerGlobalScope/setTimeout

setTimeout(()=>{code}, delay-in-miliseconds) - hace que se ejecute la funcion despues de delay. si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)

Interval:
https://developer.mozilla.org/en-us/docs/web/API/WindowDrWorkerGlobalScope/setInterval

setInterval(()=>{code}, delay-in-milisecond) - hace que se ejecute la funcion cada delay milisegundo. si lo referenciamos mediante una variable /constante podemos pararlo con clearInterval(referencia)
*/
/*
button.addEventListener('click', () => {
    setTimeout(sludar,3000)
    const timeout = setTimeout(() =>{
        console.log('ADIOS');
    },3000)

    clearTimeout(timeout)
})
*/
/*
const timeout = setTimeout(() =>{
    console.log('ADIOS');
},3000)

button.addEventListener('click', () => {
    setTimeout(sludar,3000)
*/

let cont = 0

//const interval = setInterval(saludar, 3000)

const interval = setInterval(() => {
    console.log(cont)
    cont++
},1000)

button.addEventListener('click', () => {
    clearInterval(interval)
})  


//recorrer un Array-ejercicio de practica
//let arr = ["lunes",5,8,"martes",11, 22, "$$##",55,23, "letras","%&&"]

//arr.forEach((arr) => console.log(arr));
