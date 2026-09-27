
/* =========================================================
   ASSESSPRO - ONLINE ASSESSMENT MANAGEMENT SYSTEM
   JavaScript File

   Features:
   - Multiple assessments
   - Questions and answers
   - Countdown timer
   - Next / Previous navigation
   - Question navigation
   - Score calculation
   - Pass / Fail
   - Restart assessment
   - Certificate generation
   - Certificate download
   - LocalStorage
   ========================================================= */


/* =========================================================
   1. QUESTIONS DATABASE
   ========================================================= */

const assessments = {

    python: {
        title: "Python Fundamentals",
        duration: 30,
        questions: [

            {
                question: "Which keyword is used to define a function in Python?",
                options: ["function", "def", "fun", "define"],
                answer: 1
            },

            {
                question: "Which of the following is a Python list?",
                options: [
                    "(1, 2, 3)",
                    "[1, 2, 3]",
                    "{1, 2, 3}",
                    "<1, 2, 3>"
                ],
                answer: 1
            },

            {
                question: "Which symbol is used for comments in Python?",
                options: ["//", "/* */", "#", "--"],
                answer: 2
            },

            {
                question: "Which data type stores True or False?",
                options: ["int", "str", "bool", "float"],
                answer: 2
            },

            {
                question: "What is the output of 2 ** 3?",
                options: ["6", "8", "9", "5"],
                answer: 1
            },

            {
                question: "Which function is used to get the length of a list?",
                options: ["length()", "size()", "len()", "count()"],
                answer: 2
            },

            {
                question: "Which keyword is used to create a class?",
                options: ["object", "class", "struct", "define"],
                answer: 1
            },

            {
                question: "Which collection does NOT allow duplicate values?",
                options: ["List", "Tuple", "Set", "String"],
                answer: 2
            },

            {
                question: "Which function is used to display output?",
                options: ["display()", "show()", "print()", "output()"],
                answer: 2
            },

            {
                question: "Which operator is used for floor division?",
                options: ["/", "//", "%", "**"],
                answer: 1
            }

        ]
    },


    cpp: {
        title: "C++ Programming",
        duration: 30,
        questions: [

            {
                question: "Which symbol is used to end a C++ statement?",
                options: [".", ",", ";", ":"],
                answer: 2
            },

            {
                question: "Which header file is commonly used for input and output?",
                options: ["stdio.h", "iostream", "string.h", "math.h"],
                answer: 1
            },

            {
                question: "Which keyword is used to create a class?",
                options: ["object", "class", "struct", "define"],
                answer: 1
            },

            {
                question: "Which operator is used to access members through an object?",
                options: [".", "->", "::", "#"],
                answer: 0
            },

            {
                question: "Which function is the entry point of a C++ program?",
                options: ["start()", "begin()", "main()", "run()"],
                answer: 2
            },

            {
                question: "Which concept allows the same function name with different parameters?",
                options: [
                    "Inheritance",
                    "Encapsulation",
                    "Function Overloading",
                    "Abstraction"
                ],
                answer: 2
            },

            {
                question: "Which keyword is used for inheritance?",
                options: ["extends", "inherits", ":", "implements"],
                answer: 2
            },

            {
                question: "Which data type stores a single character?",
                options: ["string", "char", "character", "text"],
                answer: 1
            },

            {
                question: "Which operator is used for logical AND?",
                options: ["&", "&&", "||", "!"],
                answer: 1
            },

            {
                question: "Which feature allows a class to have multiple constructors?",
                options: [
                    "Constructor Overloading",
                    "Inheritance",
                    "Polymorphism",
                    "Abstraction"
                ],
                answer: 0
            }

        ]
    },


    java: {
        title: "Java Programming",
        duration: 30,
        questions: [

            {
                question: "Which keyword is used to create a class in Java?",
                options: ["class", "Class", "struct", "object"],
                answer: 0
            },

            {
                question: "Which method is the starting point of a Java program?",
                options: [
                    "start()",
                    "main()",
                    "run()",
                    "execute()"
                ],
                answer: 1
            },

            {
                question: "Which keyword is used to inherit a class?",
                options: ["inherits", "extends", "implements", "super"],
                answer: 1
            },

            {
                question: "Which keyword creates an object?",
                options: ["object", "create", "new", "instance"],
                answer: 2
            },

            {
                question: "Which data type stores whole numbers?",
                options: ["float", "double", "int", "char"],
                answer: 2
            },

            {
                question: "Which keyword prevents inheritance?",
                options: ["static", "private", "final", "constant"],
                answer: 2
            },

            {
                question: "Which concept allows one interface to have multiple implementations?",
                options: [
                    "Inheritance",
                    "Polymorphism",
                    "Compilation",
                    "Encapsulation"
                ],
                answer: 1
            },

            {
                question: "Which keyword is used to handle exceptions?",
                options: ["try", "check", "error", "handle"],
                answer: 0
            },

            {
                question: "Java source code is compiled into:",
                options: [
                    "Machine code",
                    "Bytecode",
                    "Binary code",
                    "Assembly"
                ],
                answer: 1
            },

            {
                question: "Which company originally developed Java?",
                options: ["Microsoft", "Sun Microsystems", "Google", "IBM"],
                answer: 1
            }

        ]
    },


    sql: {
        title: "SQL & Databases",
        duration: 30,
        questions: [

            {
                question: "What does SQL stand for?",
                options: [
                    "Structured Query Language",
                    "Simple Query Language",
                    "System Query Language",
                    "Structured Question Language"
                ],
                answer: 0
            },

            {
                question: "Which command is used to retrieve data?",
                options: ["GET", "SELECT", "FETCH", "READ"],
                answer: 1
            },

            {
                question: "Which command is used to add new records?",
                options: ["ADD", "INSERT", "CREATE", "UPDATE"],
                answer: 1
            },

            {
                question: "Which command modifies existing records?",
                options: ["CHANGE", "MODIFY", "UPDATE", "ALTER"],
                answer: 2
            },

            {
                question: "Which command removes records?",
                options: ["REMOVE", "DELETE", "DROP", "CLEAR"],
                answer: 1
            },

            {
                question: "Which clause filters records?",
                options: ["FILTER", "WHERE", "CHECK", "HAVING"],
                answer: 1
            },

            {
                question: "Which key uniquely identifies a row?",
                options: [
                    "Foreign Key",
                    "Primary Key",
                    "Candidate Key",
                    "Super Key"
                ],
                answer: 1
            },

            {
                question: "Which command creates a new table?",
                options: [
                    "NEW TABLE",
                    "MAKE TABLE",
                    "CREATE TABLE",
                    "ADD TABLE"
                ],
                answer: 2
            },

            {
                question: "Which SQL keyword sorts query results?",
                options: [
                    "SORT BY",
                    "ORDER BY",
                    "GROUP BY",
                    "ARRANGE"
                ],
                answer: 1
            },

            {
                question: "Which clause groups rows with the same values?",
                options: [
                    "GROUP BY",
                    "ORDER BY",
                    "COLLECT BY",
                    "JOIN"
                ],
                answer: 0
            }

        ]
    }

};


