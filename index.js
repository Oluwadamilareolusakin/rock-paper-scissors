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
    console.log(ccs)
})


const playRound = () =>{
    let player = document.getElementById('player-selection').value.toLowerCase().trim();
    let computer = computerPlay();

    switch(computer){
        case 'rock': 
            if( player == 'rock'){
            res = "It's a tie! There are no winners in life, only those who don't lose"
            } else if (player === 'paper'){
            res = "You won! Or did you just lose at losing ? :)"
            } else {
                res = "Computer won this time! The reign of the machina begins now! (Evil Laugh)";
            }
            break;
        case 'paper':
            if( player == 'paper'){
               res = "It's a tie! There are no winners in life, only those who don't lose"
            } else if (player == 'scissors'){
                res = "You won! Or did you just lose at losing ? :)"
            } else {
                res = "Computer won this time! The reign of the machina begins now! (Evil Laugh)"
            } 
            break;
        case 'scissors':
            if( player == 'scissors'){
                res = "It's a tie! There are no winners in life, only those who don't lose"
            } else if (player == 'rock'){
                res = "You won! Or did you just lose at losing ? :)"
            } else {
                res = "Computer won this time! The reign of the machina begins now! (Evil Laugh)"
            }       
    }
    document.querySelector('#winner').textContent = res
    document.querySelector('p#choices').textContent = 'You ' + player + ", Computer " + computer 
}



