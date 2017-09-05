// https://www.codewars.com/kata/544d114f84e41094a9000439/

function powerOf4(x) {
  
  if (x !== +x)
    return false

  while (x > 1) {
    x = x / 4;

    if (x === 1)
      return true
  }

  return false
}

