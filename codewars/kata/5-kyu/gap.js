// https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4

function gap(g, m, n) {
    
    var isPrime = function(x) {
      for (var i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0)
          return false;
      }
      return true;
    }
    
    previousPrime = 0;
    for (var i = m; i < n; i++) {
      if (isPrime(i)) {
        if (i - previousPrime === g)
          return ([previousPrime, i])
        previousPrime = i;
      }
    }
    return null;
}