const questions = [
  {
    question: "What does REST stand for?",
    options: ["Reliable Event State Transfer", "Representational State Transfer", "Resource Encoded Simple Transport", "Remote Execution Synchronous Transmission"],
    answer: "Representational State Transfer"
  },
  {
    question: "Which HTTP method is idempotent?",
    options: ["POST", "GET", "PUT", "PATCH"],
    answer: "PUT"
  },
  {
    question: "What is a key feature of SOAP?",
    options: ["Uses only JSON", "Built on XML", "Stateless by design", "Browser-only support"],
    answer: "Built on XML"
  },
  {
    question: "Which HTTP status code means 'Created'?",
    options: ["200", "201", "204", "400"],
    answer: "201"
  },
  {
    question: "Which protocol does REST commonly use?",
    options: ["FTP", "SMTP", "HTTP", "SSH"],
    answer: "HTTP"
  },
  {
    question: "What is JSON?",
    options: ["Programming language", "Markup language", "Data format", "Database"],
    answer: "Data format"
  },
  {
    question: "Which of the following is NOT a REST constraint?",
    options: ["Stateless", "Layered System", "Client-Server", "Session Persistence"],
    answer: "Session Persistence"
  },
  {
    question: "What does API stand for?",
    options: ["Application Programming Interface", "Automated Process Integration", "Application Processing Index", "Advanced Programming Instruction"],
    answer: "Application Programming Interface"
  },
  {
    question: "Which is best for lightweight web services?",
    options: ["SOAP", "REST", "CORBA", "WSDL"],
    answer: "REST"
  },
  {
    question: "Which format is commonly used in REST APIs?",
    options: ["XML only", "YAML", "JSON", "CSV"],
    answer: "JSON"
  },
  {
    question: "What is the purpose of HTTP status code 404?",
    options: ["Unauthorized", "Not Found", "Created", "Bad Request"],
    answer: "Not Found"
  },
  {
    question: "Which HTTP method is used to delete a resource?",
    options: ["GET", "POST", "DELETE", "PATCH"],
    answer: "DELETE"
  },
  {
    question: "Which tool is used to test APIs?",
    options: ["Postman", "Notepad", "Photoshop", "Excel"],
    answer: "Postman"
  },
  {
    question: "Which HTTP method is used to update only part of a resource?",
    options: ["PUT", "POST", "PATCH", "DELETE"],
    answer: "PATCH"
  },
  {
    question: "What does WSDL describe?",
    options: ["SOAP UI tool", "Structure of SOAP messages", "Web Services Description Language", "JavaScript Data Format"],
    answer: "Web Services Description Language"
  },
  {
    question: "What does stateless mean in REST?",
    options: ["Each request is independent", "Session is maintained", "Persistent connection", "Depends on prior request"],
    answer: "Each request is independent"
  },
  {
    question: "Which API style is most flexible and uses URLs for resource access?",
    options: ["SOAP", "GraphQL", "REST", "RPC"],
    answer: "REST"
  },
  {
    question: "Which status code indicates success with no content?",
    options: ["200", "201", "204", "400"],
    answer: "204"
  },
  {
    question: "What is Swagger used for?",
    options: ["Image editing", "Database management", "API documentation", "Network monitoring"],
    answer: "API documentation"
  },
  {
    question: "Which of the following is a RESTful convention?",
    options: ["/getUsers", "/createUser", "/users", "/deleteAll"],
    answer: "/users"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const scoreEl = document.getElementById('score');

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = `${currentQuestion + 1}. ${q.question}`;
  optionsEl.innerHTML = '';

  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.classList.add('option');
    btn.textContent = option;
    btn.onclick = () => selectOption(btn, q.answer);
    optionsEl.appendChild(btn);
  });

  nextBtn.style.display = 'none';
}

function selectOption(button, correctAnswer) {
  const options = document.querySelectorAll('.option');
  options.forEach(btn => btn.disabled = true);

  if (button.textContent === correctAnswer) {
    button.classList.add('correct');
    score++;
  } else {
    button.classList.add('wrong');
    options.forEach(btn => {
      if (btn.textContent === correctAnswer) btn.classList.add('correct');
    });
  }

  nextBtn.style.display = 'block';
}

nextBtn.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = '';
  nextBtn.textContent = 'Restart Quiz';
  nextBtn.style.display = 'block';
  scoreEl.innerHTML = `You scored <strong>${score} / ${questions.length}</strong>`;
  nextBtn.onclick = restartQuiz;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  nextBtn.textContent = 'Next';
  scoreEl.innerHTML = '';
  showQuestion();
}

showQuestion();
