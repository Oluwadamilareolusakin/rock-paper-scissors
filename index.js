function computerPlay(){
    var outcomes = ['rock', 'paper', 'scissors']
    var x = Math.floor((Math.random()*3))
    return outcomes[x]
    //console.log(outcomes[x])
}


function playRound(computer,player,score){
    switch(computer){
        case 'rock':
           if( player == 'rock'){
            //print("It's a tie!");
            return("It's a tie!")
           } else if (player == 'paper'){
            //print("You won!");
            score[0] = score[0]+1;
            return ("You won!")
           } else {
            //print("You lost");
            score[1] = score[1]+1;
            return ("You lost")
           }
           break;
        case 'paper':
            if( player == 'paper'){
                //print("It's a tie!")
                return("It's a tie!")
            } else if (player == 'scissors'){
                //print("You won!")
                score[0] = score[0]+1;
                return ("You won!")
            } else {
                //print("You lost")
                score[1] = score[1]+1;
                return ("You lost")
            } 
            break;
        case 'scissors':
            if( player == 'scissors'){
                //print("It's a tie!")
                return("It's a tie!")
            } else if (player == 'rock'){
                //print("You won!")
                score[0] = score[0]+1;
                return ("You won!")
            } else {
                //print("You lost")
                score[1] = score[1]+1;
                return ("You lost")
            }   
            

}
}
function submitPlayerSelection(){
    var playerSelection = document.getElementById("player-selection").innerHTML
    var computer = computerPlay();
    var score = [0,0]
    playRound(computer,playerSelection,score)
    console.log(score[0])
    console.log(score[1])
    document.getElementById("game-score").innerHTML = score[0] + '' + score[1]
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



