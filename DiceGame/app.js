var diceInput = document.getElementById('diceImg');
var score1 = document.getElementById('score1');
var score2 = document.getElementById('score2');
var btnRollDice = document.getElementById('btnRollDice');
var playerTurnMsg = document.getElementById('playerTurnMsg');
playerTurnMsg.innerText = "PLAYER 1 IS PLAYING NOW";
var display1 = document.getElementById('display1');
display1.style.backgroundColor = "#f71414";
var display2 = document.getElementById('display2');
var turn = "";
var totalScore1 = 0;
var totalScore2 = 0;
btnRollDice.addEventListener('click', function () {
    var diceNum = Math.ceil((Math.random() * 6));
    diceInput.innerHTML = "<img src='Img/" + diceNum + ".png' class='img-fluid imgDice' alt='dice'/>";
    if (diceNum == 1) {
        turn = switchPlayer(turn);
        if (turn === 'player2') {
            playerTurnMsg.innerText = "PLAYER 2 IS PLAYING NOW";
            display1.style.backgroundColor = "";
            display2.style.backgroundColor = "#f71414";
        }
        else {
            playerTurnMsg.innerText = "PLAYER 1 IS PLAYING NOW";
            display2.style.backgroundColor = "";
            display1.style.backgroundColor = "#f71414";
        }
    }
    else if (diceNum != 1 && turn === 'player1' || diceNum != 1 && turn === '') {
        var gtScore = addPlayersScore1(diceNum);
        if (gtScore >= 50) {
            var msg = document.getElementById('msg');
            msg.innerText = "PLAYER 1 WON";
            setTimeout(function () {
                window.location.reload();
            }, 3000);
        }
    }
    else if (diceNum != 1 && turn === 'player2') {
        var gtScore = addPlayersScore2(diceNum);
        if (gtScore >= 50) {
            var msg = document.getElementById('msg');
            msg.innerText = "PLAYER 2 WON";
            setTimeout(function () {
                window.location.reload();
            }, 3000);
        }
    }
});
function switchPlayer(turn) {
    if (turn === 'player1' || turn === '') {
        turn = '';
        turn = 'player2';
        return turn;
    }
    else {
        turn = '';
        turn = 'player1';
        return turn;
    }
}
function addPlayersScore1(diceNum) {
    totalScore1 += diceNum;
    score1.innerText = totalScore1.toString();
    return totalScore1;
}
function addPlayersScore2(diceNum) {
    totalScore2 += diceNum;
    score2.innerText = totalScore2.toString();
    return totalScore2;
}