/* =========================================================
   2. GLOBAL VARIABLES
   ========================================================= */

let currentAssessment = null;
let currentQuestion = 0;
let userAnswers = [];
let timeLeft = 0;
let timer = null;
let assessmentSubmitted = false;


/* =========================================================
   3. GET ASSESSMENT FROM URL
   ========================================================= */

function getAssessmentFromURL() {

    const params =
        new URLSearchParams(window.location.search);

    const testName =
        params.get("test");

    if (testName && assessments[testName]) {
        return testName;
    }

    return "python";
}


/* =========================================================
   4. START ASSESSMENT
   ========================================================= */

function startAssessment(
    testName = getAssessmentFromURL()
) {

    if (!assessments[testName]) {

        alert("Assessment not found.");

        return;
    }

    currentAssessment =
        assessments[testName];

    currentQuestion = 0;

    userAnswers =
        new Array(
            currentAssessment.questions.length
        ).fill(null);

    timeLeft =
        currentAssessment.duration * 60;

    assessmentSubmitted = false;

    updateAssessmentTitle();

    renderQuestion();

    renderQuestionNavigation();

    startTimer();
}


/* =========================================================
   5. UPDATE ASSESSMENT TITLE
   ========================================================= */

function updateAssessmentTitle() {

    const titleElement =
        document.getElementById(
            "assessment-title"
        );

    if (titleElement) {

        titleElement.textContent =
            currentAssessment.title;
    }
}


