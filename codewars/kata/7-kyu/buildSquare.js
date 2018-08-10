// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/solutions/javascript

function generateShape(sideInt){
  
  let square = '';
  for (let i = 0; i < sideInt; i++) {
    if (i != 0) {
      square += '\n';
    }
    
    for (let j = 0; j < sideInt; j++) {
      square += '+';    
    }
    
  }

  return square;
}