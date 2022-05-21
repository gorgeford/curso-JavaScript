
let contador = 0;

const numero = document.querySelector('#numero');
const botones = document.querySelectorAll('.boton');

botones.forEach(boton => {
    boton.addEventListener("click",function(c){

        const recorrido = c.currentTarget.classList;

        if(recorrido.contains('decrementar')){
            contador--;
        }
        else if(recorrido.contains('incrementar')){
            contador++;
        }
        else {
            contador = 0;
        }
            numero.textContent = contador;

            if(contador > 0){
                numero.style.color = '#D35400';
            }
            if(contador < 0){
                numero.style.color = '#0E6251 ';
            }
            if(contador === 0) {
                numero.style.color = '#641E16'
            }
    })
})
/*
const valor= document.getElementById("#valor");
const sumar = document.getElementById("incrementar");
const restar = document.getElementById("decrementar");
const resetear = document.getElementById("resetear");

let c = 0;

sumar.addEventListener("click", ()=>{
    numero++;
    contador.innerHTML = numero;
})

restar.addEventListener("click", ()=> {

    if(numero==0){}
    else{
        numero--;
        contador.innerHTML = numero;
    }
});

resetear.addEventListener("click", ()=>{
    numero = 0;
    contador.innerHTML = numero;
})*/





