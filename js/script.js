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
       if(currentHumanGuess > 9){
        alert("Your guess should be between 0-9")
    }
        if(humanGuess === compGuess){
            return true
        }else if(humanGuess > compGuess){
            return false
        }else{
            return true
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