

let score = 0;
let answered = {};
let totalQuestions = 4;


function checkAnswer(question, isCorrect) {

    // если уже отвечали — не даём повторно
    if (answered[question]) return;

    answered[question] = true;

    if (isCorrect) {
        score++;
    }

    updateResult();
}


function updateResult() {
    let result = document.getElementById("result");

    if (!result) return;

    result.innerText = "Правильных ответов: " + score + " / " + totalQuestions;

    
    if (score === totalQuestions) {
        result.style.color = "lightgreen";
    } else if (score >= 2) {
        result.style.color = "orange";
    } else {
        result.style.color = "red";
    }
}


function resetTest() {
    score = 0;
    answered = {};

    let result = document.getElementById("result");

    if (result) {
        result.innerText = "Ответьте на вопросы";
        result.style.color = "white";
    }
}


function runCode() {
    let output = document.getElementById("output");

    if (!output) return;

    output.innerText = "Hello GameDev!";
}

document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll(".nav a");
    let current = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === current) {
            link.style.color = "#00c3ff";
            link.style.fontWeight = "600";
        }
    });
});