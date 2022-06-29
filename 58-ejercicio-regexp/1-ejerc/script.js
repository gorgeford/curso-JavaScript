//Realizar una función que reciba como parámetro un array de strings y retorne como valor un array con todos los strings que son palíndromos (un palíndromo es una palabra que se lee igual al derecho y al revés, Ej; oso, arepera, ala.)

//Entrada : [“hola”, “oso”, “perro”, “ala”, “2002”, “anitalavalatina”,”mundo”]

//Salida: [“oso”,”ala”,”2002”,”anitalavalatina”]



let palindrome = ["ana", "oSo", "aantena", "hola"]

const isPalindrome = (arr) => arr.filter(item=> new RegExp(item.toLowerCase().split("").reverse().join("")).test(item.toLowerCase()));

console.log(isPalindrome(palindrome));






















 
























/*
const Palimdrome = (str) => {
	const regexp = /\b(\w)?(\w)\w+?\2\1/gim;
	
	return str.toString().match(regexp);
};

console.log(Palimdrome(['hola','oso','perro','ala','2002','anitalavalatina','mundo',]));
*/
/*
const isPalimdrome = (str) => {
	const regexp = /[a-z0-9]/gi;
	let arrToString = str.toString();

	if (regexp.test(arrToString)) {
		let arrVolteado = arrToString
			.split('')
			.reverse()
			.join('')
			.split(',');

		let palindrome = str.filter((x) => arrVolteado.includes(x));

		return true "si es palindome"

	}else 
   return false "no es palindrome"

     return palindrome;

};

console.log(
	isPalimdrome([
		'hola',
		//'oso',
		'perro',
		//'ala',
		//'2002',
	//	'anitalavalatina',



*/




