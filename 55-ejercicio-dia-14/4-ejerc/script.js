//Años de gato, Años de perro
//Tarea de Katas
//Tengo un gato y un perro.

//Los conseguí al mismo tiempo que gatito/cachorro. Eso fue humanYearshace años.

//Devuelve sus respectivas edades ahora como [ humanYears, catYears, dogYears]

//NOTAS:

//añoshumanos >= 1
//humanYears son solo números enteros
//Años del gato
//15años de gato para el primer año
//+9años de gato por segundo año
//+4cat años por cada año después de eso
//Años del perro
//15años de perro para el primer año
//+9años de perro por segundo año
//+5años de perro por cada año después de eso
//Referencias

//http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
//http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html

var humanYearsCatYearsDogYears = function(humanYears) {
    if (humanYears === 1) {return [1, 15, 15];}
    if (humanYears === 2) {return [2, 24, 24];}
    
    return [humanYears, 24+((humanYears-2)*4), 24+((humanYears-2)*5)];
  }
  




  //otras solucion
  /*
function humanYearsCatYearsDogYears(humanYears) {
  switch (humanYears) {
    case 1:
      return [1, 15, 15]
    case 2:
      return [2, 24, 24];
    default:
      return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24 ];
  }
  
}

var humanYearsCatYearsDogYears = function(humanYears) {
  var catYears = 0;
  var dogYears = 0;
  
  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  } else if (humanYears === 2) {
    catYears = 24;
    dogYears = 24;
  } else if (humanYears > 2) {
    catYears = 24 + (humanYears - 2) * 4;
    dogYears = 24 + (humanYears - 2) * 5;
  }

  return [humanYears, catYears, dogYears];
}
  */



