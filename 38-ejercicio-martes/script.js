/*dados dos strings, crear una función que los combine en uno solo donde  todas las letras sean mayúsculas, por ejemplo str1 = "hola" str2 = "amigo" la función debe devolver un solo string que diga "HOLA AMIGO"*/


let str1 = "hola";
let str2 = "amigo";

function strings (str1,str2){
    stringsFinal = str1 +" "+ str2

    return stringsFinal.toUpperCase()
    
}

console.log(strings(str1,str2));



