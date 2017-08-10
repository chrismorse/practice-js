// https://www.codewars.com/kata/537e18b6147aa838f600001b

/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
var justify = function(str, len) {
  
  let addSpaces = function(line) {
    let linewords = line.split(" ");
    if (linewords.length === 1)  // if single word then return it with a newline
      return line + '\n';
      
    let spaces = len - linewords.reduce((sum, word) => sum + word.length, 0);

    // add spaces on to end of each word evenly
    for (var i = 0; i < spaces; i++) {
      linewords[i % (linewords.length - 1)] += " "
    }
    return linewords.join("") + "\n"
  }


  let words = str.split(" ");
  let output = "";
  let thisLine = "";
  
  for (var i = 0; i < words.length; i++) {
    if (thisLine.length + words[i].length + 1 > len) {
      output += addSpaces(thisLine);
      thisLine = words[i];
    } else {
      thisLine += thisLine ? ' ' + words[i] : words[i];
    }
  }
  output += thisLine;

  return output
};