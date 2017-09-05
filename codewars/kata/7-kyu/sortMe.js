// https://www.codewars.com/kata/55aea0a123c33fa3400000e7/

sortMe = arr => arr.sort(
  (a,b) => (a+"").slice(-1) < (b+"").slice(-1) ? -1 : 1
)
