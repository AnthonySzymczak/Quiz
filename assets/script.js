const questions = [
  {
    question: "Which of these is not a data type :",
    answer: ["Boolean", "Number", "String", "javascript"],
    correctanswer: 3,
  }, 
  {    
    question: "Inside which HTML element do we put the JavaScript?",
    answer: ["'p'","'li'","'script'","'ul'"],
    correctanswer: 2,
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answer: ["head/body tags","Title","Inside 'p' tags","In an array"],
    correctanswer: 0,
  },
  {
    question: "The external JavaScript file must contain the 'script' tag.",
    answer: ["True","False"],
    correctanswer: 1,
  }, 
  {
    question: "How can you add a comment in a JavaScript?",
    answer: ["||","**","/--/","//"],
    correctanswer: 3,
  },
  {
    question: "JavaScript is the same as Java.",
    answer: ["False","True"],
    correctanswer: 0,
  },
  {
    question: "How do you declare a JavaScript variable?",
    answer: ["var","call","if","for"],
    correctanswer: 0,
  },
  {
    question: "Is JavaScript case-sensitive?",
    answer: ["only on weekends","sometimes","yes","no"],
    correctanswer: 2,
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answer: ["offclick","onclick","click.here","click.on"],
    correctanswer: 1,
  },
  {
   question: "Which is the creators name: ",
   answer: ["Antos","Anthony","Antonio","Tony"],
   correctanswer: 1,

 }
];
//highscores ID
let highscoreButton = document.getElementById("high-score");
//Start Button ID 
const startButton = document.getElementById("Start");

//quiz ID
const quiz = document.getElementById("quiz");

//Questions ID
const quest = document.getElementById("questions");

//answers ID
const answers = document.getElementById("answers");

//current question
let currentQuestion = 0;

//Correct Answer Tracker
let trackerCorrect = 0;

//Wrong answer Tracker
let trackerWrong = 0;


startButton.addEventListener("click", startQuiz);
highscoreButton.addEventListener("click", highScore);

function startQuiz() {
  //  console.log('startQuiz')
  quiz.setAttribute("class", "hide");
  display();
  document.getElementById('allTime').innerHTML =
  001 + ":" + 10;
  startTimer();
  
  function startTimer() {
    let presentTime = document.getElementById('allTime').innerHTML;
    let timeArray = presentTime.split(/[:]+/);
    let m = timeArray[0];
    let s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
    if(m<=0 && s<=0){alert('Time is up! Thanks for playing!!')}
    
    
    document.getElementById('allTime').innerHTML =
    m + ":" + s;
    //console.log(m)
    setTimeout(startTimer, 1000);
  }
  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0) {sec = "59"};
    return sec;
    
  }
}

function display() {
  answers.innerHTML="";
  let current = questions[currentQuestion];
  
  quest.innerHTML = current.question;
  for (let i = 0; i < current.answer.length; i++){
    let answer = current.answer[i];
    let answer1 = document.createElement("button");
    answer1.setAttribute("id", i);
    answer1.innerHTML = answer;
    answers.appendChild(answer1);
    answer1.addEventListener('click', function(e){
      compareAnswer(e);
      nextQuestion();
      
    })
    
  }
}
function compareAnswer(e){
  // a. get some info out of the button youre clicking using e(since e calls stored click function)
  console.log(e.target.id);
  //b. get correct answer of question while comparing to button you click on
    const id = e.target.id;
    //c. if answer = correct add one to score. else add to tracker wrong
  
    const correctAnswer = questions[currentQuestion].correctanswer;
  if (id == correctAnswer){
    //Is the right answer
    console.log("Good answer")
    trackerCorrect++;
    console.log("Correct questions: ",trackerCorrect);
    console.log("Wrong questions: ",trackerWrong);
  } else {
    //Is the wrong answer
    console.log("Bad answer")
    trackerWrong++;
    console.log("Correct questions: ",trackerCorrect);
    console.log("Wrong questions: ",trackerWrong);
  //  nextQuestion();
   // sec- 10;
    
  }
  }
  
  
  

function nextQuestion(){
  //Verify if the quiz finished. is currentQuestion < questions.length

  currentQuestion++;
  display();
}  
//e. print high score at end of quiz and store it.

// Highscore function
function highScore(){
  quiz.setAttribute("class", "hide");

  var highscore = localStorage.getItem("highscore");
  
  if(highscore !== null){
    if (trackerCorrect > highscore) {
      localStorage.setItem("highscore", trackerCorrect);      
      console.log(highscore);
    }
  }
  else{
    localStorage.setItem("highscore", trackerCorrect);
    console.log(highscore);
  }
} 
