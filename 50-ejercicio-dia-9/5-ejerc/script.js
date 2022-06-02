// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

function myFunction(arr){

return arr.reduce((a, b) => a + b, 0) / arr.length;

}

console.log(myFunction([10,100,1000]));
