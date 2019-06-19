function computerPlay(){
    var outcomes = ['rock', 'paper', 'scissors']
    var x = Math.floor((Math.random()*3))
    return outcomes[x]
    //console.log(outcomes[x])
}

document.addEventListener("DOMContentLoaded", () =>{
    let go = document.querySelector('button');
    go.addEventListener('click',playRound) 
})


const playRound = () =>{
    let player = document.getElementById('player-selection').value.toLowerCase();
    let computer = computerPlay();
    switch(computer){
        case 'rock':
           if( player == 'rock'){
            console.log("It's a tie!")
            //return("It's a tie!")
           } else if (player === 'paper'){
            console.log("You won!")
            //return ("You won!")
           } else {
            console.log("You lost")
            //return ("You lost")
           }
           break;
        case 'paper':
            if( player == 'paper'){
                console.log("It's a tie!")
                //return("It's a tie!")
            } else if (player == 'scissors'){
                console.log("You won!")
                //return ("You won!")
            } else {
                console.log("You lost")
                //return ("You lost")
            } 
            break;
        case 'scissors':
            if( player == 'scissors'){
                //console.log("It's a tie!")
                console.log("It's a tie!")
            } else if (player == 'rock'){
                //console.log("You won!")
                console.log("You won!")
            } else {
                //console.log("You lost")
                console.log("You lost")
            }   
            

}
}



