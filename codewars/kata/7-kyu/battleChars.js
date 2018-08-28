// https://www.codewars.com/kata/595519279be6c575b5000016/solutions/javascript
// 

function battle(x, y) {

  let xScore = 0;
  let yScore = 0;
  
  for (let i = 0; i < x.length; i++) {
    xScore += powerValue(x[i]);
  }

  for (let i = 0; i < y.length; i++) {
    yScore += powerValue(y[i]);
  }

  return xScore > yScore ? x : (xScore < yScore ? y : "Tie!");
}

function powerValue(x) {
  return parseInt(x.charCodeAt(0) - 64);
}