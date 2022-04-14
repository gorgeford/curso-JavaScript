class Persona{
    constructor(nombre, apellido, edad){
         this.nombre = nombre
         this.apellido = apellido
         this.edad = edad

         this.datos = `Me llamo ${nombre} ${apellido} y tengo ${edad} años`
    }

    saludar(){
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`
    }
}

const Juan = new Persona('Juan', 'Garcia', 25)
const Marta = new Persona('Marta', 'Garcia', 35)

console.log(Juan);

console.log(Juan.saludar());
console.log(Marta.saludar());
