// JavaScript source code
const data = [
    {
        id: 1,
        question: "Which is the most visited national park in the state of Idaho?",
        answers: [
            { answer: "Nez Perce National Historic Park", isCorrect: true },
            { answer: "City of Rocks National Reserve", isCorrect: false },
            { answer: "Minidoka National Historic Site", isCorrect: false },
            { answer: "Sawtooth National Forest", isCorrect: false },
        ],
    },
    {
        id: 2,
        question: "Which is the oldest university in the state of Idaho?",
        answers: [
            { answer: "Boise State University", isCorrect: false },
            { answer: "College of Idaho", isCorrect: false },
            { answer: "University of Idaho", isCorrect: true },
            { answer: "Idaho State University", isCorrect: false },
        ],
    },
    {
        id: 1,
        question: "What is the state of Idaho best known for nationally?",
        answers: [
            { answer: "Scenic landscapes and canyons", isCorrect: false },
            { answer: "Gems and potatoes", isCorrect: true },
            { answer: "Huckleberries, trout and hot springs", isCorrect: false },
        ],
    },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    showQuestion(qIndex);
};

play.addEventListener("click", () => {
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain()
})

const showResult = () => {
    resultScreen.style.display = "block";
    gameScreen.style.display = "none";

    resultScreen.querySelector(
        ".correct"
    ).textContent = `Correct Answers: ${correctCount}`;

    resultScreen.querySelector(
        ".wrong"
    ).textContent = `Wrong Answers: ${wrongCount}`;

    resultScreen.querySelector(".score").textContent = `Score: ${(correctCount - wrongCount) * 10
        }`;
};

const showQuestion = (qNumber) => {
    if (qIndex === data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers
        .map(
            (item, index) =>
                `
                <div class="answer">
                    <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
                    <label for="1">${item.answer}</label>
                </div>
                `
        )
        .join("");
    selectAnswer();
};

const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach((el) => {
        el.addEventListener("click", (e) => {
            selectedAnswer = e.target.value;
        });
    });
};

const submitAnswer = () => {
    submit.addEventListener("click", () => {
        if (selectedAnswer !== null) {
            selectedAnswer === "true" ? correctCount++ : wrongCount++;
            qIndex++;
            showQuestion(qIndex);
        } else alert("Select an answer!");
    });
};

showQuestion(qIndex);
submitAnswer();
