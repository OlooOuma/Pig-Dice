$(document).ready(function(){
    $("#chike").click(function(){
        $("#inst").slideToggle();
    });
    $("#tugo").click(function(){
      $(".player1").slideToggle();
      $(".player2").slideToggle();
    });
});
// function Player(turn) {
//   this.turn = turn;
//   this.roll = 0;
//   this.turnScore = 0;
//   this.totalScore = 0;
// }
// Player.prototype.roll1 = function() {
//   if (this.roll === 1) {
//     this.turnScore = 6;
//     alert("Next Player");
//   } else {
//     this.turnScore += this.roll;
//   }
// }
// Player.prototype.hold = function() {
//   this.totalScore += this.turnScore;
//   this.turnScore = 0;
//   alert("Next Player");
// }
// var player1 = new Player();
// var player2 =  new Player();
//
// $(document).ready(function() {
//   $("#rol1").click(function(){
//     player1.roll = rollDice();
//     $("#score1").text(player1.roll);
//     player1.roll1();
//     $("#points1").text(player1.turnScore);
//   });
//   $("#roll2").click(function(){
//     player2.roll = rollDice();
//     $("#score2").text(player2.roll);
//     player2.roll1();
//     $("#points2").text(player2.turnScore);
//   });
//
//   $("#hold1").click(function(){
//   player1.hold();
//   $("#score1").text(player1.totalScore);
//   $("#points1").empty();
//   $("#poi1").empty();
//   });
//   $("#hold2").click(function(){
//   player2.hold();
//   $("#score2").text(player2.totalScore);
//   $("#points2").empty();
//   $("#poi2").empty();
//   });
// })
