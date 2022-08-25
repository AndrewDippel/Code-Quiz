var startButton = document.getElementById("startQuiz");
var highscorePage = document.getElementById("highscore");
var backToGame = document.getElementById("backToGame");
var submit = document.getElementById("submit");
var timerElement = document.getElementById("timerElement");
var displayQuestion = document.getElementsByClassName(".question");
var input = document.getElementById("initialsInput");
var printInput = localStorage.getItem("storeInput");
var submit = document.getElementById("submit");
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

//timer that consol.logs if you win or loose
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
//generate question to html using dom manipulation
function generateQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var createQuestion = document.createElement("h2");
    var questionText = document.createTextNode("questions[0]");
    createQuestion.appendChild(questionText);
    Document.displayQuestion.appendChild(createQuestion);
}
//stor input from form to be displayed on highscore page
function storeInput() {
    localStorage.setItem("input", JSON.stringify(input));
    console.log("printInput: ", JSON.parse(printInput));
}

//for loop to check if answer is correct and to add to score or if loose minus 10 seconds from time  
/*for (var i = 0; i < questions.length; i++) {
    var response = document.
        if(response == question[i].answer) {
            score++;
} else {
    timerCount - 10;
}
}*/

startButton.addEventListener("click", startQuiz, generateQuestion);