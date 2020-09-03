function computerPlay(){
    var outcomes = ['rock', 'paper', 'scissors']
    var x = Math.floor((Math.random()*3))
    return outcomes[x]
    //console.log(outcomes[x])
}

const game = (
    () => {
        let numOfRounds = 0;
        const playRound = (e) =>{
            let playerSymbol = e.target.innerHTML.toLowerCase();
            let computer = computerPlay();
            
            if (numOfRounds < 6) {
                switch(computer){
                    case 'rock': 
                        if( playerSymbol == 'rock'){
                        res = "It's a tie! There are no winners in life, only those who don't lose"
                        } else if (playerSymbol === 'paper'){
                        res = "You won! Or did you just lose at losing ? :)"
                        } else {
                            res = "Computer won this time! The reign of the machina begins now! (Evil Laugh)";
                        }
                        break;
                    case 'paper':
                        if( playerSymbol == 'paper'){
                           res = "It's a tie! There are no winners in life, only those who don't lose"
                        } else if (playerSymbol == 'scissors'){
                            res = "You won! Or did you just lose at losing ? :)"
                        } else {
                            res = "Computer won this time! The reign of the machina begins now! (Evil Laugh)"
                        } 
                        break;
                    case 'scissors':
                        if( playerSymbol == 'scissors'){
                            res = "It's a tie! There are no winners in life, only those who don't lose"
                        } else if (playerSymbol == 'rock'){
                            res = "You won! Or did you just lose at losing ? :)"
                        } else {
                            res = "Computer won this time! The reign of the machina begins now! (Evil Laugh)"
                        }       
                }
                document.querySelector('#winner').textContent = res
                document.querySelector('p#choices').textContent = 'You ' + playerSymbol + ", Computer " + computer 
                numOfRounds++
            }
        }

        return {
            numOfRounds, playRound
        }
    }
)()



document.addEventListener("DOMContentLoaded", () =>{
    let buttons = document.querySelectorAll('.button');
    buttons.forEach((button) => button.addEventListener('click', game.playRound))
})
