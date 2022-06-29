//Realizar una función que reciba como parámetro un string y validar el formato email del mismo , retornando true o false según cumpla o no con la validación. Recuerde que el formato de email solo acepta letras minúsculas a-z, números 0-9 y puntos(.) .

   //	Entrada: “jonhdoe@gmail.com”      Entrada: “hey..soypedroel_%locario@diseñador.l”

	//  Salida: true				Salida: false


   function email(val){
    if(!val.match(/\w+@\w+\.\w+/)){ 
        
        return false;
    }
    if( val.indexOf(' ')!=-1 || val.indexOf('..')!=-1){
        
        return false;
    }
    return true;
}

     //console.log(email("hey..soypedroel_%locario@diseñador.l"));
    console.log(email("jonhdo555@gmail.com"));
    