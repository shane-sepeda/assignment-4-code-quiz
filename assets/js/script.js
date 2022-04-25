// Set Global Variables
var contentEl = document.querySelector("#content");
var welcomeEl = document.querySelector("#welcome");
var finalScore = document.querySelector("#score");
var startEl = document.querySelector("#start"); 
var quizEl = document.querySelector("#quiz")
var choicesEl = document.querySelector("#choices");
var questionEl = document.querySelector("#question");
var nextEl = document.createElement("button"); nextEl.className = "choice"; nextEl.setAttribute("id", "next");
var timerEl = document.querySelector("#timer");
var inputEl = document.querySelector("#input");
var timeLeft=90;
// End Set Global Variables

// Set Quiz Questions
var questions = [
    { id: 0,
        question: "______ tag is an extension to HTML that can enclose any number of JavaScript statements",
        answer: [{ choice: "A. <title>", correctAnswer: false},
             { choice: "B. <head>", correctAnswer: false},
             { choice: "C. <main>", correctAnswer: false},
             { choice: "D. <script>", correctAnswer: true}
            ],
        correct: "D. <script>"
        },

    { id: 1,
        question: " JavaScript is interpreted by _________",
        answer: [{ choice: "A. Server", correctAnswer: false},
            { choice: "B. Client", correctAnswer: true},
            { choice: "C. Object", correctAnswer: false},
            { choice: "D. None", correctAnswer: false}
            ],
        correct: "B. Client"
        },

     { id: 2,
        question: "What is the correct syntax for referring to an external script called abc.js",
        answer: [{ choice: "A. <script href='abc.js'>", correctAnswer: false},
                { choice: "B. <script name='abc.js'>", correctAnswer: false},
                { choice: "C. <script src='abc.js'>", correctAnswer: true},
                { choice: "D. None", correctAnswer: false}
                ],
        correct: "C. <script src='abc.js'>"
        }, 
];
// End Set Quiz Questions

// Set Quiz Function 
var quiz = function (id) {
        choicesEl.innerHTML ="";
        questionEl.innerHTML ="";
        questionEl.textContent = questions[id].question;
        
        var choice1El = document.createElement("button");
        choice1El.className = "choice";       
        choice1El.setAttribute("id", "choice1");

        var choice2El = document.createElement("button");
        choice2El.className = "choice";
        choice2El.setAttribute("id", "choice2");

        var choice3El = document.createElement("button");
        choice3El.className = "choice";
        choice3El.setAttribute("id", "choice3");

        var choice4El = document.createElement("button");
        choice4El.className = "choice";
        choice4El.setAttribute("id", "choice4");

        choicesEl.appendChild(choice1El);
        choicesEl.appendChild(choice2El);
        choicesEl.appendChild(choice3El);
        choicesEl.appendChild(choice4El);
        choicesEl.appendChild(nextEl);
        
        choice1El.textContent = questions[id].answer[0].choice;
        choice2El.textContent = questions[id].answer[1].choice;
        choice3El.textContent = questions[id].answer[2].choice;
        choice4El.textContent = questions[id].answer[3].choice;
        nextEl.textContent = "Next";            

        choice1El.addEventListener("click", () => {
                if (questions[id].correct === choice1El.textContent) {
                        timeLeft = timeLeft;
                        console.log(timeLeft);
                } else {
                        timeLeft = timeLeft - 15;
                        console.log(timeLeft);
                        
                }});
        
        choice2El.addEventListener("click", () => {
                if (questions[id].correct === choice2El.textContent) {
                        timeLeft = timeLeft;
                        console.log(timeLeft);
                        } else {
                                timeLeft = timeLeft - 15;
                                console.log(timeLeft);
                                
                        }});

        choice3El.addEventListener("click", () => {
                if (questions[id].correct === choice3El.textContent) {
                        timeLeft = timeLeft;
                        console.log(timeLeft);
                } else {
                        timeLeft = timeLeft - 15;
                        console.log(timeLeft);
                        
                }});

        choice4El.addEventListener("click", () => {
                if (questions[id].correct === choice4El.textContent) {
                        timeLeft = timeLeft;
                        console.log(timeLeft);
                } else {
                        timeLeft = timeLeft - 15;
                        console.log(timeLeft);
                        
                }});   
        
};
// End Set Quiz Function


// Set Next Button
var nextBtn = function(){
        var id = 0; 
        var timeInterval = setInterval(function () {
                if (timeLeft > 1) {
                        timerEl.textContent = "Time Remaining: " + timeLeft;
                        timeLeft--;
                } else { 
                        timerEl.textContent = '';
                        clearInterval(timeInterval);
                        }
                }, 1000);
        
        quiz(id);
                next.addEventListener("click", function () {
                if (id < questions.length - 1) {
                        id++;
                        quiz(id);
                        console.log(id);
                } else if (id >= questions.length - 1 || timeLeft === 0) {
                        timerEl.textContent = "";
                        clearInterval(timeInterval);
                        console.log("Time Remaining =" + timeLeft);
                        localStorage.setItem("Time Remaining", timeLeft);
                        initials();                               
                }
        });               
};
// End Set Next Button

// Set Initials function
var initials = function() {
        choicesEl.innerHTML ="";
        questionEl.innerHTML ="";
        localStorage.getItem("Best time", timeLeft);
        timerEl.textContent = "Time Remaining: " + timeLeft;

        var inputText1 = document.createElement("h2");
        inputText1.textContent = "Complete"

        var inputText2 = document.createElement("h3");
        inputText2.textContent = "Final score " + timeLeft+".";

        var inputBox = document.createElement("input");
        inputBox.type = "text";
        inputBox.setAttribute("id", "input");

        var inputLabel = document.createElement("Label");
        inputLabel.setAttribute("for", "input");
        inputLabel.setAttribute("id", "label");
        inputLabel.innerHTML = "Enter initials: ";

        var submitButton = document.createElement("button");
        submitButton.className = "btn";
        submitButton.setAttribute("id", "submitBtn");
        submitButton.textContent = "Submit";

        inputEl.appendChild(inputText1);
        inputEl.appendChild(inputText2);
        inputEl.appendChild(inputLabel);
        inputEl.appendChild(inputBox);
        inputEl.appendChild(submitButton);
        
        submitButton.addEventListener("click", function submit () {
                var value = inputBox.value;
                console.log(value);
                localStorage.setItem("initials", value);   
                result();            
        });
};
// End Set initials function 

// Create Result function
var result = function() {
        inputEl.innerHTML = "" ;
        timerEl.innerHTML ="";
        var finalTime = localStorage.getItem("Time Remaining");
        var initials = localStorage.getItem("initials");   
        var finalText1 = document.createElement("h2");
        finalText1.textContent = "Score";
        var finalText2 = document.createElement("p");
        finalText2.textContent = "1. " + initials + " - " + finalTime;
        finalScore.appendChild(finalText1);
        finalScore.appendChild(finalText2);             
};
// End Result function

// Start Quiz by clicking on button on main page
startEl.addEventListener("click", nextBtn);