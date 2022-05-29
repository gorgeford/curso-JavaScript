// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value 

function myFunction(a, b){

if (a < b){
    resul = a / b 
}else{
    resul = a * b 
}

return resul

}

console.log(myFunction(4,6));


//a < b ? a / b : a * b