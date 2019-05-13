$(document).ready(function(){
    $("#chike").click(function(){
        $("#inst").slideToggle();
    });
    $("#tugo").click(function(){
      $(".player1").slideToggle();
      $(".player2").slideToggle();
    });
});
var diceRoll,roundScore1,finalScore1,finalScore2;
roundScore1 = 0;
roundScore2 = 0;
finalScore1 = 0;
finalscore2 = 0;

$("#rol1").click(function(){
  var randomNo = Math.floor((Math.random() * 6) + 1);
  if (randomNo === 1){
    roundScore1 = 0;
    $("#diceRoll1").text(randomNo);
    $("#roundScore1").text(roundScore1);
  }
})
