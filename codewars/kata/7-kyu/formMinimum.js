// https://www.codewars.com/kata/form-the-minimum/train/javascript

function minValue(values){
  let s = new Set();
  
  for (let i = 0; i < values.length; i++) {
    if (!s.has(values[i])) {
      s.add(values[i]);
    }
  }

  let a = Array.from(s);
  a.sort();
  
  return parseInt(a.join(''));
}