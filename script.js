//FrontEnd - Questions
let currentPage = 1;

// QUESTIONS START
const questions = [
    // 1. Question
    { text: "Which country recently hosted the 2023 G20 Summit?", 
        options: ["A. United States", "B. India", "C. France", "D. Japan"], 
        answer: "B. India" },
    // 2. Question
    { text: "What is the capital of Ukraine?", 
        options: ["A. Kyiv", "B. Moscow", "C. Warsaw", "D. Minsk"], 
        answer: "A. Kyiv" },
    // 3. Question
    { text: "Which country won the FIFA Women’s World Cup 2023?", 
        options: ["A. England", "B. Germany", "C. United States", "D. Spain"], 
        answer: "D. Spain" },
    // 4. Question
    { text: "Who is the current Secretary-General of the United Nations?", 
        options: ["A. António Guterres", "B. Ban Ki-moon", "C. Kofi Annan", "D. Boutros Boutros-Ghali"], 
        answer: "A. António Guterres" },
    // 5. Question
    { text: "Which city hosted the 2024 Olympics?", 
        options: ["A. Los Angeles", "B. Paris", "C. Tokyo", "D. Beijing"], 
        answer: "B. Paris" },
    // 6. Question
    { text: "Which country recently left the European Union?", 
        options: ["A. Italy", "B. France", "C. United Kingdom", "D. Germany"], 
        answer: "C. United Kingdom" },
    // 7. Question
    { text: "Who won the 2022 Nobel Peace Prize?", 
        options: ["A. Maria Ressa", "B. Malala Yousafzai", "C. Denis Mukwege", "D. Ales Bialiatski"], 
        answer: "D. Ales Bialiatski" },
    // 8. Question
    { text: "Which country hosted COP27 in 2022?", 
        options: ["A. Egypt", "B. France", "C. Brazil", "D. South Africa"], 
        answer: "A. Egypt" },
    // 9. Question
    { text: "Which country is the largest producer of crude oil?", 
        options: ["A. Saudi Arabia", "B. United States", "C. Russia", "D. Iran"], 
        answer: "B. United States" },
    // 10. Question
    { text: "Who is the current chairperson of the African Union?", 
        options: ["A. Macky Sall", "B. Cyril Ramaphosa", "C. Nana Akufo-Addo", "D. Muhammadu Buhari"], 
        answer: "A. Macky Sall" },
    // 11. Question
    { text: "Which country recently hosted the 2023 G20 Summit?", 
        options: ["A. United States", "B. India", "C. France", "D. Japan"], 
        answer: "B. India" },
    // 12. Question
    { text: "What is the capital of Ukraine?", 
        options: ["A. Kyiv", "B. Moscow", "C. Warsaw", "D. Minsk"], 
        answer: "A. Kyiv" },
    // 13. Question
    { text: "Which country won the FIFA Women’s World Cup 2023?", 
        options: ["A. England", "B. Germany", "C. United States", "D. Spain"], 
        answer: "D. Spain" },
    // 14. Question
    { text: "Who is the current Secretary-General of the United Nations?", 
        options: ["A. António Guterres", "B. Ban Ki-moon", "C. Kofi Annan", "D. Boutros Boutros-Ghali"], 
        answer: "A. António Guterres" },
    // 15. Question
    { text: "Which city hosted the 2024 Olympics?", 
        options: ["A. Los Angeles", "B. Paris", "C. Tokyo", "D. Beijing"], 
        answer: "B. Paris" },
    // 16. Question
    { text: "Which country recently left the European Union?", 
        options: ["A. Italy", "B. France", "C. United Kingdom", "D. Germany"], 
        answer: "C. United Kingdom" },
    // 17. Question
    { text: "Who won the 2022 Nobel Peace Prize?", 
        options: ["A. Maria Ressa", "B. Malala Yousafzai", "C. Denis Mukwege", "D. Ales Bialiatski"], 
        answer: "D. Ales Bialiatski" },
    // 18. Question
    { text: "Which country hosted COP27 in 2022?", 
        options: ["A. Egypt", "B. France", "C. Brazil", "D. South Africa"], 
        answer: "A. Egypt" },
    // 19. Question
    { text: "Which country is the largest producer of crude oil?", 
        options: ["A. Saudi Arabia", "B. United States", "C. Russia", "D. Iran"], 
        answer: "B. United States" },
    // 20. Question
    { text: "Who is the current chairperson of the African Union?", 
        options: ["A. Macky Sall", "B. Cyril Ramaphosa", "C. Nana Akufo-Addo", "D. Muhammadu Buhari"], 
        answer: "A. Macky Sall" },
    // 21. Question
    { text: "Which country recently hosted the 2023 G20 Summit?", 
        options: ["A. United States", "B. India", "C. France", "D. Japan"], 
        answer: "B. India" },
    // 22. Question
    { text: "What is the capital of Ukraine?", 
        options: ["A. Kyiv", "B. Moscow", "C. Warsaw", "D. Minsk"], 
        answer: "A. Kyiv" },
    // 23. Question
    { text: "Which country won the FIFA Women’s World Cup 2023?", 
        options: ["A. England", "B. Germany", "C. United States", "D. Spain"], 
        answer: "D. Spain" },
    // 24. Question
    { text: "Who is the current Secretary-General of the United Nations?", 
        options: ["A. António Guterres", "B. Ban Ki-moon", "C. Kofi Annan", "D. Boutros Boutros-Ghali"], 
        answer: "A. António Guterres" },
    // 25. Question
    { text: "Which city hosted the 2024 Olympics?", 
        options: ["A. Los Angeles", "B. Paris", "C. Tokyo", "D. Beijing"], 
        answer: "B. Paris" },
    // 26. Question
    { text: "Which country recently left the European Union?", 
        options: ["A. Italy", "B. France", "C. United Kingdom", "D. Germany"], 
        answer: "C. United Kingdom" },
    // 27. Question
    { text: "Who won the 2022 Nobel Peace Prize?", 
        options: ["A. Maria Ressa", "B. Malala Yousafzai", "C. Denis Mukwege", "D. Ales Bialiatski"], 
        answer: "D. Ales Bialiatski" },
    // 28. Question
    { text: "Which country hosted COP27 in 2022?", 
        options: ["A. Egypt", "B. France", "C. Brazil", "D. South Africa"], 
        answer: "A. Egypt" },
    // 29. Question
    { text: "Which country is the largest producer of crude oil?", 
        options: ["A. Saudi Arabia", "B. United States", "C. Russia", "D. Iran"], 
        answer: "B. United States" },
    // 30. Question
    { text: "Who is the current chairperson of the African Union?", 
        options: ["A. Macky Sall", "B. Cyril Ramaphosa", "C. Nana Akufo-Addo", "D. Muhammadu Buhari"], 
        answer: "A. Macky Sall" },
    // 31. Question
    { text: "Which country recently hosted the 2023 G20 Summit?", 
        options: ["A. United States", "B. India", "C. France", "D. Japan"], 
        answer: "B. India" },
    // 32. Question
    { text: "What is the capital of Ukraine?", 
        options: ["A. Kyiv", "B. Moscow", "C. Warsaw", "D. Minsk"], 
        answer: "A. Kyiv" },
    // 33. Question
    { text: "Which country won the FIFA Women’s World Cup 2023?", 
        options: ["A. England", "B. Germany", "C. United States", "D. Spain"], 
        answer: "D. Spain" },
    // 34. Question
    { text: "Who is the current Secretary-General of the United Nations?", 
        options: ["A. António Guterres", "B. Ban Ki-moon", "C. Kofi Annan", "D. Boutros Boutros-Ghali"], 
        answer: "A. António Guterres" },
    // 35. Question
    { text: "Which city hosted the 2024 Olympics?", 
        options: ["A. Los Angeles", "B. Paris", "C. Tokyo", "D. Beijing"], 
        answer: "B. Paris" },
    // 36. Question
    { text: "Which country recently left the European Union?", 
        options: ["A. Italy", "B. France", "C. United Kingdom", "D. Germany"], 
        answer: "C. United Kingdom" },
    // 37. Question
    { text: "Who won the 2022 Nobel Peace Prize?", 
        options: ["A. Maria Ressa", "B. Malala Yousafzai", "C. Denis Mukwege", "D. Ales Bialiatski"], 
        answer: "D. Ales Bialiatski" },
    // 38. Question
    { text: "Which country hosted COP27 in 2022?", 
        options: ["A. Egypt", "B. France", "C. Brazil", "D. South Africa"], 
        answer: "A. Egypt" },
    // 39. Question
    { text: "Which country is the largest producer of crude oil?", 
        options: ["A. Saudi Arabia", "B. United States", "C. Russia", "D. Iran"], 
        answer: "B. United States" },
    // 40. Question
    { text: "Who is the current chairperson of the African Union?", 
        options: ["A. Macky Sall", "B. Cyril Ramaphosa", "C. Nana Akufo-Addo", "D. Muhammadu Buhari"], 
        answer: "A. Macky Sall" },
    // 41. Question
    { text: "Which country recently hosted the 2023 G20 Summit?", 
        options: ["A. United States", "B. India", "C. France", "D. Japan"], 
        answer: "B. India" },
    // 42. Question
    { text: "What is the capital of Ukraine?", 
        options: ["A. Kyiv", "B. Moscow", "C. Warsaw", "D. Minsk"], 
        answer: "A. Kyiv" },
    // 43. Question
    { text: "Which country won the FIFA Women’s World Cup 2023?", 
        options: ["A. England", "B. Germany", "C. United States", "D. Spain"], 
        answer: "D. Spain" },
    // 44. Question
    { text: "Who is the current Secretary-General of the United Nations?", 
        options: ["A. António Guterres", "B. Ban Ki-moon", "C. Kofi Annan", "D. Boutros Boutros-Ghali"], 
        answer: "A. António Guterres" },
    // 45. Question
    { text: "Which city hosted the 2024 Olympics?", 
        options: ["A. Los Angeles", "B. Paris", "C. Tokyo", "D. Beijing"], 
        answer: "B. Paris" },
    // 46. Question
    { text: "Which country recently left the European Union?", 
        options: ["A. Italy", "B. France", "C. United Kingdom", "D. Germany"], 
        answer: "C. United Kingdom" },
    // 47. Question
    { text: "Who won the 2022 Nobel Peace Prize?", 
        options: ["A. Maria Ressa", "B. Malala Yousafzai", "C. Denis Mukwege", "D. Ales Bialiatski"], 
        answer: "D. Ales Bialiatski" },
    // 48. Question
    { text: "Which country hosted COP27 in 2022?", 
        options: ["A. Egypt", "B. France", "C. Brazil", "D. South Africa"], 
        answer: "A. Egypt" },
    // 49. Question
    { text: "Which country is the largest producer of crude oil?", 
        options: ["A. Saudi Arabia", "B. United States", "C. Russia", "D. Iran"], 
        answer: "B. United States" },
    // 50. Question
    { text: "Who is the current chairperson of the African Union?", 
        options: ["A. Macky Sall", "B. Cyril Ramaphosa", "C. Nana Akufo-Addo", "D. Muhammadu Buhari"], 
        answer: "A. Macky Sall" },
    // 51. Question
    { text: "Which country recently hosted the 2023 G20 Summit?", 
        options: ["A. United States", "B. India", "C. France", "D. Japan"], 
        answer: "B. India" },
    // 52. Question
    { text: "What is the capital of Ukraine?", 
        options: ["A. Kyiv", "B. Moscow", "C. Warsaw", "D. Minsk"], 
        answer: "A. Kyiv" },
    // 53. Question
    { text: "Which country won the FIFA Women’s World Cup 2023?", 
        options: ["A. England", "B. Germany", "C. United States", "D. Spain"], 
        answer: "D. Spain" },
    // 54. Question
    { text: "Who is the current Secretary-General of the United Nations?", 
        options: ["A. António Guterres", "B. Ban Ki-moon", "C. Kofi Annan", "D. Boutros Boutros-Ghali"], 
        answer: "A. António Guterres" },
    // 55. Question
    { text: "Which city hosted the 2024 Olympics?", 
        options: ["A. Los Angeles", "B. Paris", "C. Tokyo", "D. Beijing"], 
        answer: "B. Paris" },
    // 56. Question
    { text: "Which country recently left the European Union?", 
        options: ["A. Italy", "B. France", "C. United Kingdom", "D. Germany"], 
        answer: "C. United Kingdom" },
    // 57. Question
    { text: "Who won the 2022 Nobel Peace Prize?", 
        options: ["A. Maria Ressa", "B. Malala Yousafzai", "C. Denis Mukwege", "D. Ales Bialiatski"], 
        answer: "D. Ales Bialiatski" },
    // 58. Question
    { text: "Which country hosted COP27 in 2022?", 
        options: ["A. Egypt", "B. France", "C. Brazil", "D. South Africa"], 
        answer: "A. Egypt" },
    // 59. Question
    { text: "Which country is the largest producer of crude oil?", 
        options: ["A. Saudi Arabia", "B. United States", "C. Russia", "D. Iran"], 
        answer: "B. United States" },
    // 60. Question
    { text: "Who is the current chairperson of the African Union?", 
        options: ["A. Macky Sall", "B. Cyril Ramaphosa", "C. Nana Akufo-Addo", "D. Muhammadu Buhari"], 
        answer: "A. Macky Sall" },
    // 61. Question
    { text: "Which country recently hosted the 2023 G20 Summit?", 
        options: ["A. United States", "B. India", "C. France", "D. Japan"], 
        answer: "B. India" },
    // 62. Question
    { text: "What is the capital of Ukraine?", 
        options: ["A. Kyiv", "B. Moscow", "C. Warsaw", "D. Minsk"], 
        answer: "A. Kyiv" },
    // 63. Question
    { text: "Which country won the FIFA Women’s World Cup 2023?", 
        options: ["A. England", "B. Germany", "C. United States", "D. Spain"], 
        answer: "D. Spain" },
    // 64. Question
    { text: "Who is the current Secretary-General of the United Nations?", 
        options: ["A. António Guterres", "B. Ban Ki-moon", "C. Kofi Annan", "D. Boutros Boutros-Ghali"], 
        answer: "A. António Guterres" },
    // 65. Question
    { text: "Which city hosted the 2024 Olympics?", 
        options: ["A. Los Angeles", "B. Paris", "C. Tokyo", "D. Beijing"], 
        answer: "B. Paris" },
    // 66. Question
    { text: "Which country recently left the European Union?", 
        options: ["A. Italy", "B. France", "C. United Kingdom", "D. Germany"], 
        answer: "C. United Kingdom" },
    // 67. Question
    { text: "Who won the 2022 Nobel Peace Prize?", 
        options: ["A. Maria Ressa", "B. Malala Yousafzai", "C. Denis Mukwege", "D. Ales Bialiatski"], 
        answer: "D. Ales Bialiatski" },
    // 68. Question
    { text: "Which country hosted COP27 in 2022?", 
        options: ["A. Egypt", "B. France", "C. Brazil", "D. South Africa"], 
        answer: "A. Egypt" },
    // 69. Question
    { text: "Which country is the largest producer of crude oil?", 
        options: ["A. Saudi Arabia", "B. United States", "C. Russia", "D. Iran"], 
        answer: "B. United States" },
    // 70. Question
    { text: "Who is the current chairperson of the African Union?", 
        options: ["A. Macky Sall", "B. Cyril Ramaphosa", "C. Nana Akufo-Addo", "D. Muhammadu Buhari"], 
        answer: "A. Macky Sall" },
    // 71. Question
    { text: "Which country recently hosted the 2023 G20 Summit?", 
        options: ["A. United States", "B. India", "C. France", "D. Japan"], 
        answer: "B. India" },
    // 72. Question
    { text: "What is the capital of Ukraine?", 
        options: ["A. Kyiv", "B. Moscow", "C. Warsaw", "D. Minsk"], 
        answer: "A. Kyiv" },
    // 73. Question
    { text: "Which country won the FIFA Women’s World Cup 2023?", 
        options: ["A. England", "B. Germany", "C. United States", "D. Spain"], 
        answer: "D. Spain" },
    // 74. Question
    { text: "Who is the current Secretary-General of the United Nations?", 
        options: ["A. António Guterres", "B. Ban Ki-moon", "C. Kofi Annan", "D. Boutros Boutros-Ghali"], 
        answer: "A. António Guterres" },
    // 75. Question
    { text: "Which city hosted the 2024 Olympics?", 
        options: ["A. Los Angeles", "B. Paris", "C. Tokyo", "D. Beijing"], 
        answer: "B. Paris" },
    // 76. Question
    { text: "Which country recently left the European Union?", 
        options: ["A. Italy", "B. France", "C. United Kingdom", "D. Germany"], 
        answer: "C. United Kingdom" },
    // 77. Question
    { text: "Who won the 2022 Nobel Peace Prize?", 
        options: ["A. Maria Ressa", "B. Malala Yousafzai", "C. Denis Mukwege", "D. Ales Bialiatski"], 
        answer: "D. Ales Bialiatski" },
    // 78. Question
    { text: "Which country hosted COP27 in 2022?", 
        options: ["A. Egypt", "B. France", "C. Brazil", "D. South Africa"], 
        answer: "A. Egypt" },
    // 79. Question
    { text: "Which country is the largest producer of crude oil?", 
        options: ["A. Saudi Arabia", "B. United States", "C. Russia", "D. Iran"], 
        answer: "B. United States" },
    // 80. Question
    { text: "Who is the current chairperson of the African Union?", 
        options: ["A. Macky Sall", "B. Cyril Ramaphosa", "C. Nana Akufo-Addo", "D. Muhammadu Buhari"], 
        answer: "A. Macky Sall" },
    // 81. Question
    { text: "Which country recently hosted the 2023 G20 Summit?", 
        options: ["A. United States", "B. India", "C. France", "D. Japan"], 
        answer: "B. India" },
    // 82. Question
    { text: "What is the capital of Ukraine?", 
        options: ["A. Kyiv", "B. Moscow", "C. Warsaw", "D. Minsk"], 
        answer: "A. Kyiv" },
    // 83. Question
    { text: "Which country won the FIFA Women’s World Cup 2023?", 
        options: ["A. England", "B. Germany", "C. United States", "D. Spain"], 
        answer: "D. Spain" },
    // 84. Question
    { text: "Who is the current Secretary-General of the United Nations?", 
        options: ["A. António Guterres", "B. Ban Ki-moon", "C. Kofi Annan", "D. Boutros Boutros-Ghali"], 
        answer: "A. António Guterres" }
    
];
// QUESTIONS END





