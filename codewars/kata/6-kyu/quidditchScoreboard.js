// https://www.codewars.com/kata/5b62f8a5b17883e037000136/solutions/javascript

function calculateScore(task) {
  if (task === "Quaffle goal") 
    return 10;
  
  if (task === "Blatching foul" || task === "Blurting foul" || task === "Bumphing foul" || task === "Haverstacking foul" || task === "Quaffle-pocking foul" || task === "Stooging foul") 
    return -30;
  
  if (task === "Caught Snitch")
    return 150;
    
  return "unknown";

}



function quidditchScoreboard(teams, actions) {
  let teamArr = teams.split(" vs ");
  let team1 = teamArr[0];
  let team2 = teamArr[1];
  let team1Score = 0;
  let team2Score = 0;
  let actionArr = actions.split(", ")
  
  for (let i = 0; i < actionArr.length; i++) {
    let task = actionArr[i].split(": ");

    if (task[0] === team1) {
      team1Score += calculateScore(task[1]);
    } else {
      team2Score += calculateScore(task[1]);
    }

    if (task[1] === "Caught Snitch") {
      return team1 + ": " + team1Score.toString() + ", " + team2 + ": " + team2Score.toString();
    }
  }
  
  return team1 + ": " + team1Score.toString() + ", " + team2 + ": " + team2Score.toString();
}