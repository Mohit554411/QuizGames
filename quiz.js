const questionObj =
    [
        {
            correctAnswer: 'Three ',
            options: ['Two', 'Three ', 'Four', 'Five'],
            question:
                "How many pieces of bun are in a Mcdonald's Big Mac?",
        },
        {
            correctAnswer: 'The Beatles',
            options: ['The Beatles', 'The Rolling Stones', 'The Who', 'The Kinks'],
            question:
                "Which band recorded the album 'The White Album'?",
        },
        {
            correctAnswer: 'The Great Wall of China',
            options: ['The Great Wall of China', 'The Pyramids of Giza', 'The Colosseum', 'The Taj Mahal'],
            question:
                "What is the longest Wall in the world?",
        }

    ];






let score = 0;
let currentQuestionIndex = 0;

//Accessing all the elements:
const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextButton = document.getElementById("next");

displayQuestion();
nextButton.addEventListener("click", ()=>{
    scoreEl.textContent = `Score: ${score}/ ${questionObj.length}`;
    nextQuestion();
});


function displayQuestion() {
    const { correctAnswer, options, question } = questionObj[currentQuestionIndex];
    //Manipulating the DOM:
    //Setting question text content
    questionEl.textContent = `${currentQuestionIndex+1} / ${questionObj.length} : ${question}`; // directly accessing 'question' due to destructuring.

    shuffledOptions = shuffle(options);

    shuffledOptions.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => {
            if (option === correctAnswer) {
                score++;
            }
            else {
                score = score - 0.25;
            }
            scoreEl.textContent = `Score: ${score}`;
            nextQuestion();
        });
        optionEl.appendChild(button);
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionObj.length) {
        optionEl.innerHTML = "";
        displayQuestion();
    }
    else {
        optionEl.innerHTML = "";
        questionEl.textContent = "Quiz Completed";
        nextButton.remove();
    }
}
// Function to shuffle the options
function shuffle(options) {
    let currentIndex = options.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        temporaryValue = options[currentIndex];
        options[currentIndex] = options[randomIndex];
        options[randomIndex] = temporaryValue;
    }
    return options;
}


