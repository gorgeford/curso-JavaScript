//Realizar una función que reciba com parametro un string y retorne el string sin caracteres especiales, Ej ;

//Entrada : “Hola !, como estan# ust%edes muchacho()s””

//Salida : “Hola como estan ustedes muchachos”



function myFunction(str){

    return str.replace(/[^a-zA-Z ]/g,"").replace(" ","");
  }
  
  
  console.log(myFunction("Hola !, como estan# ust%edes muchacho()s"));
  
  
  