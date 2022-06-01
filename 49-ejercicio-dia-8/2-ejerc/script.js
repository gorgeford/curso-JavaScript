// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

function myFunction(str){

let increme = '';
    for(let i =0; i < str.length ; i++) {
        increme +=String.fromCharCode(str[i].charCodeAt(0) + 1); 
    }
    return increme;
}

console.log(myFunction('bnchmf'));


/*
function myFunction(str) {
    const arr = [...str];
    const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
    return correctedArray.join('');
  }
  */
