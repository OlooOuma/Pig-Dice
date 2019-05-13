
$(document).ready(function(){
    $("#chike").click(function(){
        $("#inst").slideToggle();
    });
});
function Player(turn) {
  this.turn = turn;
  this.roll = 0;
  this.turnScore = 0;
  this.totalScore = 0;
}
function rollDice(){
  return Math.floor(6 * Math.random())+1;
}
