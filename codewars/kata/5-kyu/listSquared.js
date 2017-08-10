// https://www.codewars.com/kata/55aa075506463dac6600010d

function listSquared(m, n) {

  var squaredDivisors = [];
  
  for (var i = m; i < n; i++) {
    let divisors = [];
    for (var j = 0; j <= i; j++) {
      if (i % j === 0) {
        divisors.push(j)
      }
    }

    squaredDivisor = divisors.reduce((a,b) => a + (b*b))
    
    if (Math.sqrt(squaredDivisor) % 1 === 0) {
      squaredDivisors.push([i,squaredDivisor])
    }
  }
  
  return squaredDivisors;


}