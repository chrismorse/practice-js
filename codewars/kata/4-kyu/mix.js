// https://www.codewars.com/kata/5629db57620258aa9d000014

function mix(s1, s2) {

  // count letters for s1 & s2
  // create 2 dictionaries that show total.
  s1Dict = {};
  s2Dict = {};
  for (var i = 0; i < s1.length; i++) {
    if (s1[i] !== s1[i].toUpperCase())
      s1Dict[s1[i]] = s1Dict[s1[i]] ? s1Dict[s1[i]] + 1 : 1;
  }
  
  for (var i = 0; i < s2.length; i++) {
    if (s2[i] !== s2[i].toUpperCase())
      s2Dict[s2[i]] = s2Dict[s2[i]] ? s2Dict[s2[i]] + 1 : 1;
  }
  
  // find commonalities - those in S1 that are also in S2
  results = [];
  for (var key in s1Dict) {

    if (s1Dict[key] === 1) {
      delete s1Dict[key]
      continue;
    }

    if (key in s2Dict) {
      if (s1Dict[key] > s2Dict[key]) {
        results.push([key, s1Dict[key], "1"]);
      } else if (s2Dict[key] > s1Dict[key]) {
        results.push([key, s2Dict[key], "2"]);
      } else if (s1Dict[key] === s2Dict[key]) {
        results.push([key, s1Dict[key], "3"]);
      }

      delete s1Dict[key]
      delete s2Dict[key]

    } else {
      results.push([key, s1Dict[key], "1"]);
      delete s1Dict[key]
    }
  }

  // add the rest of S2 that wasn't in S1
  for (var key in s2Dict) {
    if (s2Dict[key] === 1) {
        delete s2Dict[key]
        continue;
    } else {
      results.push([key, s2Dict[key], "2"]);
      delete s2Dict[key]
    }
  }


  // sort results
  results.sort(function(first, second) { 
    let n1 = second[1] - first[1];
    if (n1 != 0) {
      return n1
    }
    
    let n2 = first[2] - second[2];
    if (n2 != 0)
      return n2
      
    return second[0] < first[0] ? 1 : -1
  });
 

  formatString = ((returnStr, pre, chr, num) => { 
    return returnStr + (returnStr ? "/" + pre + Array(num + 1).join(chr) : pre + Array(num + 1).join(chr))});


  // create and format the results
  returnStr = '';
  for (var item in results) {
    let pre = results[item][2] === '3' ? '=:' : (results[item][2] === '2' ? '2:' : '1:');
    returnStr = formatString(returnStr, pre, results[item][0], results[item][1]);
  }

  return returnStr;  

}