// https://www.codewars.com/kata/filter-out-the-geese/

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let filtered = [];
  
  for (let i = 0; i < birds.length; i++) {
    if (geese.indexOf(birds[i]) === -1) {
      filtered.push(birds[i]);
    }
  }

  return filtered;
};