/* =========================================================
   6. DISPLAY QUESTION
   ========================================================= */

function renderQuestion() {

    if (!currentAssessment) return;

    const question =
        currentAssessment.questions[currentQuestion];

    const questionNumber =
        document.getElementById(
            "question-number"
        );

    const questionText =
        document.getElementById(
            "question-text"
        );

    const optionsContainer =
        document.getElementById(
            "options"
        );

    const currentNumber =
        document.getElementById(
            "current-question"
        );


    if (questionNumber) {

        questionNumber.textContent =
            `Question ${currentQuestion + 1} of ${
                currentAssessment.questions.length
            }`;
    }


    if (currentNumber) {

        currentNumber.textContent =
            currentQuestion + 1;
    }


    if (questionText) {

        questionText.textContent =
            question.question;
    }


    if (!optionsContainer) return;


    optionsContainer.innerHTML = "";


    question.options.forEach(
        (option, index) => {

            const optionLabel =
                document.createElement(
                    "label"
                );

            optionLabel.className =
                "option";


            if (
                userAnswers[currentQuestion] ===
                index
            ) {

                optionLabel.classList.add(
                    "selected"
                );
            }


            const input =
                document.createElement(
                    "input"
                );

            input.type = "radio";

            input.name = "answer";

            input.value = index;

            input.checked =
                userAnswers[currentQuestion] ===
                index;


            const span =
                document.createElement(
                    "span"
                );

            span.textContent =
                option;


            input.addEventListener(
                "change",
                function () {

                    userAnswers[currentQuestion] =
                        Number(this.value);

                    updateSelectedOption();

                    updateQuestionNavigation();
                }
            );


            optionLabel.appendChild(input);

            optionLabel.appendChild(span);

            optionsContainer.appendChild(
                optionLabel
            );

        }
    );


    updateNavigationButtons();
}


/* =========================================================
   7. HIGHLIGHT SELECTED ANSWER
   ========================================================= */

function updateSelectedOption() {

    const options =
        document.querySelectorAll(
            ".option"
        );

    options.forEach(
        option => {

            const radio =
                option.querySelector(
                    "input"
                );

            if (
                radio &&
                radio.checked
            ) {

                option.classList.add(
                    "selected"
                );

            } else {

                option.classList.remove(
                    "selected"
                );
            }
        }
    );
}


/* =========================================================
   8. NEXT QUESTION
   ========================================================= */

function nextQuestion() {

    if (!currentAssessment) return;

    if (assessmentSubmitted) return;


    if (
        currentQuestion <
        currentAssessment.questions.length - 1
    ) {

        currentQuestion++;

        renderQuestion();

        updateQuestionNavigation();

    } else {

        const confirmSubmit =
            confirm(
                "You have reached the last question. Submit your assessment?"
            );

        if (confirmSubmit) {

            submitAssessment();
        }
    }
}


/* =========================================================
   9. PREVIOUS QUESTION
   ========================================================= */

function previousQuestion() {

    if (!currentAssessment) return;

    if (assessmentSubmitted) return;


    if (currentQuestion > 0) {

        currentQuestion--;

        renderQuestion();

        updateQuestionNavigation();
    }
}


/* =========================================================
   10. QUESTION NUMBER NAVIGATION
   ========================================================= */

