const form = document.getElementById('form')
const input = document.getElementById('input')
const button = document.getElementById('button')

/*input.addEventListener('keyup', (e) => {
    console.log(e);
})*/

//button.addEventListener('click', (e) => {
  //  console.log(e.target);

//})

const gallery = document.getElementById('gallery')

gallery.addEventListener('click', (e) => {
    console.log(e.target.textContent);
})




/*
validar cual es mayor entre 3 numeros

const obtenerNumeroMayor(a,b,c)

let mayor = 0;

if (a > b) {
    mayor = a;
}else{
    mayor = b;
}

if (c > mayor) {
    mayor = c;
}

return mayor;

}

console.log(obtenerNumeroMayor(1,2,3));

Pedro Fernandez23:17
const arrayNumber = [1,2,3,4,5,6,7,8,9,10]

const parImpar = (parent) =>{
    const result = parent.filter( item => item % 2 == 0)
    console.log(result)
    return result
}

console.log(parImpar(arrayNumber))
const numberParImpar = num => {
    
        if(num % 2 === 0){
     return result = `${num} es par`
    }
     else{ 
        return result = `${num} es impar`;
    }

    return result
}

console.log(numberParImpar(12))
Ender Sanchez23:19
  let num = 3
  
 if(num % 2 === 0) {
     console.log(`${num} Es par`)
 }else console.log(`${num} es impar `)
*/
