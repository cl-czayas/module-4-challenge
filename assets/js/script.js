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

var count = questions.length * 10;
var qIndex = 0;
var questionH = document.querySelector("#qHeading")

function askQuestion() {

    var questionAsked = questions[qIndex];
    questionH.textContent = questionAsked.inquiry;

    choicesEl.innerHTML = "";

    questionAsked.choices.forEach(function(choice, i) {
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice");
        choiceBtn.setAttribute("value", choice);
    
        choiceBtn.textContent = choice;
    
        choiceBtn.addEventListener("click", chooseAnswer());
    
        choicesEl.appendChild(choiceBtn);
        });
    }

function chooseAnswer() {
    if (this.value == questions[qIndex].answer) {
        qIndex++;
        chooseAnswer();}
}

function clockTick() {
    count--;
    countdownEl.textContent = count;
}

beginButton.addEventListener("click", function() {
    var startBox = document.getElementById("start-box");
    startBox.setAttribute("class", "hidden");
    questionsEl.setAttribute("class", "shown")
    

    setInterval(clockTick, 1000);

    countdownEl.textContent = count;

    askQuestion()
}
)