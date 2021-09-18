const quizDB  =  [
    {
         
          question :  "Q1 : What is the full form of HTML?",
          a :   "Hey text Markup Language", 
          b :   "Hypertext Markup Language",
          c :   "Hyper text Markup Language",
          ans : "ans3"
},
{
         question :  "Q2 : What is the full form of CSS?",
         a :   "Cascading Style Sheets",
         b :   "Cascading Style Sheep",
         c :   "Cartoon Style Sheets",
         ans: "ans1"
},
{
         question: "Q3 : What is the full form of HTTP?",
         a :   "Hypertext Transfer Product",
         b :   "Hypertext Test Protocol",
         c :   "Hypertext Transfer Protocol",
         ans : "ans3"
}
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;

const loadquestion = () => {
    
   const questionList =  quizDB[questionCount];
   
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
   
}

loadquestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    if(questionCount < 3){
        
        loadquestion();
    }else{
        
        showScore.innerHTML = ` 
        <h3> You scored ${score}/${3} 👍🏻 </h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>
        `;
        showScore.classList.remove('scoreArea');

    }
}); 