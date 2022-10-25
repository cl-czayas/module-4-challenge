var questionsEl = document.querySelector("#question-box");
var countdownEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");
var beginButton = document.querySelector("#begin");

var questions=[
    {
    inquiry: "Which of the following helps developers organize our goals before writing any code?",
    choices: ["pseudocode", "boolean", "debugging", "for loops"],
    answer: "pseudocode"
    },
    {
    inquiry: "Which of these is not a commonly used data type?",
    choices: ["strings", "alerts", "booleans", "numbers"],
    answer: "alerts"
    },
    {
    inquiry: "JavaScript is used to:",
    choices: [
        "provide style to a webpage",
        "direct users to other pages",
        "add interactivity to a webpage",
        "none of the above"
    ],
    answer: "add interactivity to a webpage"
    },
    {
    inquiry: "Which of the following is a Web API?",
    choices: [
        "a function",
        "the css file",
        "the DOM",
        "elements"
    ],
    answer: "the DOM"
    }
]

var timer;
var count = questions.length * 10;

beginButton.addEventListener("click", function() {
    var startBox = document.getElementById("start-box");
    startBox.setAttribute("class", "hidden");
    questionsEl.removeAttribute("class");

    var timer = setInterval(clockTick, 1000);

    countdownEl.innerHTML = count;
}
)