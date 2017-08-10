// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s)
{
  slength = s.length;
  
  if (slength % 2 === 0) {
    return s[slength/2 - 1] + s[(slength/2)]
  } else {
    var mid = Math.floor(slength/2);
    return s[mid]
  }
}