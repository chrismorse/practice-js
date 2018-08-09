// https://www.codewars.com/kata/5b6375f707a2664ada00002a/solutions/javascript

const whosOnline = (friends) => {
  
  let output = {};
  let online = [], offline = [], away = [];
  
  for (let i = 0; i < friends.length; i++) {
    
    if (friends[i].status === 'offline') {
      offline.push(friends[i].username);
    } else {
      if (friends[i].lastActivity > 10) {
        away.push(friends[i].username);
      } else {
        online.push(friends[i].username);
      }
    }
  }

  if (online.length > 0)
    output.online = online;

  if (offline.length > 0)
    output.offline = offline;
  
  if (away.length > 0) 
    output.away = away;

  return output;

}