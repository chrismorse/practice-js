// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers){
  var even = integers.filter(num => num % 2 === 0);
  var odd = integers.filter(num => num % 2 !== 0);

  return even.length > 1 ? odd[0] : even[0]
}