// Other functions - Backend
let timerInterval;
const questionButtonsContainer1 = document.getElementById("page1");
const questionButtonsContainer2 = document.getElementById("page2");
const questionButtonsContainer3 = document.getElementById("page3");
const buttonsPerPage = 30;

function initializeButtons() {
    for (let i = 1; i <= 84; i++) {
        const button = document.createElement("a");
        button.className = "question-button";
        button.textContent = i;
        button.href = "#";
        button.onclick = () => openQuestion(i - 1);
        button.addEventListener("click", () => markButton(button, i));
        if (i <= buttonsPerPage) {
            questionButtonsContainer1.appendChild(button);
        } else if (i <= buttonsPerPage * 2) {
            questionButtonsContainer2.appendChild(button);
        } else {
            questionButtonsContainer3.appendChild(button);
        }
    }
    loadButtonState();
}


function showAnswer() {
    const correctAnswer = questions.find(q => q.text === document.getElementById("question-text").textContent).answer;
    document.querySelectorAll(".question-options li").forEach(option => {
        if (option.textContent === correctAnswer) {
            option.classList.add("correct-answer");
        }
    });
}

function markButton(button, number) {
    button.classList.add("clicked");
    saveButtonState(number);
}

function saveButtonState(number) {
    let clickedButtons = JSON.parse(localStorage.getItem("clickedButtons")) || [];
    if (!clickedButtons.includes(number)) {
        clickedButtons.push(number);
        localStorage.setItem("clickedButtons", JSON.stringify(clickedButtons));
    }
}

