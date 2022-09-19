var userName = "Giuli";

teams = ["Braves", "Nationals","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dodgers","Diamondbacks","Giants","Padres","Rockies",];
wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];

var tempHighWins = 0;
var tempLeader = 0;

for (var i=0; i<teams.length; i++){ //i++ is shorthand for i=i+1, i-- is shorthand for i=i-1
  if(wins[i] >= tempHighWins){
    tempHighWins = wins[i];
    tempLeader = i;
  }
}

console.log(teams[tempLeader]);

console.log("The team with the most wins are the " + teams[tempLeader] + " with " + tempHighWins);

//.replace code from https://stackoverflow.com/questions/52170926/adding-strong-tag-in-a-variable
var Dodgers = teams[tempLeader].replace(teams[tempLeader], '<strong>' + teams[tempLeader] + '</strong>');
console.log(Dodgers);
// document.write(Dodgers);

//indexOf replacement code from https://stackoverflow.com/questions/5915789/how-to-replace-item-in-array
var teams2 = teams.indexOf(teams[tempLeader]);

if (teams2 !== -1){
    teams[teams2] = Dodgers;
}

console.log(teams);

var tableBuilder = "";

tableBuilder = "<table> <tr> <th> Teams </th> <th> Wins </th> <th> Losses </th> </tr>";

for (var i=0; i<teams.length; i++){
    // console.log(teams[i]);

    tableBuilder += "<tr>" + "<td>" + teams[i] + "</td>" + "<td>" + wins[i] + "</td>" + "<td>" + losses[i] + "</td>" + "</tr>";
    // can also format as tableBuilder += `<tr> <td> ${teams[i]} </td> <td> ${wins[i]} </td> <td> ${losses[i]} </td> </tr>`;
}

// could also make tableBuilder like this if I hadn't already changed the teams array to put strong tags around the winner
// for (var i=0; i<teams.length; i++){
//   if (i ==tempLeader){
//     tableBuilder += `<tr> <td> <strong> ${teams[i]} </strong> </td> <td> <strong> ${wins[i]} </strong> </td> <td> <strong> ${losses[i]} </strong> </td> </tr>`;
//   }else {
//     tableBuilder += `<tr> <td> ${teams[i]} </td> <td> ${wins[i]} </td> <td> ${losses[i]} </td> </tr>`;
//   }
// }

// could also make tableBuilder like this if I hadn't already changed the teams array
// for (var i=0; i<teams.length; i++){
//   if (i ==tempLeader){
//     tableBuilder += `<tr> <td> <span id="leader"> ${teams[i]} </td> <td> ${wins[i]} </td> <td> ${losses[i]} </span> </td> </tr>`;
//   }else {
//     tableBuilder += `<tr> <td> ${teams[i]} </td> <td> ${wins[i]} </td> <td> ${losses[i]} </td> </tr>`;
//   }
// }
// then format span id in css

tableBuilder += "</table>"
document.getElementById('teams').innerHTML=tableBuilder;