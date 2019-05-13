# Pig-Dice
#### A simple dice game with two players. Each player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold". The player who first scores 100 or more points wins., 10/05/2019
#### By **Solomon Oloo Ouma**
## Description
A simple dice game with two players. Each player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold". The player who first scores 100 or more points wins.
The rules of the game are:
* When a player rolls a 1, their  total score reverts to 0 and it becomes the next player's turn.
* When the player rolls a 2 - 6, the score is added to their turn total and they can continue to play
* When the player chooses to "hold", their turn total is added to their total score, and it becomes the next player's turn.
* The player who first scores 100 or more points wins.
## BDD
1. It can display the inputted name of the players when 'Play' is clicked.
* Input:

         Player1: Jermaine
         Player2: Cole
* Output:
         
         Players:   Jermaine              Cole
 
 2. Player1 can roll the dice and the result displayed as their turn score.
 * Input:
 
        'Roll' button is clicked
        Dice Score: 3 
 * Output:
  
         Turn Score: 6
  
3. Player1 can hold the dice and their turn total score is added to their total score. Player2 then has the chance to play.
 * Input: 
 
         'Hold' button is clicked.
 * Output:
  
          Turn Score: 3
          Total Score: 9
          
4. Player2 can roll the dice and the result displayed as their turn score.
 * Input:
 
        'Roll' button is clicked
        Dice Score: 2
 * Output:
  
         Turn Score: 5
  
5. Player2 can hold the dice and their turn score is added to their total score. Player1 then has the chance to play.
 * Input: 
  
          'Hold' button is clicked.
 * Output:
  
          Turn Score: 4
          Total Score: 9        
          
6. If a player's dice score is a 1, their turn score will be reduced to 0.
  * Input:
      
            'Roll' button is clicked
            Dice Score: 1
   * Output: 
            
            Previous Turn Score: 30
            New Turn Score: 0
    

          
## Known Bugs
There are no known bugs
## Technologies Used
HTML,CSS,JavaScript,JQuery,Bootstrap
## Support and contact details
oloosolomon@gmail.com,0743146139
### License
Copyright (c) 2019 **Solomon Oloo Ouma**
