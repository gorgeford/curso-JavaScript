let numbers = [1,2,3,4,5,6];

//Arrays - propiedades

//console.log(numbers.length);

//Arrays - metodos

//let number = 4
//console.log(Array.isArray(number));
//console.log(Array.isArray(numbers));

//Eliminar un elemento

//console.log(numbers);
//numbers.shift();
//console.log(numbers);
//numbers.pop();
//console.log(numbers);

//Añadir elementos

//console.log(numbers);
//let newlength = numbers.push(6);
//console.log(numbers);
//let newlength2 = numbers.unshift(0);
//console.log(numbers);

//.indexOf()

//console.log(numbers);
//console.log(numbers.indexOf(1));

//.lastIndexOf()

//console.log(numbers);
//console.log(numbers.lastIndexOf(1));


//.reverse()

//console.log(numbers);
//numbers.reverse();
//console.log(numbers);

// .join(separador)

//console.log(numbers);
//let arrayString =numbers.join(' ')
//console.log(arrayString);
//console.log(numbers.join('-'));

// .splice(a,b,items)

console.log(numbers)
//numbers.splice(3) - Elimina desde la psicion a hasta el final
//numbers.splice(2,2) -Elimina dede la posicion a el numero valores que le indiquemos
//numbers.splice(2,2,10,23,54) - si b es un valor distinto de 0 elimina el numeros de valores que indequemos en b y aǹade los valores de items a partir de la posicion a
//numbers.splice(4,0,10,23,54) - si b vale 0 añade los elselementos a partir de la posicion a y no elimina ninguno
//console.log(numbers);

//.slice(a,b)

//let newNumbers = numbers.slice();
//console.log(numbers);
//console.log(newNumbers);

//let newNumbers = numbers.slice(2);
//console.log(numbers);
//console.log(newNumbers);

let newNumbers = numbers.slice(2,4);
console.log(numbers);
console.log(newNumbers);

