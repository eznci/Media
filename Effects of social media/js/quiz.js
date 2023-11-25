const questions = [
    {
      question: 'What is two-factor authentication (2FA)?',
      options: ['A method of encrypting data','A double check of identity','Browser cache clearing','Two-step identity verification (2FA)'],
      correctAnswer: 'Two-step identity verification (2FA)'
    },
    {
      question: 'What characteristic should a strong password have?',
      options: ['Short and simple','Contain only letters','Use unique characters','Repeating the username'],
      correctAnswer: 'Use unique characters'
    },
    {
      question: 'What is recommended to protect your Wi-Fi network?',
      options: ['Use an open network without a password','Use a weak password','Use WPA3 encryption','Regularly share your password with your neighbors'],
      correctAnswer: 'Use WPA3 encryption'
    },
    {
      question: 'What information should you avoid sharing on public social media profiles?',
      options: ['Username','Home address','Name of favorite pet','All of the above'],
      correctAnswer: 'All of the above'
    },
    {
      question: 'What is a VPN (Virtual Private Network)?',
      options: ['A virus program','A complementary web browser','A secure virtual connection','The name of the new social media'],
      correctAnswer: 'A secure virtual connection'
    },
    {
      question: 'What steps should you take before connecting to a public Wi-Fi network?',
      options: ['Send personal information through this network','Turn on all available network services','Verify its legitimacy and security','Do nothing and connect immediately'],
      correctAnswer: 'Verify its legitimacy and security'
    },
    {
      question: 'What does "https://" mean in the URL of a Web site?',
      options: ['Not a secure site','Not an accessible site','Secure connection with encryption','Site address without encryption'],
      correctAnswer: 'Secure connection with encryption'
    },
    {
      question: 'Which of the following methods can be used to make online purchases with added security?',
      options: ['Using public computers','Paying cash upon receipt of goods','Virtual credit cards','Using weak passwords'],
      correctAnswer: 'Virtual credit cards'
    },
    {
      question: 'What should you do if you notice suspicious activity on your online account?',
      options: ['Ignore it','Change your password and notify your ISP','Tell all your friends','Turn off notifications'],
      correctAnswer: 'Change your password and notify your provider'
    },
    {
      question: 'Which of the following is part of safe online shopping?',
      options: ['Storing payment information on all sites visited','Using public computers for shopping','Checking website reviews and reputation','Using weak passwords'],
      correctAnswer: 'Checking website reviews and reputation'
    }
];

let currentQuestion = 0;
let userAnswers = [];

function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const currentQues = questions[currentQuestion];

    questionContainer.innerHTML = `<p>${currentQues.question}</p>`;

    optionsContainer.innerHTML = currentQues.options
        .map(
            (option, index) =>
                `<label><input type="radio" name="option" value="${option}" onclick="saveAnswer(${index})">${option}</label>`
        )
        .join("");

    updateProgressBar();
}

function saveAnswer(index) {
    userAnswers[currentQuestion] = questions[currentQuestion].options[index];
}

function playClickSound() {
    const clickSound = document.getElementById("clickSound");
    clickSound.play();
}

function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = progress + "%";
}

function nextQuestion() {
    if (userAnswers.length < questions.length) {
        currentQuestion++;
        displayQuestion();
        playClickSound();
    } else {
        showResult();
    }
}

function showResult() {
    const resultContainer = document.getElementById("result");
    let correctCount = 0;

    for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] === questions[i].correctAnswer) {
            correctCount++;
        }
    }

    resultContainer.innerHTML = `<p>Your Score: ${correctCount} out of ${questions.length}</p>`;
}

window.onload = displayQuestion;