// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

function myFunction(a, n){

if (a == null) 
    return void 0;
  if (n == null) 
     return a[a.length - 1];
  return a.slice(Math.max(a.length - n, 0));
}

console.log(myFunction([1, 2, 3, 4, 5], 2));


//function myFunction(a, n) {
  //  return a.slice(-n);
  //}