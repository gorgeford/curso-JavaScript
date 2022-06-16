// Bienvenido a la ciudad
//Cree un método sayHello// que tome como entrada un nombre, ciudad y estado para recibir a una persona say_hello. SayHelloTenga en cuenta que namehabrá una matriz que consistirá en uno o más valores que deben unirse con un espacio entre cada uno, y la longitud de la namematriz en los casos de prueba variará.

//Ejemplo:

//sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')


function sayHello( name, city, state ) {
   
    return 'Hello, ' + name.join(' ') + '! Welcome to ' + city + ', ' + state + '!';
  
}


console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));





//otras solucion
/*
function sayHello( name, city, state ) {
return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

function sayHello( name, city, state ) {
  return 'Hello, ' + name.join(' ') + '! Welcome to ' + city + ', ' + state + '!';
}


*/



