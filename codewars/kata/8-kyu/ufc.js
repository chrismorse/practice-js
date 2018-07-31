// https://www.codewars.com/kata/for-ufc-fans-total-beginners-conor-mcgregor-vs-george-saint-pierre/solutions/javascript

var quote = function(fighter) {
  
  if (fighter.toLowerCase() === "george saint pierre")
    return "I am not impressed by your performance.";
    
  if (fighter.toLowerCase() === "conor mcgregor") 
    return "I'd like to take this chance to apologize.. To absolutely NOBODY!"
    
  return 0
  
};