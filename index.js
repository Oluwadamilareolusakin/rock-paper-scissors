var score = [0,0]

function computerPlay(){
    var outcomes = ['rock', 'paper', 'scissors']
    var x = Math.floor((Math.random()*3))
    return outcomes[x]
    //console.log(outcomes[x])
}


function playRound(computer,player,score,numberOfGames){
    
    switch(computer){
        case 'rock':
           if( player == 'paper'){
            //print("It's a tie!");
            score[0] = score[0]+1;
            //print("You won!");
            return ("You won!",score[0])
           } else if (player == 'rock'){
            return("It's a tie!")
           } else if(player == 'scissors'){
            //print("You lost");
            score[1] = score[1]+1;
            return ("You lost")
           }
           numberOfGames = numberOfGames - 1
           break;
        case 'paper':
            if( player == 'paper'){
                //print("It's a tie!")
                return("It's a tie!")
            } else if (player == 'scissors'){
                //print("You won!")
                score[0] = score[0]+1;
                return ("You won!",score[0])
            } else if (player == 'rock') {
                //print("You lost")
                score[1] = score[1]+1;
                return ("You lost")
            } 
            numberOfGames = numberOfGames - 1
            break;
        case 'scissors':
            if( player == 'scissors'){
                //print("It's a tie!")
                return("It's a tie!")
            } else if (player == 'rock'){
                //print("You won!")
                score[0] = score[0]+1;
                return ("You won!",score[0])
            } else if(player == 'paper') {
                //print("You lost")
                score[1] = score[1]+1;
                return ("You lost")
                
            }   
            
            
}
}
function submitPlayerSelection(){
    
    var playerSelection = document.getElementById("player-selection").value
    var outcomeComputer = computerPlay();
    var numberOfGames = document.getElementById('number-of-games').value
    if( numberOfGames > 0){
        document.getElementById('number-of-games-container').style = 'display:none'
    }
    if (numberOfGames = 0){
        document.getElementById('number-of-games-container').style = 'display:none'
        document.getElementById('player-selection-container').style = 'display:none'
    }
    
    var x = document.getElementById("number-of-games")
    
    playRound(outcomeComputer,playerSelection,score,numberOfGames)
    
    document.getElementById("game-score").innerHTML = 'Human: ' + score[0] + ' - ' + score[1] + ' : Computer'
    document.getElementById('number-of-games').stepDown(1)
    console.log(numberOfGames)
}

/*function game(){
      var  count;
      score = [0,0]
      for(count = 5; count > 0; count--){
        var playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
        var outcomeComputer = computerPlay();
        var res = playRound(playerSelection, outcomeComputer,score);
        
        console.log(score);
        console.log(res)
      };
      if (score[0] > score[1]){
        final = 'Human player won'
    } else if (score[0] < score[1]){
        final = 'Computer won'
    } else {
        final = "It's a tie"
    }
    console.log(final)
}*/

/*game()*/



