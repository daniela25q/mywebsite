/* reference https://www.youtube.com/watch?v=ZGpi1iZ1oZo*/
/* data variable created to contain questions and answers
const data = [
  {
    question: "What is the national dish of Thailand?",
    a: "Pad Thai",
    b: "Massaman Curry",
    c: "Tom Yum Soup",
    correct: "a",
  },

  {
    question: "Which of the following is a staple food in Mexico?",
    a: "Quesadillas",
    b: "Tacos",
    c: "Enchiladas",
    correct: "b",
  },

  {
    question: "Which country is famous for its pizza?",
    a: "Italy",
    b: "Greece",
    c: "Spain",
    correct: "a",
  },

  {
    question: "Which country is famous for its pho soup?",
    a: "Japan",
    b: "Vietnam",
    c: "Thailand",
    correct: "b",
  },
];

const quizContainer = document.getElementById("quiz-container");
const answerEls = document.querySelectorAll(".quiz-answer");
const questionEl = document.getElementById("quiz-question");
const optionALabel = document.getElementById("quiz-optionA");
const optionBLabel = document.getElementById("quiz-optionB");
const optionCLabel = document.getElementById("quiz-optionC");
const submitBtn = document.getElementById("quiz-submit");

let currentQuiz = 0;
let score = 0;

startQuiz();

function startQuiz() {
  deselectAnswers();

  const currentQuizData = data[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  optionALabel.innerText = currentQuizData.a;
  optionBLabel.innerText = currentQuizData.b;
  optionCLabel.innerText = currentQuizData.c;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === data[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < data.length) {
      startQuiz();
    } else {
      quizContainer.innerHTML = `
              <h2>You answered ${score}/${data.length} questions correctly</h2>
              <button onclick="location.reload()">Do it Again</button>
            `;
    }
  }
});
*/

const data = [
  {
    question: "What is the national dish of Thailand?",
    a: "Pad Thai",
    b: "Massaman Curry",
    c: "Tom Yum Soup",
    correct: "a",
  },
  {
    question: "Which of the following is a staple food in Mexico?",
    a: "Quesadillas",
    b: "Tacos",
    c: "Enchiladas",
    correct: "b",
  },
  {
    question: "Which country is famous for its pizza?",
    a: "Italy",
    b: "Greece",
    c: "Spain",
    correct: "a",
  },
  {
    question: "Which country is famous for its pho soup?",
    a: "Japan",
    b: "Vietnam",
    c: "Thailand",
    correct: "b",
  },
];

const quizContainer = document.getElementById("quiz-container");
const answerEls = document.querySelectorAll(".quiz-answer");
const questionEl = document.getElementById("quiz-question");
const optionALabel = document.getElementById("quiz-optionA");
const optionBLabel = document.getElementById("quiz-optionB");
const optionCLabel = document.getElementById("quiz-optionC");
const submitBtn = document.getElementById("quiz-submit");

let currentQuiz = 0;
let score = 0;

startQuiz();

function startQuiz() {
  deselectAnswers();

  const currentQuizData = data[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  optionALabel.innerText = currentQuizData.a;
  optionBLabel.innerText = currentQuizData.b;
  optionCLabel.innerText = currentQuizData.c;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer ? answer.slice(-1) : null;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === data[currentQuiz].correct) {
      score++;
      console.log(`Current score: ${score}`);
    }

    currentQuiz++;

    if (currentQuiz < data.length) {
      startQuiz();
    } else {
      quizContainer.innerHTML = `
        <h2>You answered ${score}/${data.length} questions correctly</h2>
        <button onclick="location.reload()">Do it Again</button>
      `;
    }
  }
});
