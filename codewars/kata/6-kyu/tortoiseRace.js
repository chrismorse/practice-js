// https://www.codewars.com/kata/55e2adece53b4cdcb900006c/solutions/javascript

function race(v1, v2, g) {
  
  if (v1 >= v2)
    return null;
  
  let totalSecs = (g / (v2 - v1)) * 3600;
  let hours = Math.floor(totalSecs / 3600);
  let mins = Math.floor(totalSecs % 3600 / 60);
  let secs = Math.floor(totalSecs % 3600 % 60);
  
  return [hours, mins, secs]

}