function goToQuestion(
    questionIndex
) {

    if (!currentAssessment) return;

    if (assessmentSubmitted) return;


    if (
        questionIndex >= 0 &&
        questionIndex <
        currentAssessment.questions.length
    ) {

        currentQuestion =
            questionIndex;

        renderQuestion();

        updateQuestionNavigation();
    }
}


/* =========================================================
   11. RENDER QUESTION NAVIGATION
   ========================================================= */

function renderQuestionNavigation() {

    const navigation =
        document.getElementById(
            "question-navigation"
        );

    if (
        !navigation ||
        !currentAssessment
    ) {
        return;
    }


    navigation.innerHTML = "";


    currentAssessment.questions.forEach(
        (_, index) => {

            const button =
                document.createElement(
                    "button"
                );

            button.type = "button";

            button.textContent =
                index + 1;

            button.className =
                "question-number";


            button.addEventListener(
                "click",
                () => goToQuestion(index)
            );


            navigation.appendChild(
                button
            );
        }
    );


    updateQuestionNavigation();
}


/* =========================================================
   12. UPDATE QUESTION NAVIGATION
   ========================================================= */

function updateQuestionNavigation() {

    const buttons =
        document.querySelectorAll(
            ".question-number"
        );


    buttons.forEach(
        (button, index) => {

            button.classList.remove(
                "current",
                "answered"
            );


            if (
                index === currentQuestion
            ) {

                button.classList.add(
                    "current"
                );
            }


            if (
                userAnswers[index] !==
                null
            ) {

                button.classList.add(
                    "answered"
                );
            }
        }
    );
}


/* =========================================================
   13. UPDATE PREVIOUS / NEXT BUTTONS
   ========================================================= */

function updateNavigationButtons() {

    const previousButton =
        document.getElementById(
            "previous-btn"
        );

    const nextButton =
        document.getElementById(
            "next-btn"
        );


    if (previousButton) {

        previousButton.disabled =
            currentQuestion === 0;
    }


    if (nextButton) {

        if (
            currentQuestion ===
            currentAssessment.questions.length - 1
        ) {

            nextButton.textContent =
                "Submit Assessment";

        } else {

            nextButton.textContent =
                "Next →";
        }
    }
}


/* =========================================================
   14. TIMER
   ========================================================= */

function startTimer() {

    clearInterval(timer);

    updateTimer();


    timer =
        setInterval(
            () => {

                if (assessmentSubmitted) {

                    clearInterval(timer);

                    return;
                }


                timeLeft--;

                updateTimer();


                if (timeLeft <= 0) {

                    clearInterval(timer);

                    alert(
                        "Time is up! Your assessment will be submitted."
                    );

                    submitAssessment();
                }

            },
            1000
        );
}


/* =========================================================
   15. UPDATE TIMER DISPLAY
   ========================================================= */

function updateTimer() {

    const timerElement =
        document.getElementById(
            "timer"
        );

    if (!timerElement) return;


    const minutes =
        Math.floor(
            timeLeft / 60
        );

    const seconds =
        timeLeft % 60;


    timerElement.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


    if (timeLeft <= 60) {

        timerElement.classList.add(
            "timer-danger"
        );

    } else {

        timerElement.classList.remove(
            "timer-danger"
        );
    }
}


/* =========================================================
   16. SUBMIT ASSESSMENT
   ========================================================= */

function submitAssessment() {

    if (!currentAssessment) return;

    if (assessmentSubmitted) return;


    assessmentSubmitted = true;

    clearInterval(timer);


    let score = 0;


    currentAssessment.questions.forEach(
        (question, index) => {

            if (
                userAnswers[index] ===
                question.answer
            ) {

                score++;
            }
        }
    );


    const total =
        currentAssessment.questions.length;


    const percentage =
        Math.round(
            (score / total) * 100
        );


    const passed =
        percentage >= 60;


    const result = {

        assessment:
            currentAssessment.title,

        score:
            score,

        total:
            total,

        percentage:
            percentage,

        passed:
            passed,

        date:
            new Date().toLocaleDateString(
                "en-IN"
            )
    };


    localStorage.setItem(
        "lastAssessmentResult",
        JSON.stringify(result)
    );


    showResult(result);
}


