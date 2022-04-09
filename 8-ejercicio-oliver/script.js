let frutas = ["mango", "naranja", "zapote"]

const encontrarfruta = (frutas) => {
    //proceso
    let frutasencontradas = frutas.filter(fruta => fruta === "zapote")
    //proceso
    return frutasencontradas
}

console.log("traeme el  "+encontrarfruta(frutas)+" para comerme el zapote")
