/*
crea una clase libro
la clase libro tendra titulo, autor, años y genero.
crea un metodo que devuelva toda la informacion del libro
pide 3 libros y guardalos en un array
los libros se introduciran al arrancar el programa pidiendo los datos con prompt.
validar que los campos no se introduzcan vacios
validar que el año sea un numero y que tenga 4 digitos 
validar que el genero sea: aventuras, terror o fantasia
crea una funcion que muestre todos los libros
crea una funcion que muestre los autores ordenados alfabeticamente
crea una funcion que pida un genero y muestre la informacion de los libros que pertenescan a ese genero usando un el metodo que devuelve la informacion
*/

class book{
    constructor(title,author,year,gender){
        this.title = title
        this.author = author
        this.year = year
        this.gender = gender
    }

    getAuthor() {
        return this.author
    }

    getGender() {
        return this.gender
    }

    bookInfo(){
        return `${this.title} es un libro de ${this.gender} escrito por ${this.author} en el año ${this.year}` 
    }
}

let books = []

while(book,length < 3){
    let title = prompt('Introduce el titulo del libro')
    let author = prompt('Introduce el autor del libro')
    let year = prompt('Introduce el año del libro')
    let gender = prompt('Introduce el genero del libro')

    if(title != '' && author != '' && !isNaN(year) && year.length == 4 && (gender == 'aventura' || gender == 'terror' || gender == 'fantasia')){


        books.push(new book(title,author,year,gender))

    }
}

const showllBooks = () => {
    console.log(books);
}

const showllAuthors = () => {
    let author = []

    for (const book of books){
        author.push(book.getAuthor());
    }
    
    console.log(authors.sort());

}

const showGender = () => {
    const gender = prompt('Introduce el género a buscar')

    for (const book of books){
        if (book.getGender() == gender){
            console.log(book.bookInfo())
        }
    } 
}

//showAllBooks()
//showllAuthors()
showGender()