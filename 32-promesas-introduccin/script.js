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

const getUser = (id)=> {
    const user = user.find(user => user.id === id)
    const promise = new promise((resolve, reject) => {
        if (!user) reject(`not exist a user with id ${id}`)
    else resolve(user)
    })
}

const getEmail = (user)=> {
    const email = emails.find(email => email.id === user.id)
    return promise = new promise((resolve, reject) => {
        if (!email) reject(`${user.name} hasn't email`)
        else resolve({
            id: user.id,
            name: user.name,
            email:email.email
        })
    })
   
}


getUser(3)
.then(user => getEmail(user))
.then(res => console.log(res))
.catch(err => console.log(err))

/*
getUser(3)
then(getEmail)
then(console.log)
catch(console.log)

*/

