//¡Piedra Papel tijeras!
//¡Vamos a jugar! ¡Tienes que devolver qué jugador ganó! En caso de empate devolución Draw!.

//Ejemplos (Entrada1, Entrada2 --> Salida):

//"scissors", "paper" --> "Player 1 won!"
//"scissors", "rock" --> "Player 2 won!"
//"paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
    if (p1 === p2) {
      return `Draw!`;
    }
    if (p1 === 'rock' && p2 === 'scissors') {
      return `Player 1 won!`;
    } else if (p1 === 'paper' && p2 === 'rock') {
      return `Player 1 won!`;
    } else if (p1 === 'scissors' && p2 === 'paper') {
      return `Player 1 won!`;
    } else {
      return `Player 2 won!`;
    }
  };

console.log?(rps("scissors", "paper"));



//otras solucion
/*
const rps = (p1, p2) => {
  if(p1 === p2) {
    return 'Draw!'
  }; 
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
}

const rps = (p1, p2) => {
  var map = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
  };
  
  if (p1 == p2) {
    return 'Draw!';
  } else {
    return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
  }
};
*/









