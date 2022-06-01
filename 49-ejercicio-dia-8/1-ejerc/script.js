// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function myFunction(a, b){

b = b.split('').reverse().join('');
a = a.charAt(0).toUpperCase() + a.slice(1);
salida = a.concat(b).replace(/[^a-zA-Z]/g,'');

return salida;

}

let input = "bnchmf";
console.log(input);




/*
function myFunction(a, b) {
    const func = x => x.replace('%','');
    const first = func(a);
    const second = func(b).split('').reverse().join('');
    return first.charAt(0).toUpperCase() + first.slice(1) + second;
  }
  */