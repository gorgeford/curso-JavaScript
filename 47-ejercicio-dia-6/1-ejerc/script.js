// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

function myFunction(a){

let num = Number((Math.abs(a) * 100).toPrecision(15));

    return Math.round(num) / 100 * Math.sign(a);
}

//return Number(a.toFixed(2));
console.log(myFunction(20,3838888));
