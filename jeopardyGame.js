const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')
const flippedCards = []
const jeopardyCategories = [
    {
        genre: 'WHO',
        questions: [
            {
                question: 'What is the name of the Jeopardy?',
                answers: ["I don't know", "I KNOW"],
                correct: "I KNOW",
                level: "easy"
            },
            {
                question: 'What is the name of the Jeopardy?',
                answers: ["I don't know", "I KNOW"],
                correct: "I KNOW",
                level: "medium"
            },
            {
                question: 'What is the name of the Jeopardy?',
                answers: ["I don't know", "I KNOW"],
                correct: "I KNOW",
                level: "hard"
            },
        ]
    },
    {
        genre: 'WHEN',
        questions: [
            {
                question: 'What is the name of the Jeopardy?',
                answers: ["I don't know", "I KNOW"],
                correct: "I KNOW",
                level: "easy"
            },
            {
                question: 'What is the name of the Jeopardy?',
                answers: ["I don't know", "I KNOW"],
                correct: "I KNOW",
                level: "medium"
            },
            {
                question: 'What is the name of the Jeopardy?',
                answers: ["I don't know", "I KNOW"],
                correct: "I KNOW",
                level: "hard"
            },
        ]
    },
    {
        genre: 'WHOM',
        questions: [
            {
                question: 'What is the name of the Jeopardy?',
                answers: ["I don't know", "I KNOW"],
                correct: "I KNOW",
                level: "easy"
            },
            {
                question: 'What is the name of the Jeopardy?',
                answers: ["I don't know", "I KNOW"],
                correct: "I KNOW",
                level: "medium"
            },
            {
                question: 'What is the name of the Jeopardy?',
                answers: ["I don't know", "I KNOW"],
                correct: "I KNOW",
                level: "hard"
            },
        ]
    },
    {
        genre: 'HOW MANY',
        questions: [
            {
                question: 'What is the name of the Jeopardy?',
                answers: ["I don't know", "I KNOW"],
                correct: "I KNOW",
                level: "easy"
            },
            {
                question: 'What is the name of the Jeopardy?',
                answers: ["I don't know", "I KNOW"],
                correct: "I KNOW",
                level: "easy"
            },
            {
                question: 'What is the name of the Jeopardy?',
                answers: ["I don't know", "I KNOW"],
                correct: "I KNOW",
                level: "easy"
            },
        ]
    },
    {
        genre: 'WHAT',
        questions: [
            {
                question: 'What is the name of the Jeopardy?',
                answers: ["I don't know", "I KNOW"],
                correct: "I KNOW",
                level: "easy"
            },
            {
                question: 'What is the name of the Jeopardy?',
                answers: ["I don't know", "I KNOW"],
                correct: "I KNOW",
                level: "medium"
            },
            {
                question: 'What is the name of the Jeopardy?',
                answers: ["I don't know", "I KNOW"],
                correct: "I KNOW",
                level: "hard"
            },
        ]
    },   
]

function addCategory(category) {
    const column = document.createElement('div')
    column.classList.add('column')
    const genre = document.createElement('div')
    genre.classList.add('genre-column')
    genre.innerHTML = category.genre
    column.append(genre)
    category.questions.forEach(question => {
        const card = document.createElement('div')
        card.classList.add('card')
        if(question.level === 'easy') {
            card.innerHTML = 100
        } else if(question.level === 'medium') {
            card.innerHTML = 200
        } else if(question.level === 'hard') {
            card.innerHTML = 300
        }
        card.setAttribute('data-question', question.question)
        card.setAttribute('data-answer-1', question.answers[0])
        card.setAttribute('data-answer-2', question.answers[1])
        card.setAttribute('data-correct', question.correct)
        card.setAttribute('data-value', card.innerHTML)
        column.append(card)
    })
    game.append(column)   
}

jeopardyCategories.forEach(category => addCategory(category))
const cards = Array.from(document.querySelectorAll('.card'))
cards.forEach(card => card.addEventListener('click',flipCard))

let score = 0


function flipCard(){
    console.log('flipCard triggered')

    // create an array consist of all cards in this document.
    const allCards = Array.from(document.querySelectorAll('.card'))

    // in this array remove event listeners for each card.
    allCards.forEach(card => card.removeEventListener('click',flipCard))

    // set flipped card apperance.
    this.innerHTML = ''
    this.style.fontSize = '15px'
    this.style.lineHeight = '15px'
    const textDisplay = document.createElement('div')
    textDisplay.classList.add('textDisplay')
    textDisplay.innerHTML = this.getAttribute('data-question')
    const firstButton = document.createElement('button')
    const secondButton = document.createElement('button')

    // give this two buttons get answer function
    firstButton.addEventListener('click', getAnswer)
    secondButton.addEventListener('click', getAnswer)
    firstButton.innerHTML = this.getAttribute('data-answer-1')
    secondButton.innerHTML = this.getAttribute('data-answer-2')
    this.append(textDisplay,firstButton,secondButton)
    //console.log(flippedCards)
}

function getAnswer(){
    // create an array consist of all cards in this document.
    const allCards = Array.from(document.querySelectorAll('.card')) 
    allCards.forEach(card => card.addEventListener('click',flipCard))
    //console.log(card)})
    
    const correct = this.parentElement.getAttribute('data-correct')
    const card = this.parentElement
    console.log(card)
    const value = card.getAttribute('data-value')
    const answer =  this.innerHTML
    while(card.firstChild){
        card.removeChild(card.lastChild)
    }
    if(answer === correct){
        score += parseInt(value)
        scoreDisplay.innerHTML = score
        card.innerHTML = value
        card.className ='correct'
    } else{
        card.className ='wrong'
    }
    
    card.removeEventListener('click',flipCard)
}

/*
function flipCard(){
    //flippedCards.push(this)
    cards.forEach(card => card.removeEventListener('click', flipCard))
    this.innerHTML = ''
    this.style.fontSize = '15px'
    this.style.lineHeight = '15px'
    const textDisplay = document.createElement('div')
    textDisplay.innerHTML = this.getAttribute('data-question')
    const firstButton = document.createElement('button')
    const secondButton = document.createElement('button')
    firstButton.addEventListener('click', getAnswer)
    secondButton.addEventListener('click', getAnswer)
    firstButton.innerHTML = this.getAttribute('data-answer-1')
    secondButton.innerHTML = this.getAttribute('data-answer-2')
    this.append(textDisplay,firstButton,secondButton)
    console.log(flippedCards)
}

function getAnswer(){
    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.addEventListener('click', flipCard))
 
    allCards.forEach(card => {
        if(!flippedCards.includes(card)){
            card.addEventListener('click', flipCard)
    }})
    const correct = this.parentElement.getAttribute('data-correct')
    const card = this.parentElement
    const value = card.getAttribute('data-value')
    const answer = this.innerHTML
    if(answer === correct){
        score += parseInt(value)
        scoreDisplay.innerHTML = score
    }
    setTimeout(()=> {
        while(card.firstChild){
            card.removeChild(card.lastChild)
        }
    },100)
   
}*/





