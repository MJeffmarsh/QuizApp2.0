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

function renderPromt () {
 return `<div class="quiz-name">Legend of Zelda 101</div>
 <div class="question">${questions.prompt}</div>
<form>
 <fieldset>
     <label class="options"><input type="radio" name="option" value="1" />A. <span id="opt1">${questions.ans1}</span></label>
     <label class="options"><input type="radio" name="option" value="2" />B. <span id="opt2">${questions.ans1}</span></label>
     <label class="options"><input type="radio" name="option" value="3" />C. <span id="opt3">${questions.ans1}</span></label>
     <label class="options"><input type="radio" name="option" value="4" />D. <span id="opt4">${questions.ans1}</span></label>
     <button class="sub-btn" type="submit" value="submit">Submit</button>
 </fieldset>   
</form>`;  
}

function quizStart () {
    $('.quiz-box').on('click', ".start-btn",
    function (event) {
        $('.start').remove();
        
    });
}

function nextPrompt () {

}

function runQuiz () {
    quizStart();
}

$(runQuiz);