function loadButtonState() {
    let clickedButtons = JSON.parse(localStorage.getItem("clickedButtons")) || [];
    clickedButtons.forEach(number => {
        document.querySelectorAll(".question-button")[number - 1].classList.add("clicked");
    });
}


function closeModal() {
    const questionModal = document.getElementById("questionModal");
    const resetBtn = document.querySelector(".reset-btn");
    questionModal.style.display = "none";
    stopTimer();
    resetBtn.classList.remove("disabled");
}

function startTimer() {
    let timeLeft = 15;
    const timerDisplay = document.getElementById("timer-count");
    timerDisplay.textContent = timeLeft;
    const audio = document.getElementById("ding");

    timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft > 0) {
            timerDisplay.textContent = timeLeft;
        } else {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Time's up!";
            audio.play();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}


function resetButtons() {
    const password = prompt("Please enter the password to reset the questions:");
    if (password === "ca-quiz") {
        localStorage.removeItem("clickedButtons");
        document.querySelectorAll(".question-button").forEach(button => button.classList.remove("clicked"));
    } else {
        alert("Incorrect password.");
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase(); 
    if (key === 'r') {
        resetButtons();
    } else if (key === 'arrowright') {
        changePage(1); 
    } else if (key === 'arrowleft') {
        changePage(-1); 
    } else if (key === 'backspace') {
        closeModal(); 
    }
});

