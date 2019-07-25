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

let currentQuestion = 1;
let score = 0;

function renderPrompt () {
 return `<div class="question"><h2>${questions[currentQuestion-1].prompt}</h2></div>
<form>
 <fieldset>
     <label class="options"><input type="radio" name="option" value='${questions[currentQuestion-1].ans1}' required /><span>  ${questions[currentQuestion-1].ans1}</span></label>
     <label class="options"><input type="radio" name="option" value='${questions[currentQuestion-1].ans2}' required /><span>  ${questions[currentQuestion-1].ans2}</span></label>
     <label class="options"><input type="radio" name="option" value='${questions[currentQuestion-1].ans3}' required /><span>  ${questions[currentQuestion-1].ans3}</span></label>
     <label class="options"><input type="radio" name="option" value='${questions[currentQuestion-1].ans4}' required /><span>  ${questions[currentQuestion-1].ans4}</span></label>
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
        $('.quiz-box').html(renderPrompt()); 
        $('.currentQuestion').text(1);
    });
}

function optionRight () { return `<div class="feedback" id="right"><div><h3>Correct!</h3></div>
    <img src="https://media.giphy.com/media/VSJLRTebfPgnS/200.gif" alt="rotating heart container">
    <button class="cont-btn" type="button">Continue</button></div>`;}

function optionWrong () {
    return  `<div class="feedback" id="wrong"><div><h3>Hey, listen! The correct answer is ${questions[currentQuestion-1].correct}!</h3></div>
    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bf857e07-ecf2-43db-9045-55fac2cded2c/d97jt0s-7a652102-1a0e-47e5-b057-85692ea4c21b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JmODU3ZTA3LWVjZjItNDNkYi05MDQ1LTU1ZmFjMmNkZWQyY1wvZDk3anQwcy03YTY1MjEwMi0xYTBlLTQ3ZTUtYjA1Ny04NTY5MmVhNGMyMWIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.V-BR6gc8B3OI6HeJGyWD5iKwALNmkRjEygmAI46OWCc" alt="The fairy called Navi flying">
      <button class="cont-btn" type="button" >Continue</button></div>`;}  

function  quizResults () {
   return `<div class="feedback" id="results">
        <div><h3>You got ${score}/5 questions right!</h3></div>
        <img src="https://media1.giphy.com/media/EKRng3TzYyOaY/source.gif" alt="rotating Tri-force">
        <button class="restart" type="button">New Game</button>
    </div>`
    }      

function feedback () {
    $('.quiz-box').on('submit', function (event) {
        event.preventDefault();
        let markedOption = $('input:checked').val();
        let correctOption = questions[currentQuestion-1].correct;
        console.log(markedOption, correctOption)
        if (markedOption === correctOption) {
            $('.quiz-box').html(optionRight());
            raiseScore();
        } else {
            $('.quiz-box').html(optionWrong());
        }
    });
}

function nextQuestion () {
    $('.quiz-box').on('click', ".cont-btn", function (event) {
        if (currentQuestion >= 5) {
            $('.quiz-box').html(quizResults());
        } else {
            updateQuestionNum();
        $('.quiz-box').html(renderPrompt());
         }
    });
}

function quizRestart () {
    $('.quiz-box').on('click', ".restart", function (event) {
        location.reload();
    });
}

function runQuiz () {
    quizStart();
    feedback();
    nextQuestion();
    quizRestart();
}

$(runQuiz);