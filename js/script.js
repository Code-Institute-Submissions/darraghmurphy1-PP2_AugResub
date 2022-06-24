/*some of the main variables */
const rulesButton = document.getElementById('rules-btn');
const questionArea = document.getElementById('questionarea');
const ruleBox = document.getElementById('instructions');
const startButton = document.getElementById('start-btn');
const TIMEOUT = 300;
const nextButton = document.getElementById('next-btn');
let rightAnswerCount = 0;
let wrongAnswerCount = 0;
let totalScore = 0;
/* questions for the quiz */
let questions = [{
  number: 1,
  question: "What was the name of the French football player who was infamously sent off in the 2006 World Cup Final?",
  answers: ["Thierry Henry", "Frank Ribery", "Zinedine Zidane", "William Gallas"],
  correctAnswer: "Zinedine Zidane",
},
{
  number: 2,
  question: "Which of these sports was NOT at the first Modern Olympics in Athens in 1896?",
  answers: ["Wrestling", "Rowing", "Shooting", "Boxing"],
  correctAnswer: "Boxing",
},
{
  number: 3,
  question: "The only city to have hosted both the Summer and Winter Olympic Games is which of the following?",
  answers: ["Beijing", "Moscow", "Helsinki", "Montreal"],
  correctAnswer: "Beijing",
},
{
  number: 4,
  question: "Who was the first team to win the FA Cup?",
  answers: ["	Crystal Palace", "Maidenhead", "Queen's Park", "Wanderers"],
  correctAnswer: "Wanderers",
},
{
  number: 5,
  question: "Which has won the most Olympic medals in total?",
  answers: ["United Kingdom", "China", "United States", "France"],
  correctAnswer: "United States",
},
{
  number: 6,
  question: "Who won the very first UFC tournament (now known as UFC 1)?",
  answers: ["Ken Shamrock", "Royce Gracie", "Art Jimmerson", "Gerard Gordeau"],
  correctAnswer: "Royce Gracie",
},
{
  number: 7,
  question: "Who did Michael Schumacher win his first F1 World Drivers' Championship?",
  answers: ["Ferrari", "Benetton", "Jordan", "Minardi"],
  correctAnswer: "Benetton",
},
{
  number: 8,
  question: "Which tennis player has spent the longest amount of time at rank number 1 in mens?",
  answers: ["Novak Djokovic", "Rafael Nadal", "Roger Federer", "Pete Sampras"],
  correctAnswer: "Roger Federer",

},
{
  number: 9,
  question: "Who has won the most GAA All-Ireland Football Championships in a row?",
  answers: ["Kerry", "Dublin", "Cork", "Fermanagh"],
  correctAnswer: "Dublin",

},
{
  number: 10,
  question: "Which is the smallest area by population represented by a football team to win the European Cup/Champions League?",
  answers: ["Nottingham", "Belgrade", "Salzburg", "Porto"],
  correctAnswer: "Porto",
},
{
  number: 11,
  question: "Who is the only football player to have scored a goal in the Premier League, Championship, League One, League Two, FA Cup, League Cup, Football League Trophy, FA Trophy, UEFA Champions League, UEFA Europa League, Scottish Cup, Scottish League Cup and the Scottish Premier League?",
  answers: ["Billy Sharp", "Gary Hooper", "Tony Watt", "Steve Davis"],
  correctAnswer: "Gary Hooper",
},
{
  number: 12,
  question: "Who has won the most Golden Boot awards in the Italian top football division, Serie A?",
  answers: ["Gunnar Nordahl", "Ciro Immobile", "Michel Platini", "Zlatan Ibrahimović"],
  correctAnswer: "Gunnar Nordahl",
},
{
  number: 13,
  question: "In American Football, who is the Superbowl trophy named after?",
  answers: ["Paul Brown", "Marv Levy", "George Allen", "Vince Lombardi"],
  correctAnswer: "",
},
{
  number: 14,
  question: "The famous boxing match between Muhammad Ali and George Foreman known as 'The Rumble in the Jungle' took place where?",
  answers: ["Kinshasa, Zaire", "Lagos, Nigeria", "Libreville, Gabon", "Windhoek, Namibia"],
  correctAnswer: "Kinshasa, Zaire",
},
{
  number: 15,
  question: "Who was the first footballer to be bought for over £10,000,000?",
  answers: ["Alan Shearer ", "Jean-Pierre Papin", "Gianluca Vialli", "Ronaldo"],
  correctAnswer: "Jean-Pierre Papin",
},

];
/* function to get the rules to pop up on button click */
rulesButton.addEventListener('click', function() {
  ruleBox.setAttribute('class', 'the-rules');
})

