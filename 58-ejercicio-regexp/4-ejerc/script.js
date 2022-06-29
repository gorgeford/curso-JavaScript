//Realizar una función que reciba como parámetro un array de strings y retorne un array de los string que contengan letras mayusculas. Ej ;

//Entrada: [“Hola”, “perro”, “Piloto”, “mesoNero”, “ventana”, “gatO”]

//Salida: [“Hola”, “Piloto”, “mesoNero”, “gatO”]

function myFuncion(strings){
    
    let salida = [];
    let i = 0;
    strings.forEach(strings => {
        if (/[A-Z]/.test(strings)){
            salida[i] = strings;
            ++i;
        }
    })
 
    return salida;
}

console.log(myFuncion(["Hola", "perro", "Piloto", "mesoNero", "ventana", "gatO"]));



