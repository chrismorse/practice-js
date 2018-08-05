// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/solutions/javascript

function flattenAndSort(array) {
  let flatArray = [].concat.apply([],array);
  return flatArray.sort((a,b) => a > b ? 1 : -1);
}