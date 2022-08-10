/*some of the main variables */
const rulesButton = document.getElementById('rules-btn');
const questionArea = document.getElementById('questionarea');
const ruleBox = document.getElementById('instructions');
const answerButtonsElement = document.getElementById('answer-buttons');
const questionElement = document.getElementById('question');
const startButton = document.getElementById('start-btn');
const TIMEOUT = 75;
const nextButton = document.getElementById('next-btn');

/* questions for the quiz */


const questions = [

  {
    question: 'What was the name of the French football player who was infamously sent off in the 2006 World Cup Final?',
    answers: [
      { text: 'Thierry Henry',correct: false},
      { text: 'William Gallas', correct: false },
      { text: 'Frank Ribery', correct: false},
      { text: 'Zinedine Zidane', correct: true }
    ] 
  },

  {
    question: 'The only city to have hosted both the Summer and Winter Olympic Games is which of the following?',
    answers: [
      { text: 'Helsinki', correct: false},
      { text: 'Moscow', correct: false },
      { text: 'Beijing', correct: true }, 
      { text: 'Montreal',correct: false}
    ] 
  },
  {
    question: 'Who was the first team to win the FA Cup?',
    answers: [
      { text: 'Maidenhead', correct: false },
      { text: 'Wanderers', correct: true },
      { text: 'Queens Park', correct: false},
      { text: 'Crystal Palace',correct: false}
    ] 
  },
  {
    question: 'Which has won the most Olympic medals in total?',
    answers: [
      { text: 'United States', correct: true },
      { text: 'United Kingdom', correct: false },
      { text: 'France', correct: false},
      { text: 'China',correct: false}
    ] 
  },
  {
    question: 'Who won the very first UFC tournament (now known as UFC 1)?',
    answers: [
      { text: 'Gerard Gordeau',correct: false},
      { text: 'Ken Shamrock', correct: false },
      { text: 'Art Jimmerson', correct: false},
      { text: 'Royce Gracie', correct: true }
    ] 
  },
  {
    question: 'Who did Michael Schumacher win his first F1 World Drivers Championship?',
    answers: [
      { text: 'Minardi', correct: false},
      { text: 'Jordan', correct: false }, 
      { text: 'Benetton', correct: true },
      { text: 'Ferrari',correct: false}
    ] 
  },
  {
    question: 'Which tennis player has spent the longest amount of time at rank number 1 in mens?',
    answers: [
      { text: 'Roger Federer', correct: true },
      { text: 'Novak Djokovic', correct: false },
      { text: 'Rafael Nadal', correct: false},
      { text: 'Pete Sampras',correct: false}
    ] 
  },
  {
    question: '"Who has won the most GAA All-Ireland Football Championships in a row?',
    answers: [
      { text: 'Dublin', correct: true },
      { text: 'Cork', correct: false },
      { text: 'Fermanagh', correct: false},
      { text: 'Kerry',correct: false}
    ] 
  },

  {
    question: 'Which is the smallest area by population represented by a football team to win the European Cup/Champions League?',
    answers: [
      { text: 'Nottingham', correct: false },
      { text: 'Porto', correct: true },
      { text: 'Belgrade', correct: false},
      { text: 'Salzburg',correct: false}
    ] 
  },
  {
    question: 'Who is the only football player to have scored a goal in the Premier League, Championship, League One, League Two, FA Cup, League Cup, Football League Trophy, FA Trophy, UEFA Champions League, UEFA Europa League, Scottish Cup, Scottish League Cup and the Scottish Premier League?',
    answers: [
      { text: 'Gary Hooper', correct: true },
      { text: 'Steve Davis', correct: false },
      { text: 'Billy Sharp', correct: false},
      { text: 'Tony Watt',correct: false}
    ] 
  },

{
  question: 'Which of these sports was NOT at the first Modern Olympics in Athens in 1896?',
  answers: [
    { text: 'Boxing', correct: true },
    { text: 'Wrestling', correct: false },
    { text: 'Rowing', correct: false},
    { text: 'Shooting',correct: false}
  ] 
},

{
  question: 'Who has won the most Golden Boot awards in the Italian top football division, Serie A?',
  answers: [
    { text: 'Gunnar Nordahl', correct: true },
    { text: 'Michel Platini', correct: false },
    { text: 'Ciro Immobile', correct: false},
    { text: 'Zlatan Ibrahimović',correct: false}
  ] 
},
{
  question: 'In American Football, who is the Superbowl trophy named after?',
  answers: [
    { text: 'Paul Brown',correct: false},
    { text: 'Marv Levy', correct: false },
    { text: 'George Allen', correct: false},
    { text: 'Vince Lombardi', correct: true }
  ] 
},

{
  question: 'The famous boxing match between Muhammad Ali and George Foreman known as "The Rumble in the Jungle" took place where?',
  answers: [
    { text: 'Kinshasa, Zaire', correct: true },
    { text: 'Lagos, Nigeria', correct: false },
    { text: 'Libreville, Gabon', correct: false},
    { text: 'Windhoek, Namibia',correct: false}
  ] 
},

{
  question: 'Who was the first footballer to be bought for over £10,000,000?',
  answers: [
    { text: 'Gianluca Vialli',correct: false},
    { text: 'Alan Shearer', correct: false },
    { text: 'Ronaldo', correct: false},
    { text: 'Jean-Pierre Papin', correct: true}
  ] 
},

];
/* function to get the rules to pop up on button click */
rulesButton.addEventListener('click', function() {
  ruleBox.setAttribute('class', 'the-rules');
  rulesButton.classList.add('hide');
});

