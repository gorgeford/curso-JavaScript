/*
    Determinadis 

    bucle for of / for in

    for(let variavle of estructura ){
        codigo a ejecutar 
    
    }
*/


let names = ['Paco', 'Jose', 'Paula', 'Maria']

for(let i = 0; i < names.length; i++){
    if(names[i]==='paula'){
        continue
    }
    console.log(names[i]);
}

for(let name of names){
if(names==='paula'){
        continue
    }
    console.log(name);
}

for(let index in names){
    if(names[index]=== 'paula'){
        continue
    }
    console.log(index);
}