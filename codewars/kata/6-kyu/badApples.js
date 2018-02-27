// https://www.codewars.com/kata/bad-apples/train/javascript

function badApples(input) {
  
  let output = [];
  let badApples = [];
  let badAppleSkip = false;
  
  for (var i = 0; i < input.length; i++) {
    if (input[i][0] === 0 || input[i][1] === 0) {
      if (input[i][0] !== 0) {
        badApples.push(input[i][0]);
      } else if (input[i][1] !== 0) {
        badApples.push(input[i][1]);
      }
    }
  }


  for (var i = 0; i < input.length; i++) {
    if (input[i][0] === 0 && input[i][1] === 0) {
      // skip rotten packages
      continue;
    } else if (input[i][0] !== 0 && input[i][1] !== 0) {
      output.push(input[i]);

    } else {
      // repackage?
      //console.log("input[i]", input[i])
      //console.log("badApples", badApples)
      
      // if we include the apples here, then skip the next one.
      if (!badAppleSkip) {
        if (badApples.length > 1) {
          output.push([badApples.shift(), badApples.shift()]); 
        }
          badAppleSkip = true;
      } else {
        badAppleSkip = false;
      }
    }
  }
    
  //console.log("input",input);

  return output;
}