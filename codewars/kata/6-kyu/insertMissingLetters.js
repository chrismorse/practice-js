// https://www.codewars.com/kata/5ad1e412cc2be1dbfb000016/solutions/javascript

function insertMissingLetters (str){

  let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let output = "";
  let strSet = new Set(str.split(''));
  
  for (let i = 0; i < str.length; i++) {
    output += str[i]; 
    
    if (strSet.has(str[i])) {
      output += alpha.substr(alpha.search(str[i].toUpperCase())+1);      
      strSet.delete(str[i]);      
    }
  }
  
  for (let i = 0; i < str.length; i++) {
    output = output.replace(new RegExp(str[i].toUpperCase(), 'g'),'');
  }

  return output;
}
