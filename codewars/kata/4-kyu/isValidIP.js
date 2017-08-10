// http://www.codewars.com/kata/ip-validation/javascript

function isValidIP(str) {
  parts = str.split('.');

  // need 4 parts
  if (parts.length != 4)
    return false;

  for (var i = 0; i < parts.length; i++) {
    
    // check for weirdness like leading spaces, etc..
    if (String(Number(parts[i])) !== parts[i])
      return false;
     
    // needs to be a number between 0 & 256
    if (parseInt(parts[i]) > 255 || parseInt(parts[i]) < 0)
     return false;
    }
  
  return true;
}