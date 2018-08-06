// https://www.codewars.com/kata/59d9d8cb27ee005972000045/solutions/javascript
function catalog(s, article) {
  
  let lines = s.split('\n\n');
  let result = "";
 
  for (let i = 0; i < lines.length; i++) {
    let name = lines[i].substr(lines[i].indexOf("<name>") + 6, lines[i].indexOf("</name>") - lines[i].indexOf("<name>") - 6)
    
    if (name.indexOf(article) >= 0) {
      if (result.length > 0) {
        result += "\r\n";
      }

      let prx = lines[i].substr(lines[i].indexOf("<prx>") + 5, lines[i].indexOf("</prx>") - lines[i].indexOf("<prx>") - 5)
      let qty = lines[i].substr(lines[i].indexOf("<qty>") + 5, lines[i].indexOf("</qty>") - lines[i].indexOf("<qty>") - 5)
      
      result += name + " > prx: $" + prx + " qty: " + qty;
    }

  }
  
  if (result === "")
    return "Nothing";
    
  return result;
}