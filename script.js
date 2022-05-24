/* we'll want to store the list of quizdaata choices with the correct answer*/
const quizData = [ 
    {
        question: "What is the name of eng.nancys' car?",
        a: "BMW",
        b: "Toyota",
        c: "7alaweyat",
        d: "it has no name",
        correct: "c",
    },
    {
        question: "complete this sentence: Jack of all trades...?",
        a: "but nothing",
        b: "master of none",
        c: "master of null",
        d: "always so great",
        correct: "b",
    },
    {
        question: "What is the result for (7-2*3=...) ?",
        a: "15",
        b: "0",
        c: "-1",
        d: "1",
        correct: "d",
    },
    {
        question: "What do you do when you hear (Andy's coming)?",
        a: "pretend you didn't hear anything",
        b: "give the person a high-five",
        c: "fall on the ground and prentend being a toy",
        d: "none of the above",
        correct: "c",
    },


];

const quiz= document.getElementById('quiz')
const Answer = document.querySelectorAll('.answer') 
const Question = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const Submit = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    Question.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

/*shows me all the answer options and none is selected*/ 
function deselectAnswers() {
    Answer.forEach(answerl => answerl.checked = false)
} 

/*return selected answer*/ 
function getSelected() {
    let answer
    Answer.forEach(answerl => {
        if(answerl.checked) {
            answer = answerl.id
        }
    })
    return answer
}

/*compare and check if answer is correct*/ 
Submit.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       /*if you didn't answer all questions go to the next one when you are done answering all the questions it will show you the score*/ 
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>`
       }
    }
})