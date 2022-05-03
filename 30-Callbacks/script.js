// Escribir una función que tome un número como parametro (a)
// separar (a) en sus dígitos individuales y devolverlos en una array

/*
let number = prompt ('ingresa la sifra una cifra numerica a consultar')

function digitos( number){
    return number.split('');

}
let salida = digitos(number)
console.log( salida);*/
/*CALLBACK */
/*
const getUser = (id, cb) => {
    const user = {
        name: 'Jorge',
        id: id
    }

    if( id===2) cb('user no exist')
    else cb(null, user)
}

getUser(1,(err, user) => {
    if (err) return console.log(err)
    console.log(`user name is ${user.name}`);
})
*/

//ej crear un array de objetos 

const user = [
    {
        id: 1,
        name: 'Jorge'
    },
    {
        id: 2,
        name:'Laura'
    },
    {
        id: 3,
        name: 'Carlos'
    }

]

const emails=[
    {
        id: 1,
        email: 'gorgenavarro97@gmail.com'
    },
    {
        id: 2,
        email: 'laura@gmail.com'
    }
]

const getUser = (id, cb)=> {
    const user = user.find(user => user.id === id)
    if (!user) cb(`not exist a user with id ${id}`)
    else cb(null, user)
}

const getEmail = (user, cb)=> {
    const email = user.find(email => email.id === user.id)
    if (!email) cb(`${id} hasn't email`)
    else cb(null,{
        id: user.id,
        name: user.name,
        email: email.email
    })
}

getUser(1,(err, user)=> {
    if (err) return console.log(err)
   
    getEmail(user, (err,res)=> {
        if(err) return console.log(err)
        console.log(err);
    })
})

