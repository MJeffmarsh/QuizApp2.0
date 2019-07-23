const questions = [
    {
        num: 1,
        prompt: `Who is Zelda?`,
        ans1: `An elf that wears green and wields a sword`,
        ans2: `The princess of Hyrule`,
        ans3: `The horse the main playable character rides`,
        ans4: `A big green monster`,
        correct: `The princess of Hyrule`
    },
    {
        num: 2,
        prompt: `What is the name of the main character you play as in all the Legend of Zelda games?`,
        ans1: `Mario`,
        ans2: `Zelda`,
        ans3: `Link`,
        ans4: `Tingle`,
        correct: `Link`
    },
    {
        num: 3,
        prompt: `What is the name of Link's horse?`,
        ans1: `Bulls-eye`,
        ans2: `Aguro`,
        ans3: `Epona`,
        ans4: `Bulma`,
        correct: `Epona`
    },
    {
        num: 4,
        prompt: `What is the name of Link's sword?`,
        ans1: `The Master Sword`,
        ans2: `Excalibur`,
        ans3: `Oathkeeper`,
        ans4: `Aerondight`,
        correct: `The Master Sword`
    },
    {
        num: 5,
        prompt: `Who is the main antogonist of the majority of Zelda games?`,
        ans1: `Bowser`,
        ans2: `Midna`,
        ans3: `Ganon`,
        ans4: `Frieza`,
        correct: `Ganon`
    }
];

let currentQuestion = 0;
let score = 0;

function renderPrompt () {
 return `<div class="question"><h2>${questions[currentQuestion].prompt}</h2></div>
<form>
 <fieldset>
     <label class="options"><input type="radio" name="option" value="1" required />A. <span >${questions[currentQuestion].ans1}</span></label>
     <label class="options"><input type="radio" name="option" value="2" required />B. <span >${questions[currentQuestion].ans2}</span></label>
     <label class="options"><input type="radio" name="option" value="3" required />C. <span >${questions[currentQuestion].ans3}</span></label>
     <label class="options"><input type="radio" name="option" value="4" required />D. <span >${questions[currentQuestion].ans4}</span></label>
     <button type="submit" class="sub-btn" >Submit</button>
 </fieldset>   
</form>`;  
}

function updateQuestionNum () {
    currentQuestion ++;
    $('.currentQuestion').text(currentQuestion);
}

function raiseScore () {
    score ++;
    $('.score').text(score);
}

function quizStart () {
    $('.quiz-box').on('click', ".start-btn",
    function (event) {
        $('.start').remove();
        $('.quiz-box').html(renderPrompt());
        updateQuestionNum();
    });
}

let isRight = `<div class="isRight"><h3>Correct!</h3></div>
    <button class="next-btn" type="button" >Next</button>`;


let isWrong =  `<div class="isWrong"><h3>Wrong! The correct answer is ${questions[currentQuestion].correct}!</h3></div>
      <button class="next-btn" type="button" >Next</button>`;


/*function nextQuestion () {
    $('.quiz-box').on('click', ".next-btn", function (event) {
         });
}*/

function feedback () {
    $('.quiz-box').on('submit', function (event) {
        event.preventDefault();
        let markedOption = $('.options:checked');
        let correctOption = `${questions[currentQuestion].correct}`;
        if (markedOption === correctOption) {
            $('.quiz-box').html(isRight);
        } else {
            $('.quiz-box').html(isWrong);
        }
    });
}







function runQuiz () {
    quizStart();
    feedback();
    //nextQuestion();
}

$(runQuiz);