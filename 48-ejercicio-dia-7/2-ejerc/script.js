// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number
function myFunction(a){

for (let i = 2; i < a ; i++){
      if(a % i === 0){ 
         return myFunction(a + 1)
   }
}
return a;

}

let input = 38
console.log(myFunction(input));

//respuesta js challenger
/*function myFunction( a ) {
    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    }
   let n = a;
   while (!isPrime(n)) n++;
  return n
  }
*/
//otras respuesta

//pueba mia correcta
/*let PrimoNumber = (num) => {
    for(let i = 2; i < num ; i++) {
        if(num % i === 0) {
            return PrimoNumber(num + 1)
        }

    }
    return num;
};

let input = 115;
console.log(PrimoNumber(input)); // */