function changePage(direction) {
    currentPage += direction;
    if (currentPage < 1) currentPage = 1;
    if (currentPage > 3) currentPage = 3;
    updatePageVisibility();
}

function updatePageVisibility() {
    document.getElementById("page1").classList.toggle("active", currentPage === 1);
    document.getElementById("page2").classList.toggle("active", currentPage === 2);
    document.getElementById("page3").classList.toggle("active", currentPage === 3);
    document.getElementById("page-number").textContent = `Page ${currentPage}`;
    document.getElementById("prev-page").style.display = currentPage === 1 ? "none" : "block";
    document.getElementById("next-page").style.display = currentPage === 3 ? "none" : "block";
}

function openQuestion(index) {
    const questionButton = document.querySelectorAll(".question-button")[index];
    if (questionButton.classList.contains("clicked")) {
        return;  
    }//remove this if you want to access questions that were already accessed without resetting
    
    const questionModal = document.getElementById("questionModal");
    const questionText = document.getElementById("question-text");
    const questionHeader = document.getElementById("question-header");
    const questionOptions = document.getElementById("question-options");
    const resetBtn = document.querySelector(".reset-btn");
    const question = questions[index];
    questionText.textContent = question.text;
    questionHeader.textContent = `QUESTION ${index + 1}`;
    questionOptions.innerHTML = question.options.map(opt => `<li>${opt}</li>`).join("");
    questionModal.style.display = "flex";
    startTimer();
    resetBtn.classList.add("disabled");
}

function closeModal() {
    const questionModal = document.getElementById("questionModal");
    const resetBtn = document.querySelector(".reset-btn");
    questionModal.style.display = "none";
    stopTimer();
    resetBtn.classList.remove("disabled");
}

function startTimer() {
    let timeLeft = 15;
    const timerDisplay = document.getElementById("timer-count");
    timerDisplay.textContent = timeLeft;
    const audio = document.getElementById("ding");

    timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft > 0) {
            timerDisplay.textContent = timeLeft;
        } else {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Time's up!";
            audio.play();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}


function initializePage() {
    initializeButtons();
    updatePageVisibility();
}
function startQuiz() {
window.location.href = "index.html";
}