/* function to start the quiz after reading rules */

  function startQuiz() {
  ruleBox.classList.remove('the-rules');
  questionArea.setAttribute('class', 'question-container');
  ruleBox.classList.add("hide");
  secondTimer = TIMEOUT;
}


/* 5 MIMUTE TIMER FOR THE QUIZ */

const clock = document.querySelector('h2');
let secondTimer = TIMEOUT;

clock.innerHTML = secondTimer;

setInterval(() => {
  secondTimer--;
  clock.innerHTML = `${secondTimer} seconds left.`;
  if (secondTimer <= 0) {
    runFinalScore(); // function to display the final score if and when the clock reaches 0. 
  }
}, 1000);


/*questions to display */

const question = document.getElementById('question');
var answer = document.getElementById('answer');



/* function to call and display the variables for the question and number */
function displayQuestion(questions, questionNumber) {
  const answerP = document.createElement('p');
  answerP.innerHTML = questions [questionNumber].number + '.' + ' ' + questions[questionNumber].question;
  return answerP.innerHTML;

}

function displayAnswers(questions, questionNumber) {
const lastAns = questions[questionNumber].answers[3] ? `<div class="answerchoice" > ${questions[questionNumber].answers[3]}</div>` : "";
    let answerChoice = `<div class="answerchoice">${questions[questionNumber].answers[0]} </div>` +
        `<div class="answerchoice"> ${questions[questionNumber].answers[1]}</div>` +
        `<div class="answerchoice"> ${questions[questionNumber].answers[2]}</div>` +
        lastAns;
    return answerChoice;
}


function moveQuestion(event) {
    nextButton.setAttribute("disabled", true);
    question.innerHTML = displayAnswers(questions, event);
    answer.innerHTML = displayAnswers(questions, event);
    answer.addEventListener("click", function(event) {
        selectAnswer(event);
    });
}

moveQuestion(0);
let thisQuestion = 0;
let currentScore = 0;

nextButton.setAttribute("disabled", true);
nextButton.addEventListener("click", function() {
    if (thisQuestion < questions.length - 1) {
        thisQuestion++;
        moveQuestion(currentQuestion);

    } else {
        questionArea.classList.add("hide");
        finalScore();
    }

});

// select answer option if the answer is correct do x and if the answer is incorrect.
function selectAnswer(selectedAnswer) {
  if (selectedAnswer.target.className !== 'answerchoice') {
      return;
  }

  // Once answer option is selected other options are disable to select again.
function disableAllAnswers(answers) {
  let totalAnswersCount = answers.children.length;
  for (let i = 0; i < totalAnswersCount; i++) {
      answers.children[i].classList.add("disable");
  }
}
  const correctAnswer = selectedAnswer.target;
  let chosenAnswer = correctAnswer.innerText;
  let theAnswer = questions[thisQuestion].correctAnswer;
  nextButton.removeAttribute("disabled");
  if (chosenAnswer === theAnswer) {
      rightAnswerCount += 1;
      totalScore += 1;
  // change color to green and red when answer is correct and incorrect, respectively.
  rightAnswer.classList.add("color1");
  increamentScore(rightAnswerCount);
} else {
  rightAnswer.classList.add("color2");
  wrongAnswerCount += 1;
  increamentWrongAnswer(wrongAnswerCount);

}
disableAllAnswers(answer);
}

// increament score for correct answers

function increamentScore(rightAnswerCount) {
document.getElementById("correct").innerText = rightAnswerCount;

}

// increament score for wrong answers
function increamentWrongAnswer(wrongAnswerCount) {
document.getElementById("incorrect").innerText = wrongAnswerCount;

}


  
