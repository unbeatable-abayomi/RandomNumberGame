// const computerGuessDisplay = document.getElementById('computer-guess');
// const humanScoreDisplay = document.getElementById('human-score');
// const computerScoreDisplay = document.getElementById('computer-score');
// const targetNumberDisplay = document.getElementById('target-number');
// const computerWinsDisplay = document.getElementById('computer-wins');


let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// generateTarget target function
function generateTarget(){
    let randomNum = Math.floor(Math.random() * 10)
    return randomNum;
}





// compareGuesses function

 function compareGuesses(currentHumanGuess,computerGuess,target){
           
    let humanGuess = Math.abs(currentHumanGuess-target)
       let compGuess = Math.abs(computerGuess-target)
    
       if(currentHumanGuess > 9 || currentHumanGuess < 0 ){
           alert("Your guess should be between the range of 0-9")
           computerGuessDisplay.innerText = "?"; 
           targetNumberDisplay.innerText ="?";  
         computerGuessDisplay = null;
           return computerGuess
       }else{
        if(humanGuess === compGuess){
                     return true
                 }else if(humanGuess > compGuess){
                     return false
                 }else{
                     return true
                }
       }
    

 }


 function updateScore(score) {
     if(score === 'human'){
         humanScore += 1;
     }else if(score === 'computer'){
        computerScore += 1;
     }
 }


 function advanceRound() {
    currentRoundNumber += 1;
 } 