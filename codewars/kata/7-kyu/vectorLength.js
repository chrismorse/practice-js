// https://www.codewars.com/kata/554dc2b88fbafd2e95000125/solutions/javascript

function vectorLength(vector){
  return Math.sqrt(
    Math.pow(vector[0][0] - vector[1][0],2) + 
    Math.pow(vector[0][1] - vector[1][1],2)
  ) 
}