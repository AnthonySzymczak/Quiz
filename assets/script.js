const questions = [
  {
    question: "Which of these is not a data type :",
    answer: ["Boolean", "Number", "String", "javascript"],
    correctanswer: 3,
  },
   {
    question: "What is my name: ",
    answer: ["Antos","Anthony","Antonio","Tony"],
    correctanswer: 2,

  }
  /*, {    
    question: ""
    answer [,,,]
    correctanswer:
  },
  {
    question: ""
    answer [,,,]
    correctanswer:
  },
  {
    question: ""
    answer [,,,]
    correctanswer:
  }, 
  {
    question: ""
    answer [,,,]
    correctanswer:
  },
  {
    question: ""
    answer [,,,]
    correctanswer:
  },
  {
    question: ""
    answer [,,,]
    correctanswer:
  },
  {
    question: ""
    answer [,,,]
    correctanswer:
  },
  {
    question: ""
    answer [,,,]
    correctanswer:
  }*/
];
const startButton = document.getElementById("Start");
const quiz = document.getElementById("quiz");
const quest = document.getElementById("questions");
const answers = document.getElementById("answers");
let currentQuestion = 0;
//Correct Answer Tracker
let trackerCorrect = 0;

//Wrong answer Tracker
let trackerWrong = 0;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
//  const questionTimer = 100;
  //  console.log('startQuiz')
  quiz.setAttribute("class", "hide");
  display();
}
function display() {
 answers.innerHTML="";
  let current = questions[currentQuestion];
    
  quest.innerHTML = current.question;
    for (let i = 0; i < current.answer.length; i++){
      let answer = current.answer[i];
    let answer1 = document.createElement("button");
    answer1.innerHTML = answer;
    answers.appendChild(answer1);
      answer1.addEventListener('click', function(e){
        compareAnswer(e)
        nextQuestion()
      })
      
    }
}
  function compareAnswer(e){
    // a. get some info out of the button youre clicking using e(since e calls )
    //b. get correct answer of question while comparing to button you click on
    //c. if answer = correct add one to score. add to tracker wrong
  }
  function nextQuestion(){
    
    currentQuestion++;
    display();
  }  

