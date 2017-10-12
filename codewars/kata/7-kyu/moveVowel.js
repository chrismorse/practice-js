// https://www.codewars.com/kata/move-all-vowels/

function moveVowel(input) {
  let con = [];
  let vow = [];
  
  for (let i = 0; i < input.length; i++) {
    if (['a','e','i','o','u'].indexOf(input[i]) >= 0) 
      vow.push(input[i]);
    else
      con.push(input[i]);
  }
  
  return con.concat(vow).join('');

}