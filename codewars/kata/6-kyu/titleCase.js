// https://www.codewars.com/kata/5202ef17a402dd033c000009

function titleCase(title, minorWords) {

  if (title === '')
    return '';
  
  if (minorWords === undefined)
    minorWords = "";
  
  var titleWords = title.split(' ');
  var minorWordsUpperCase = minorWords.split(' ').map(function(word){ return word.toUpperCase(); });   //used to compare same case.

  var returnWords = titleWords.map(function(word, index) {
    // always capitalize first letter of first word and words not in list.
    if (index === 0 || minorWordsUpperCase.indexOf(word.toUpperCase()) === -1)  {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    } else {
      return word.toLowerCase();
    }
  }); 
  
  return returnWords.join(' ');
}