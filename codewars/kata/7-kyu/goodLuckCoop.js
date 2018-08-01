// https://www.codewars.com/kata/5b571f7bbdd074fea100017e/solutions/javascript

function findSafeRoute(board, directions) {
  
  // check horizontal
  for (let i = 0; i < board[0].length; i++) {
    
    if (directions === board[i]) {
      return "Horizontal " + (i + 1);
    }
    
  }
  
  // check vertical
  for (var i = 0; i < board.length; i++) {
  
    let vertPath = '';
    for (let j = 0; j < board[0].length; j++) {
        vertPath += board[j][i];
    }
    if (directions === vertPath) {
      return "Vertical " + (i + 1)
    }

  }

  return "Coop, it's too risky!";

}