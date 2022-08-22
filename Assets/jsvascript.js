var startButton = document.getElementById("startQuiz");
var highscorePage = document.getElementById("highscore");
var backToGame = document.getElementById("backToGame");
var submit = document.getElementById("submit");
var timerElement = document.getElementById("timerElement");
var timerCount = 75;

function startQuiz() {
    console.log("yes")

var timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = "Timer: " + timerCount;
    if (timerCount >= 0) {
        
    }
        if (timerCount === 0) {
        clearInterval(timer);
        }

}, 1000);
}

startButton.addEventListener("click", startQuiz);