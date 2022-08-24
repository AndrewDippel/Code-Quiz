var startButton = document.getElementById("startQuiz");
var highscorePage = document.getElementById("highscore");
var backToGame = document.getElementById("backToGame");
var submit = document.getElementById("submit");
var timerElement = document.getElementById("timerElement");
var displayQuestion = document.getElementsByClassName(".question");
var timerCount = 75;
var win = false;
var score = 0;
var questions = [{
    question: "Commonly used data types DO NOT include:",
    choices: ['a. String', '.b Boolean', '.c Alerts', '.d Numbers'],
    answer: '.c Alerts'
}, {
    question: "The condition in an if / else statement is enclosed within _____.",
    choices: ['.a Quotes', '.b Curly Brackets', '.c Parenthesis', '.d Square Brackets'],
    answer: '.b Curly Brackets'
}, {
    question: "Arrays in JavaScript can be used to store _____.",
    choices: ['.a Numbers and Strings', '.b Other Arrays', '.c Booleans', '.d All Of The Above'],
    answer: '.d All Of The Above'
}, {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    choices: ['.a Commas', '.b Curly Brackets', '.c Quotes', '.d Parenthesis'],
    answer: '.a Commas'
}, {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ['.a JavaScript', '.b Terminal/Bash', '.c For Loops', '.d console.log'],
    answer: '.d console.log'
}];

function startQuiz() {
    console.log("yes")

    var timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = "Timer: " + timerCount;
        if (timerCount >= 0 && win) {
            clearInterval(timer);
            console.log("WON");
        }
        if (timerCount <= 0) {
            clearInterval(timer);
            console.log("lost");
        }
    }, 1000);
}
function generateQuestion() {
    for (var i = 0; i < questions.length; i++) {
        startButton.addEventListener("click", pushQuestion() {
            displayQuestion.push("questions[0]")
        })
    } console.log(i);
}


/*for (var i = 0; i < questions.length; i++) {
    var response = document.
        if(response == question[i].answer) {
            score++;
} else {
    timerCount - 10;
}
}*/


startButton.addEventListener("click", startQuiz);