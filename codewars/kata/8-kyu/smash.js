// 
function smash (words) {
  return words.reduce((sentance, word, i) => {
    sentance += word;
    if (i !== words.length - 1)
      sentance += " ";
    return sentance;
  },"");
};