/* =========================================================
   17. SHOW RESULT
   ========================================================= */

function showResult(result) {

    const assessmentContainer =
        document.getElementById(
            "assessment-container"
        );

    const resultContainer =
        document.getElementById(
            "result-container"
        );


    if (assessmentContainer) {

        assessmentContainer.style.display =
            "none";
    }


    if (!resultContainer) {

        alert(
            `Your Score: ${result.percentage}%`
        );

        return;
    }


    resultContainer.style.display =
        "block";


    const resultTitle =
        document.getElementById(
            "result-title"
        );

    const resultScore =
        document.getElementById(
            "result-score"
        );

    const resultMessage =
        document.getElementById(
            "result-message"
        );


    if (resultScore) {

        resultScore.textContent =
            `${result.percentage}%`;
    }


    if (result.passed) {

        if (resultTitle) {

            resultTitle.textContent =
                "🎉 Congratulations!";
        }


        if (resultMessage) {

            resultMessage.textContent =
                `You passed the ${result.assessment} assessment with ${result.score}/${result.total} correct answers.`;
        }

    } else {

        if (resultTitle) {

            resultTitle.textContent =
                "Keep Learning!";
        }


        if (resultMessage) {

            resultMessage.textContent =
                `You scored ${result.score}/${result.total}. You need 60% to pass.`;
        }
    }
}


/* =========================================================
   18. RESTART ASSESSMENT
   ========================================================= */

function restartAssessment() {

    clearInterval(timer);


    if (!currentAssessment) {

        startAssessment();

        return;
    }


    currentQuestion = 0;


    userAnswers =
        new Array(
            currentAssessment.questions.length
        ).fill(null);


    timeLeft =
        currentAssessment.duration * 60;


    assessmentSubmitted = false;


    const assessmentContainer =
        document.getElementById(
            "assessment-container"
        );

    const resultContainer =
        document.getElementById(
            "result-container"
        );


    if (assessmentContainer) {

        assessmentContainer.style.display =
            "block";
    }


    if (resultContainer) {

        resultContainer.style.display =
            "none";
    }


    renderQuestion();

    renderQuestionNavigation();

    startTimer();
}


/* =========================================================
   19. CERTIFICATE DATA
   ========================================================= */

function getCertificateData() {

    let result = null;


    try {

        result =
            JSON.parse(
                localStorage.getItem(
                    "lastAssessmentResult"
                )
            );

    } catch (error) {

        console.error(
            "Could not read assessment result:",
            error
        );

        return null;
    }


    if (
        !result ||
        !result.passed
    ) {

        return null;
    }


    return {

        studentName:
            localStorage.getItem(
                "studentName"
            ) || "Student Name",

        assessment:
            result.assessment,

        score:
            result.percentage,

        date:
            result.date
    };
}


/* =========================================================
   20. SAVE STUDENT NAME
   ========================================================= */

function saveStudentName() {

    const nameInput =
        document.getElementById(
            "student-name"
        );


    if (!nameInput) return;


    const name =
        nameInput.value.trim();


    if (!name) {

        alert(
            "Please enter your name."
        );

        return;
    }


    localStorage.setItem(
        "studentName",
        name
    );


    alert(
        "Name saved successfully!"
    );
}


/* =========================================================
   21. ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    return String(value)

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");
}


/* =========================================================
   22. GENERATE CERTIFICATE
   ========================================================= */

