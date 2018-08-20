// https://www.codewars.com/kata/54da5a58ea159efa38000836/solutions/javascript

function findOdd(A) {
  
  let counts = new Set();
  
  for (let i = 0; i < A.length; i++) {
    if (!counts.has(A[i])) {
      counts.add(A[i]);
    } else {
      counts.delete(A[i]);
    }
  }

  return counts.values().next().value;
}