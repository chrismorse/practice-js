// http://www.codewars.com/kata/ip-validation/javascript

function isValidIP(str) {
  parts = str.split('.');

  // special good IP
  if (str === '0.0.0.0')
    return true

  // need 4 parts
  if (parts.length != 4)
    return false;

  for (var i = 0; i < parts.length; i++) {
    
    // can't start with a zero or start or end with a blank
    if ((parts[i][0] === '0' && parts[i].length > 1 ) || parts[i][0] === ' ' || parts[i][parts[i].length - 1] === ' ')
      return false;

    // has to be a number
    if (isNaN(parts[i]))
      return false;
     
    // needs to be a number between 0 & 256
    if (parseInt(parts[i]) > 255 || parseInt(parts[i]) < 0)
     return false;
    }
  
  return true;
}