function generateCertificate() {

    const certificate =
        getCertificateData();


    if (!certificate) {

        alert(
            "You need to pass an assessment before receiving a certificate."
        );

        return;
    }


    const certificateWindow =
        window.open(
            "",
            "_blank"
        );


    if (!certificateWindow) {

        alert(
            "Please allow pop-ups to generate your certificate."
        );

        return;
    }


    /*
     * Escape all dynamic values before
     * inserting them into the HTML.
     */

    const safeStudentName =
        escapeHTML(
            certificate.studentName
        );

    const safeAssessment =
        escapeHTML(
            certificate.assessment
        );

    const safeScore =
        escapeHTML(
            certificate.score
        );

    const safeDate =
        escapeHTML(
            certificate.date
        );


    certificateWindow.document.write(`

        <!DOCTYPE html>

        <html lang="en">

        <head>

            <meta charset="UTF-8">

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            >

            <title>
                AssessPro Certificate
            </title>


            <style>

                * {
                    box-sizing: border-box;
                }


                body {

                    margin: 0;

                    padding: 40px;

                    font-family:
                        Arial,
                        Helvetica,
                        sans-serif;

                    background: #eff6ff;
                }


                .certificate {

                    max-width: 950px;

                    min-height: 650px;

                    margin: auto;

                    padding: 70px;

                    background: white;

                    border: 12px solid #dbeafe;

                    outline: 3px solid #2563eb;

                    outline-offset: -28px;

                    text-align: center;

                    display: flex;

                    flex-direction: column;

                    justify-content: center;

                    box-shadow:
                        0 20px 50px
                        rgba(
                            15,
                            23,
                            42,
                            0.15
                        );
                }


                .logo {

                    color: #2563eb;

                    font-size: 26px;

                    font-weight: bold;

                    margin-bottom: 30px;
                }


                .logo span {

                    font-size: 30px;
                }


                .title {

                    color: #2563eb;

                    letter-spacing: 4px;

                    font-size: 16px;

                    font-weight: bold;
                }


                h1 {

                    font-family:
                        Georgia,
                        serif;

                    font-size: 48px;

                    margin: 20px 0;

                    color: #0f172a;
                }


                .presented {

                    color: #64748b;

                    font-size: 16px;
                }


                .student {

                    font-family:
                        Georgia,
                        serif;

                    font-size: 40px;

                    color: #2563eb;

                    margin: 15px 0;

                    overflow-wrap: anywhere;
                }


                .description {

                    color: #475569;

                    font-size: 17px;
                }


                .details {

                    display: flex;

                    justify-content: center;

                    gap: 100px;

                    margin-top: 35px;
                }


                .details div {

                    display: flex;

                    flex-direction: column;
                }


                .details small {

                    color: #64748b;
                }


                .details strong {

                    color: #2563eb;

                    font-size: 20px;

                    margin-top: 5px;
                }


                .footer {

                    display: flex;

                    justify-content: space-between;

                    margin-top: 50px;

                    color: #2563eb;

                    font-weight: bold;
                }


                .verified {

                    color: #16a34a;
                }


                .download {

                    display: block;

                    margin: 30px auto;

                    padding: 13px 25px;

                    border: none;

                    border-radius: 10px;

                    background: #2563eb;

                    color: white;

                    font-size: 16px;

                    font-weight: bold;

                    cursor: pointer;
                }


                .download:hover {

                    background: #1d4ed8;
                }


                @media print {

                    body {

                        background: white;

                        padding: 0;
                    }


                    .download {

                        display: none;
                    }


                    .certificate {

                        box-shadow: none;
                    }
                }


                @media (max-width: 600px) {

                    body {

                        padding: 15px;
                    }


                    .certificate {

                        padding:
                            45px
                            25px;

                        min-height: 550px;
                    }


                    h1 {

                        font-size: 34px;
                    }


                    .student {

                        font-size: 30px;
                    }


                    .details {

                        gap: 35px;
                    }


                    .footer {

                        flex-direction: column;

                        gap: 10px;
                    }
                }

            </style>

        </head>


        <body>


            <div class="certificate">


                <div class="logo">

                    <span>◆</span>
                    AssessPro

                </div>


                <div class="title">

                    CERTIFICATE OF ACHIEVEMENT

                </div>


                <h1>

                    Certificate of Excellence

                </h1>


                <p class="presented">

                    This certificate is proudly
                    presented to

                </p>


                <div class="student">

                    ${safeStudentName}

                </div>


                <p class="description">

                    for successfully completing the

                    <strong>

                        ${safeAssessment}

                    </strong>

                    assessment.

                </p>


                <div class="details">


                    <div>

                        <small>
                            Score
                        </small>

                        <strong>

                            ${safeScore}%

                        </strong>

                    </div>


                    <div>

                        <small>
                            Date
                        </small>

                        <strong>

                            ${safeDate}

                        </strong>

                    </div>


                </div>


                <div class="footer">


                    <span>

                        AssessPro

                    </span>


                    <span class="verified">

                        ✓ Verified Achievement

                    </span>


                </div>


            </div>


            <button
                class="download"
                onclick="window.print()"
            >

                Download / Save Certificate

            </button>


        </body>

        </html>

    `);


    certificateWindow.document.close();
}


