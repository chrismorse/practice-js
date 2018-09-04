// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/solutions/javascript

function parse( data )
{
  let returnArray = [], curr = 0;
  
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "i") {
      curr++;
    } else if (data[i] === "d") {
      curr--;
    } else if (data[i] === "s") {
      curr = curr * curr;
    } else if (data[i] === "o") {
      returnArray.push(curr);
    }
  }

  return returnArray;
}
