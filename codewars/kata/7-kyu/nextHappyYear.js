// https://www.codewars.com/kata/5ae7e3f068e6445bc8000046/solutions/javascript

function nextHappyYear(year){
  
  while(true) {
  
    year++;
    yearArray = year.toString().split("");
    yearSet = new Set(yearArray);
    
    if (yearSet.size === yearArray.length)
      return year;
  
  }
}
  