/* =========================================================
   23. DISPLAY LATEST RESULT ON CERTIFICATE PAGE
   ========================================================= */

function loadCertificatePage() {

    let result = null;


    try {

        result =
            JSON.parse(
                localStorage.getItem(
                    "lastAssessmentResult"
                )
            );

    } catch (error) {

        console.error(
            "Could not load certificate result:",
            error
        );

        return;
    }


    if (!result) return;


    const scoreElement =
        document.getElementById(
            "certificate-score"
        );


    const assessmentElement =
        document.getElementById(
            "certificate-assessment"
        );


    const dateElement =
        document.getElementById(
            "certificate-date"
        );


    if (scoreElement) {

        scoreElement.textContent =
            `${result.percentage}%`;
    }


    if (assessmentElement) {

        assessmentElement.textContent =
            result.assessment;
    }


    if (dateElement) {

        dateElement.textContent =
            result.date;
    }


    const nameElement =
        document.getElementById(
            "certificate-student"
        );


    if (nameElement) {

        nameElement.textContent =
            localStorage.getItem(
                "studentName"
            ) || "Student Name";
    }
}


/* =========================================================
   24. ASSESSMENT CARD LINKS
   ========================================================= */

function setupAssessmentLinks() {

    const links =
        document.querySelectorAll(
            "[data-assessment]"
        );


    links.forEach(
        link => {

            link.addEventListener(
                "click",
                function () {

                    const test =
                        this.dataset.assessment;


                    if (assessments[test]) {

                        window.location.href =
                            `assessment.html?test=${test}`;
                    }
                }
            );
        }
    );
}


/* =========================================================
   25. PAGE INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /*
         * If assessment page is open,
         * automatically start the test.
         */

        if (
            document.getElementById(
                "assessment-container"
            )
        ) {

            startAssessment();
        }


        /*
         * If certificate page is open,
         * load certificate information.
         */

        if (
            document.getElementById(
                "certificate-section"
            )
        ) {

            loadCertificatePage();
        }


        /*
         * Setup assessment links.
         */

        setupAssessmentLinks();


        /*
         * Next button
         */

        const nextButton =
            document.getElementById(
                "next-btn"
            );


        if (nextButton) {

            nextButton.addEventListener(
                "click",
                nextQuestion
            );
        }


        /*
         * Previous button
         */

        const previousButton =
            document.getElementById(
                "previous-btn"
            );


        if (previousButton) {

            previousButton.addEventListener(
                "click",
                previousQuestion
            );
        }


        /*
         * Restart button
         */

        const restartButton =
            document.getElementById(
                "restart-btn"
            );


        if (restartButton) {

            restartButton.addEventListener(
                "click",
                restartAssessment
            );
        }


        /*
         * Certificate button
         */

        const certificateButton =
            document.getElementById(
                "certificate-btn"
            );


        if (certificateButton) {

            certificateButton.addEventListener(
                "click",
                generateCertificate
            );
        }


        /*
         * Save student name
         */

        const saveNameButton =
            document.getElementById(
                "save-name-btn"
            );


        if (saveNameButton) {

            saveNameButton.addEventListener(
                "click",
                saveStudentName
            );
        }

    }
);

