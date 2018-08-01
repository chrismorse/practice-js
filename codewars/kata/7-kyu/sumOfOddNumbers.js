// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/solutions/javascript

function rowSumOddNumbers(n) {

  let currentLevel = 1;
  let currentNum = 1;
  let sumLevel = 1;  // if only 1 level

  for (let i = 1; i <= n; i++) {     // walk through levels

    sumLevel = 0;
    for (let j = 0; j < currentLevel; j++) {
      sumLevel += currentNum;
      currentNum = currentNum + 2;
    }
    
    currentLevel++;
  }
  return sumLevel;
}

