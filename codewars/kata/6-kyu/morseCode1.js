// https://www.codewars.com/kata/54b724efac3d5402db00065e/solutions/javascript

decodeMorse = function(morseCode){
  morseCode = morseCode.trim();
  let sentences = morseCode.split("   ");
  let returnStr = "";
  
  for (let i = 0; i < sentences.length; i++) {
    let words = sentences[i].split(" ");
    for (let j = 0; j < words.length; j++) {
      returnStr += MORSE_CODE[words[j]];      
    }
    
    if (i !== sentences.length - 1)
      returnStr += " ";
  }
  
  return returnStr;
}