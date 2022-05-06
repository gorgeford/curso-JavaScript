/*const getName = async () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('Dorian')
        }, 1500)
    })
}

const sayHello = async () => {
    const name = await getName()
    return `hello ${name}`
}

getHello().then(res=>console.log(res))
*/

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

const getUser = async (id)=> {
    const user = user.find(user => user.id === id)
        if (!user) throw new Error(`not exist a user with id ${id}`)
    else return user
    
}

const getEmail = async (user)=> {
    const email = emails.find(email => email.id === user.id)
    if (!email) throw new Error(`${user.name} hasn't email`)
    else return({
        id: user.id,
        name: user.name,
        email:email.email
    })  
}

const getInfo = async (id) => {
    try{
        const user = await getUser(id)
        const res = await getEmail(user)
        return`${user.name} email is ${res.email}`
    } catch (error){
        console.log(error)
    }
}

getInfo(3).then(res => console.log(res))