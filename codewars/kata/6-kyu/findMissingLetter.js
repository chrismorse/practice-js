// https://www.codewars.com/kata/5839edaa6754d6fec10000a2

function findMissingLetter(array)
{

  for (var i = 0; i < array.length; i++) {

    if (i !== 0) {   // don't worry about the beginning
      charCodePrev = array[i-1].charCodeAt();
      charCodeThis = array[i].charCodeAt();
      
      if (charCodeThis - charCodePrev > 1) {
        return String.fromCharCode(charCodePrev + 1);
      }
    }
  }
 
}