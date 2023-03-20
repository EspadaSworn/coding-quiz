
var win=document.querySelector(".win");

var lose=document.querySelector(".lose");

var timerElemnt=document.querySelector(".timer-count");

var startBtn = document.querySelector(".start-button");

var isWin=false;
//timer
var timerInterval;
var timerCount;
var wins = 0;

var paragraphEl=document.querySelector(".question");

//create ordered list element --adding these stop the timer
//var listEl= document.createElement("div");
//create ordered list items
//var li1 = document.createdElement("li");
//var li2 = document.createdElement("li");
//var li3 = document.createdElement("li");
//var li4 = document.createdElement("li");

//add test for list items

// at 3:30 of api describes use of javascript to create elements that dont exist at start

var index = 0;
while (index<services.length){//create a html element taht lives in js until added to html
    var liEl =document.createElement("h3");
    var liEl =document.createElement("li");
    //add data to the new html element
    liEl.textContent=("Commonly used data types Do Not include: ")
    //attach it back to the html
    liEl.appendChild(liEl); 
}


function start(){
    isWin = false;
    timerCount=5;
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
    question.textContent="You lose";
    losses++;
    setLosses();
}

function checkWin(){
    if(chosenWord===blankLetters.join("")){ //change to make if on last question===last question
        isWin=true;
    }
}

function setWins(){
    win.textContent=wins
    localStorage.setItem("winCount", wins);
}


getWins();
getLosses();

//add listel to section
section.appendChild(listEl);