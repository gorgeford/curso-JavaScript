/*Escribe un programa que pregunte en el promt cuantos helados quiere comprar a un usuario

Al comprar el helado le pregunte si quiere topping o no si quiere topping los precios son los siguientes.

    El helado sin topping cuesta 1.90€.
    El topping de oreo cuesta 1€.
    El topping de KitKat cuesta 1.50€.
    El topping de brownie cuesta 0.75€.
    El topping de lacasitos cuesta 0.95€.
    En caso de no disponer del topping solicitado por el usuario el programa escribirá por pantalla «no tenemos este topping, lo sentimos. » y a continuación informar del precio del helado sin ningún topping.

Finalmente, el programa escribe por consola el precio del helado con el topping seleccionado (o ninguno).*/


    let helado = prompt('Cuantos helados quieres comprar')



    for (var i = 1; i<= helado; i++){

        let valor = prompt(`sin topping(1): ${1.90}, con topping: (2)oreo ${1},(3)kitkat ${1.50},(4)brownie ${0.75}, (5)lacasitos ${1.95} seleccione una opción`)

        switch (valor){
            case '1': 
             valorHelado  = 'sin topping ${1.90}'
             break

            case '2':
             valorHelado  = 'oreo ${1}'
             break

            case '3':
             valorHelado = 'kitkat ${1.50}'
             break

            case '4':
             valorHelado = 'brownie ${0.75}'
             break

            case '5':
             valorHelado = 'lacasitos ${1.95}'
             break

            default: alert(`no tenemos este topping, lo sentimos(el prescio sin topping es:1.90)`)
                     valorHelado = 'ninguno seleccionado';


        }

        
        console.log(valorHelado);


    }