/* function to start the quiz after reading rules */
startButton.addEventListener("click", function() {
  ruleBox.classList.add('hide');
  questionArea.classList.remove('hide');
  startButton.classList.remove("hide");
});


/* 5 MIMUTE TIMER FOR THE QUIZ */

const clock = document.querySelector('h3');
let secondTimer = TIMEOUT;

clock.innerHTML = secondTimer;

setInterval(() => {
  secondTimer--;
  clock.innerHTML = `${secondTimer} seconds left.`;
  if (secondTimer <= 0) {
    runFinalScore(); // function to display the final score if and when the clock reaches 0. 
  }
}, 1000);


//*questions to display 
// https://github.com/WebDevSimplified/JavaScript-Quiz-App i used this heavily for help in trying to get the quiz to work

let shuffledQuestions, currentQuestionIndex;
var totalScoreAchieved;
let questionScoreCounter = {
  1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null,
};

// adding event listener to start the game 
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
  endQuiz();
});


// funstion to start the game by hiding the start button and randomly shuffling the questions
function startGame() {
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  totalScoreAchieved = 0;
  questionScoreCounter = {
    1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null,
  };
  questionArea.classList.remove('hide');
  setNextQuestion();
  endQuiz();
}


// the following question set up 
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}


// displaying questions and sending correct and wrong answers to the classes
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    } 
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

//reseting the classes etc 
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}


// select answer to send to classes and to make next button appear
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } 
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct')
    totalScoreAchieved++; // for the final score calculater at the end 
    if (questionScoreCounter[(currentQuestionIndex+1)] === null) {
      questionScoreCounter[(currentQuestionIndex+1)] = 1;
    } 
  } else {
    element.classList.add('wrong');
    if (questionScoreCounter[(currentQuestionIndex+1)] === null) {
      questionScoreCounter[(currentQuestionIndex+1)] = 0;
    } 
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
} 


// to run after 10 questions or timeout
function endQuiz() {
   if (currentQuestionIndex === 10) {
    runFinalScore ();
  }
}
// final score button to appear 
let finalScore = document.getElementById('final-score');
function runFinalScore () {
  rulesButton.classList.add('hide');
  questionArea.classList.add('hide');
  finalScore.classList.remove('hide');
}

let displayScore = document.getElementById('displayfinalscore');
let finalButton = document.getElementById('finalscorebtn');
const retryButton = document.getElementById('retry');
// discover final score 
function showFinalScore() {
  totalScoreAchieved = 0;
  for (let key in questionScoreCounter) {
    totalScoreAchieved = totalScoreAchieved + questionScoreCounter[key];
  }
  finalButton.classList.add('hide');
  finalScore.classList.add('hide');
  displayScore.classList.remove('hide');
  displayScore.classList.add('style-score');
  displayScore.innerText = `You achieved a score of ${(totalScoreAchieved)} out of 10`; // final score caluclator 
  retryButton.classList.remove('hide');

}
// refresh the webpage to restart the quiz 
function retry() {
  window.location.reload();
}



