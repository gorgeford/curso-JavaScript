/* condicional switch
sintaxis simple*/

let num =2;

switch(num){
    case 1: console.log(`$ tiene el valor 1`);
    break;
    case 2: console.log(`$ tiene el valor 2`);
    break
    default: console.log(`$ no vale ni 1 ni 2`);
}

/*sintaxis multiples*/

switch(num){
    case 1:
    case 3:
    case 5:
    console.log(`$ es impar`);
    break;
    case 2:
    case 4:
    console.log(`$ es par`);
}

