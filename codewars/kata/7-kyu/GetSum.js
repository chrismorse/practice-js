// https://www.codewars.com/kata/55f2b110f61eb01779000053

function GetSum(a,b)
{
  let sum = 0,
  high = a > b ? a : b,
  low = a > b ? b : a;
  
  for (var i = low; high >= i; i++) {
    sum += i;
  }
  
  return(sum)

}