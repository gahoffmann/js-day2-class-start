//main.js for learing JS in Day 2
var x = 2;
var userName = "steven";
var htmlBuilder = "";

teams = ["Braves", "Nationals","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dogers","Diamondbacks","Giants","Padres","Rockies",];
wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];


console.log(teams);
console.log(wins);
console.log(wins[x]);

htmlBuilder = '<h2>Teams:</h2>';
htmlBuilder += '<div class="team-list">';

for (var i=0; i<teams.length; i++){
  //console.log("inside the loop " + i);
  console.log(teams[i]);

  if (losses[i] >= 60){
    console.log("This team is horrible!");
  }else{
    console.log('This team is not that bad');
  }


  htmlBuilder += teams[i] + " wins: " + wins[i] + " Losses: " + losses[i] + "</br>";
  console.log(htmlBuilder);
}
htmlBuilder += "</div>";
document.getElementById('teams').innerHTML=htmlBuilder;


//logic to determin the team with the most wins.

var tempHighWins = 0;
var tempLeader = 0;

for (var i=0; i<teams.length; i++){
  if(wins[i] >= tempHighWins){
    tempHighWins = wins[i];
    tempLeader = i;
  }
}

console.log("The team with the most wins of " + tempHighWins + " is " + teams[tempLeader]);
