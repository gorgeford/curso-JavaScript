//Remove String Spaces
//Eliminar espacios de cadena

//Simple, elimine los espacios de la cadena y luego devuelva la cadena resultante.

function noSpace(x){
    return x.split(' ').join('');
  }


console.log(noSpace('h o l a'))

  //otras soluciones
  //return x.replace(/\s/g, '');
  //const noSpace=x=>x.split(" ").join("");