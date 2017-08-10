// https://www.codewars.com/kata/5592e3bd57b64d00f3000047

function findNb(m) {
  
  var volume = m;
  var i = 1;
  
  while (true) {
  
      var this_level_cubes = Math.pow(i,3);
  
      volume -= this_level_cubes
            
      if (volume === 0) {
        return i;
      } else if (volume < 0) {
        return -1;
      }
       
       
      i++;
        
    
  
  }
}