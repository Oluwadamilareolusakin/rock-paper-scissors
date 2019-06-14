function computerPlay(){
    var outcomes = ['rock', 'paper', 'scissors']
    var x = Math.floor((Math.random()*3))
    return outcomes[x]
    //console.log(outcomes[x])
}


var playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
var outcomeComputer = computerPlay()
return (playRound(outcomeComputer, playerSelection))

function playRound(computer,player){
    switch(computer){
        case 'rock':
           if( player == 'rock'){
            print("It's a tie!")
            //return("It's a tie!")
           } else if (player == 'paper'){
            print("You won!")
            //return ("You won!")
           } else {
            print("You lost")
            //return ("You lost")
           }
           break;
        case 'paper':
            if( player == 'paper'){
                print("It's a tie!")
                //return("It's a tie!")
            } else if (player == 'scissors'){
                print("You won!")
                //return ("You won!")
            } else {
                print("You lost")
                //return ("You lost")
            } 
            break;
        case 'scissors':
            if( player == 'scissors'){
                //print("It's a tie!")
                return("It's a tie!")
            } else if (player == 'rock'){
                //print("You won!")
                return ("You won!")
            } else {
                //print("You lost")
                return ("You lost")
            }   
            

}
}




