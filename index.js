function computerPlay(){
    var outcomes = ['rock', 'paper', 'scissors']
    var x = Math.floor((Math.random()*3))
    return outcomes[x]
    //console.log(outcomes[x])
}

document.addEventListener("DOMContentLoaded", () =>{
    let ccs;
    let go = document.querySelector('button');
    go.addEventListener('click',playRound) 
    ccs+=playRound.ccs
    console.log(ccs)
})


const playRound = () =>{
    let player = document.getElementById('player-selection').value.toLowerCase();
    let computer = computerPlay();
    let ccs;
    let chs;
    let compscore=0;
    let humscore = 0;

    switch(computer){
        case 'rock':
           if( player == 'rock'){
            console.log("It's a tie!")
            //return("It's a tie!")
           } else if (player === 'paper'){
            console.log("You won!")
            humscore+=1;
            //return ("You won!")
           } else {
            console.log("You lost")
            //return ("You lost")
            compscore+=1;
           }
           break;
        case 'paper':
            if( player == 'paper'){
                console.log("It's a tie!")
                //return("It's a tie!")
            } else if (player == 'scissors'){
                console.log("You won!")
                humscore+=1;
                //return ("You won!")
            } else {
                console.log("You lost")
                //return ("You lost")
                compscore+=1;
            } 
            break;
        case 'scissors':
            if( player == 'scissors'){
                //console.log("It's a tie!")
                console.log("It's a tie!")
            } else if (player == 'rock'){
                //console.log("You won!")
                console.log("You won!")
                humscore+=1;
            } else {
                //console.log("You lost")
                console.log(compscore+=1)
                console.log("You lost")
            }   
    return chs += humscore, ccs += compscore;
}
}



