// https://www.codewars.com/kata/57d27a0a26427672b900046f/solutions/javascript

function duckShoot(ammo, aim, ducks){
  let numShots = Math.floor(ammo * aim);
  let output = '';
  
  for (let i = 0; i < ducks.length; i++) {
    if (ducks[i] === '2' && numShots >= 1) {
      output += 'X';      
      numShots--;
    } else {
      output += ducks[i];
    }
  }
  
  return output;  
}