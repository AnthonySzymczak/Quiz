
const questions = [
  {

    question: "Which of these is not a data type :",
    answer: ["Boolean", "Number", "String", "javascript"],
    correctanswer: 3 
  },
/*  {
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
const tracker = 0;

startButton.addEventListener('click', startQuiz);

function startQuiz(){
  const questionTimer = 100;
//  console.log('startQuiz')
quiz.setAttribute('class', 'hide');
display();
}
function display(){
 for( let i=0; i< questions.length; i++){
   quest.innerHTML = questions[i].question;
   const answer1 = document.createElement('button');
   const answer2 = document.createElement('button');
   const answer3 = document.createElement('button');
   const answer4 = document.createElement('button');
    answer1.innerHTML= questions[i].answer [0];
    answer2.innerHTML= questions[i].answer [1];
    answer3.innerHTML= questions[i].answer [2];
    answer4.innerHTML= questions[i].answer [3];

   answers.appendChild(answer1);
  answers.appendChild(answer2);
  answers.appendChild(answer3);
  answers.appendChild(answer4);
  
  }
}
