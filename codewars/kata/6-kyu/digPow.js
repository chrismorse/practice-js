// https://www.codewars.com/kata/5552101f47fc5178b1000050

function digPow(n, p){
  
  var total = 0;
  var sn = n.toString();
  var raiseVal = p;
  
  for (var i = 0; i < sn.length; i++) {
    //console.log(sn[i]);
    total += Math.pow(sn[i],raiseVal++)
  }
  
  var k = total/n;
  
  return (k % 1 != 0 ? -1 : k)
  

}