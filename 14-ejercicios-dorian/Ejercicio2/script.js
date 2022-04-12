/*
2 - Rscribe un programa que pueda calcular el area de 3 figuras geometricas, triangulo, rectangulo y circulo. en primer lugar pregunta de que figura se quiere calcular calcular el area, despues solicita los datos que  nesecitas para calcularlo.
triangulo = b * h/2
rectangulo = b * h
circulo = n * r2 (pi * radio al cuadrado)
*/

let figure = prompt('Introduce la figura geometrica de la que quieres calcular el area: triangle, rectangle or circle')

let base;
let height;
let radius;

switch(figure){
    case 'triangle':
        base=prompt('Introduce la base del triangulo')
        height=prompt('Introduce la altura del triangulo')
        console.log(`el area del triangulo es ${(base * height)/2}`);
        break
    case 'rectangle':
        base=prompt('Introduce la base del rectangulo')
        height=prompt('Introduce la altura del rectangulo')
        console.log(`el area del rectangulo es ${base * height}`);
        break
    case 'circle':
        radius=prompt('Introduce el radio del circulo')
        console.log(`el area del circulo es ${Math.PI * Math.pow (radius.2)}`);
        break
    default: console.log(`la figura geometrica no es valida`);

}