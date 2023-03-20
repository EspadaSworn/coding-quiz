var win=document.querySelector(".win");

var lose=document.querySelector(".lose");

var timerElemnt=document.querySelector(".timer-count");

var startBtn = document.querySelector(".start-button");

var isWin=false;
//timer
var timerInterval;
var timerCount;
var wins = 0;
var losses= 0;

function start(){
    isWin = false;
    timerCount=75;
    startTimer();
    timerElemnt.textContent= timerCount
}

function startTimer(){
    var timerInterval= setInterval(function(){
        timerCount--;
        timerElemnt.textContent=timerCount
        if (timerCount>=0){
            if (isWin && timerCount >0){
                clearInterval(timerInterval);
                winGame()
            }
        }
        if (timerCount===0){
            clearInterval(timerInterval);
        loseGame();
    }
    },1000
    );
}

startBtn.addEventListener("click", start);


document
    .querySelector(".reset-button")
    .addEventListener("click",function(event){
    var wins=0;
    var losses=0;
    setWins();
    setLosses();
});

function getWins() {
    var storedWins=localStorage.getItem("winCount");
    if(storedWins===null){
        wins=0;
    } else{
        wins=storedWins;
    }
    win.textContent=storedWins;
}

function getLosses(){
    var storedLosses=localStorage.getItem("lossCount");
    if(storedLosses===null){
        lose=0;
    } else{
        lose=storedLosses;
    }
    lose.textContent=storedLosses;
}



function winGame(){
    wordBlank.textContent="You Win";
    wins++;
    setWins();
}

function loseGame(){
    wordBlank.textContent="You lose";
    losses++;
    setLosses();
}


function setWins(){
    win.textContent=wins
    localStorage.setItem("winCount", wins);
}

function setLosses(){
    lose.textContent=losses;
    localStorage.setItem("lossCount",losses);
}

getWins();
getLosses();