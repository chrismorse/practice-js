// https://www.codewars.com/kata/twice-as-old/solutions/javascript

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let count = 0;
  
  while (true) {
    if (dadYearsOld > 2 * sonYearsOld) {
      dadYearsOld++;
      sonYearsOld++;
      count++;
    
    } else if (dadYearsOld < 2 * sonYearsOld) {
      dadYearsOld--;
      sonYearsOld--;
      count++;

    } else {
      return count;
    }
  }
}