/*let word = 'hola mundo'

console.log(Array.from(word));
console.log(word.split(''));
*/

/*sort*/
/*const letters = ['b', 'c', 'z', 'a']
const numbers = [1,8,100,300,3]

console.log(numbers.sort((a,b)=>a-b))

console.log(letters.sort())
console.log(numbers.sort())
*/
/*
const numbers = [12,25,47,84,98]

//numbers.forEach((numbers)=>console.log(numbers))

numbers.forEach((numbers, index)=> console.log(`${numbers}esta en la posicion ${index}`))
*/

/*const word = ['HTML', 'CSS', 'JavaScript', 'PHP']

console.log(word.some(word => word.length> 10))
console.log(word.every(word => word.length<3))
*/

//const numbers = [12,25,47,84,98]
/*
const numbers2 = numbers.map(numbers => numbers * 2)
console.log(numbers2);
*/

/*const numbers2 = numbers.filter(Number => Number < 40)

console.log(numbers2);
*/

//console.log(numbers.reduce((a,b)=>a-b))

const users = [
    {
        name: 'user 1',
        online: true
    },
    {
        name: 'user 2',
        online: true
    },
    {
        name: 'user 3',
        online: false
    },
    {
        name: 'user 4',
        online: true
    },
    {
        name: 'user 5',
        online: false
    },
    {
        name: 'user 6',
        online: true
    }
]

const usersOnline = users.reduce((cont,user)=> {
    if (user.online) cont++
    return cont
},0)
console.log(`hay ${usersOnline} usuarios conectados`);