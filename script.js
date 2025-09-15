const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Markdown Language", "Hyper Tool Multi Language"],
    answer: 1
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "Python", "CSS", "C++"],
    answer: 2
  },
  {
    question: "Which is not a programming language?",
    options: ["Java", "C#", "HTML", "Python"],
    answer: 2
  },
  {
    question: "Which symbol is used for ID selector in CSS?",
    options: [".", "#", "*", "&"],
    answer: 1
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<code>"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionData = quizData[currentQuestion];
  document.getElementById("question").textContent = questionData.question;
  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach((btn, index) => {
    btn.textContent = questionData.options[index];
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
  });
  document.getElementById("next-btn").style.display = "none";
}

function checkAnswer(selected) {
  const questionData = quizData[currentQuestion];
  const buttons = document.querySelectorAll(".answer-btn");

  if (selected === questionData.answer) {
    buttons[selected].classList.add("correct");
    score++;
  } else {
    buttons[selected].classList.add("wrong");
    buttons[questionData.answer].classList.add("correct");
  }

  buttons.forEach(btn => btn.disabled = true);
  document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("score").textContent = score;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");
  loadQuestion();
}

loadQuestion();
