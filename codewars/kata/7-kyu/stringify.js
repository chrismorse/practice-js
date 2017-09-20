// https://www.codewars.com/kata/convert-a-linked-list-to-a-string 
function stringify(list) {
  let returnVal = "";
  let current = list;
  while (current != null) {
    returnVal += current.data + " -> ";
    current = current.next;
  }
  return returnVal += "null";
}
