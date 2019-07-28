/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var activePlayer, scores, roundScore, gamePlaying;


start_game();


document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying){
        var dice1 = Math.floor(Math.random() * 6 ) + 1;
        var dice2 = Math.floor(Math.random() * 6 ) + 1;
        document.getElementById('dice-1').style.visibility= 'visible';
        document.getElementById('dice-2').style.visibility= 'visible';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        
        if(dice1 !== 1 && dice2 !== 1){
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else {
            NextPlayer();
        }
//        if(dice>1){
//            if(dice === 6 && previousDice){
//                scores[activePlayer] = 0;
//                document.getElementById('score-' + activePlayer).textContent = 0;
//                previousDice=false;
//                NextPlayer();
//            }
//            else{
//                roundScore += dice;
//                document.querySelector('#current-' + activePlayer).textContent = roundScore;
//            }
//            if(dice === 6){
//                previousDice = true;
//            } else{
//                previousDice = false;
//            }
//        } 
//        else{
//            NextPlayer();
//        }
    }
})
document.querySelector('.btn-hold').addEventListener('click', function() {

    if (gamePlaying){        
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];    
        
        var finalScore = document.querySelector('.final-score').value;

        if (finalScore){
        } else{
            finalScore = 50
        }
            
        if(scores[activePlayer] >= finalScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');
            document.getElementById('current-' + activePlayer).textContent = 0;
            document.getElementById('dice-1').style.visibility = "hidden";
            document.getElementById('dice-2').style.visibility = "hidden";
            document.querySelector('.btn-roll').style.visibility = "hidden";
            document.querySelector('.btn-hold').style.visibility = "hidden";
            gamePlaying = false;
        }
        else{
            NextPlayer();
        }

    }
});



function NextPlayer(){    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('dice-1').style.visibility = "hidden";
    document.getElementById('dice-2').style.visibility = "hidden";
}



document.querySelector('.btn-new').addEventListener('click', start_game);



function start_game(){
    gamePlaying = true;
    previousDice = false;
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('dice-1').style.visibility = "hidden";
    document.getElementById('dice-2').style.visibility = "hidden";
    document.querySelector('.btn-roll').style.visibility = "visible";
    document.querySelector('.btn-hold').style.visibility = "visible";
}