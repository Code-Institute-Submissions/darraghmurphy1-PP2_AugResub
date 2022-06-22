const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
let answerButtons = document.getElementsByClassName('answer-btn');
let startingScore = 0;
let startingIncorrectScore=0;
let currentQuestionIndex=0;



/* adding an event listener for the start button */

document.startButton.addEventListener('click', startQuiz);

function startQuiz () {
  startButton.classList.add('hidden')
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hidden')
  nextQuestion()
}

function nextQuestion () {

};

function displayQuestion () {

};

function checkAnswer () {

};

function incrementScore() {

};

function incrementIncorrectScore () {

};

function calculateFinalResults () {

};

function retry () {

};

/* questions for the quiz */

const questions = [

    {
      question: 'What was the name of the French football player who was infamously sent off in the 2006 World Cup Final?',
      answers: [
        { text: 'Zinedine Zidane', correct: true },
        { text: 'William Gallas', correct: false },
        { text: 'Frank Ribery', correct: false},
        { text: 'Thierry Henry',correct: false}
      ] 
    },
    
  
    {
      question: 'The only city to have hosted both the Summer and Winter Olympic Games is which of the following?',
      answers: [
        { text: 'Beijing', correct: true },
        { text: 'Moscow', correct: false },
        { text: 'Helsinki', correct: false},
        { text: 'Montreal',correct: false}
      ] 
    },
    {
      question: 'Who was the first team to win the FA Cup?',
      answers: [
        { text: 'Wanderers', correct: true },
        { text: 'Maidenhead', correct: false },
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
        { text: 'Royce Gracie', correct: true },
        { text: 'Ken Shamrock', correct: false },
        { text: 'Art Jimmerson', correct: false},
        { text: 'Gerard Gordeau',correct: false}
      ] 
    },
    {
      question: 'Who did Michael Schumacher win his first F1 World Drivers Championship?',
      answers: [
        { text: 'Benetton', correct: true },
        { text: 'Jordan', correct: false },
        { text: 'Minardi', correct: false},
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
        { text: 'Porto', correct: true },
        { text: 'Nottingham', correct: false },
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
        { text: 'Vince Lombardi', correct: true },
        { text: 'Marv Levy', correct: false },
        { text: 'George Allen', correct: false},
        { text: 'Paul Brown',correct: false}
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
        { text: 'Jean-Pierre Papin', correct: true },
        { text: 'Alan Shearer', correct: false },
        { text: 'Ronaldo', correct: false},
        { text: 'Gianluca Vialli',correct: false}
      ] 
    },
  
  
  ]