// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/

function reverseWords(str) {
  words = str.split(" ");
  reversedWords = [];
  for (let i = 0; i < words.length; i++) {
    reversedWords.push(words[i].split("").reverse().join(""));
  }
  
  return reversedWords.join(" ");
}