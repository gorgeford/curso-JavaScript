const person = {
    name: 'Juan',
    age: 26,
    sons: ['Laura', 'Diego', 'ṕepe', 'Rosa', 'Tomas']
}

/*
console.log(person.name);
console.log(person['name']);*/
/*
for(const key in person){
    console.log(key);
}

for(const key in person){
    console.log(person[key]);
}
*/
/*
for(const son of person.sons){
    console.log(son);
}*/

console.log(`hola ${person.name}. tienes ${person.age} años y tus hijos se llaman ${person.sons.join(',')}`);
