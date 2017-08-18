// https://www.codewars.com/kata/53368a47e38700bd8300030d/

function list(names){
  
  let returnVal = names[0] ? names[0].name : '';
  
  for (let i = 1; i < names.length; i++) {
    if (i === names.length - 1)
      returnVal += " & " + names[i].name;
    else 
      returnVal += ", " + names[i].name;
  }
  
  return returnVal ;
}