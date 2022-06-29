//Realizar función que reciba como parámetro un string y devuelva true o false validando el string como un pangrama (un pangrama es una oración que contienen todas las letras del abecedario), Ej :

	//Entrada: “Hola como estan ”

	//Salida : false

	//Entrada : “Benjamín pidió una bebida de kiwi y fresa. Noé, sin vergüenza, la más exquisita champaña del menú.”

    //Salida: true


    //const pangram = s => new Set(s.toLowerCase().match(/[a-z]/gi)).size == 26 ? "Pangram" : "Not pangram";
    const pangram = str => {

        const minus = str.toLowerCase();
        const letras = minus.match(/[a-z]/gi);
        const nunABC = new Set(letras);
        
        if (nunABC.size === 26) return "true";
        else return "false";
      
      };

        console.log(pangram("Hola como estan"));
        console.log(pangram("Benjamín pidió una bebida de kiwi y fresa. Noé, sin vergüenza, la más exquisita champaña del menú"));


