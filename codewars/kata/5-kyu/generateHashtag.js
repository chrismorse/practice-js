// https://www.codewars.com/kata/52449b062fb80683ec000024/solutions/javascript

function generateHashtag (str) {
  let strA = str.match(/\S+/g);
  if (strA === null) return false;
  
  let val = "#";
  strA.forEach(s => val += s[0].toUpperCase() + s.substr(1).toLowerCase() );

  return val.length > 140 ? false : val;
}