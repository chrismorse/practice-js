//https://www.codewars.com/kata/5648b12ce68d9daa6b000099/

var number = function(busStops){
  
  let numPeople = 0;

  for (i = 0; i < busStops.length; i++) {
    numPeople += busStops[i][0] - busStops[i][1];
  }

  return numPeople;
}