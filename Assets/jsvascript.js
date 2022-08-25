var startButton = document.getElementById("startQuiz");
var submit = document.getElementById("submit");
var timerElement = document.getElementById("timerElement");
var displayQuestion = document.querySelector(".questions");
var input = document.getElementById("initialsInput");
var printInput = localStorage.getItem("initials");
var submit = document.getElementById("submit");
var currentQuestionIndex = 0;
//var currentChoices =
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

    generateQuestion();
};
//generate question to html using dom manipulation
function generateQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion);
    var createQuestion = document.createElement("h2");
    createQuestion.id = "questionSection";
    createQuestion.textContent = currentQuestion.question;
    displayQuestion.appendChild(createQuestion);
};
function generateChoices() {

};


//stor input from form to be displayed on highscore page
submit.addEventListener('click', function () {
    var initials = input.value;
    localStorage.setItem("initials", initials);
    console.log(localStorage);
});

/*for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).indexOf("initials") !== -1) {
        var item = document.createElement("li");
        item.textContent = localStorage.getItem(localStorage.key(i));
        list.appendChild(item);
    }
};*/


startButton.addEventListener("click", startQuiz);