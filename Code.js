

let playerdata = JSON.parse(jsonstr);
let player_battle_log = JSON.parse(json_battle_log);

//Code for cards
/*
data.items.forEach(item => {
    document.write("Name: " + item.name + " Max Level: " + item.maxLevel + '<br>');
  });
  
document.write("Name: " + playerdata.name + "<br>");
document.write("Tag: " + playerdata.tag + "<br>");
document.write("Wins: " + playerdata.wins + "<br>" + "<br>");

playerdata.cards.forEach(cards => {
  document.write(cards.name + " Level: " + cards.level + '<br>');
});
*/
//Code for Player

console.log(player_battle_log.length)

for(i = 0 ; i < player_battle_log.length ; i++){
    let log_data = player_battle_log[i];

    console.log(log_data);
}
document.write(player_battle_log[3].opponent[0].name +'<br>');
