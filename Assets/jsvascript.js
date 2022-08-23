var startButton = document.getElementById("startQuiz");
var highscorePage = document.getElementById("highscore");
var backToGame = document.getElementById("backToGame");
var submit = document.getElementById("submit");
var timerElement = document.getElementById("timerElement");
var timerCount = 3;
var win = false;
var score = 0;
var questions = [{
    question: "Commonly used data types DO NOT include:"\n(a) 'String'\n(b) 'Boolean'\n(c) 'Alerts'\n(d) 'Numbers',
    answer: "c"
}, {
    question: "The condition in an if / else statement is enclosed within _____."\n(a) 'Quotes'\n(b) 'Curly Brackets'\n(c) 'Parenthesis'\n(d) 'Square Brackets',
    answer: "b"
}, {
    question: "Arrays in JavaScript can be used to store _____."\n(a) 'Numbers and Strings'\n(b) 'Other Arrays'\n(c) 'Booleans'\n(d) 'All Of The Above',
    answer: "d"
}, {
    question: "String values must be enclosed within _____ when being assigned to variables."\n(a) 'Commas'\n(b) 'Curly Brackets'\n(c) 'Quotes'\n(d) 'Parenthesis',
    answer: "a"
}, {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:" \n(a) 'JavaScript'\n(b) 'Terminal/Bash'\n(c) 'For Loops'\n(d) 'console.log',
    answer: "d"
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
for (var i = 0; i < questions.length; i++) {
    var response = document.
        if(response == question[i].answer) {
            score++;
} else {
    timerCount - 10;
}
}


startButton.addEventListener("click", startQuiz);