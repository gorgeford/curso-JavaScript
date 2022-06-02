// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
function
myFunction
(
a, b
)
{

return  a.filter(x => x !== b);
}

console.log(myFunction([false,'2',1], false));