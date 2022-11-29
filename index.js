let hasBlackjack = false
let isAlive = false
let message = document.getElementById("messageEl")
let card = document.getElementById("card-fn")
let sumFn = document.getElementById("sum-fn")
let messageEl = "" 
let sum = 0
let firstCard 
let secondCard
let cards = []

function randGen (){
    return Math.floor(Math.random() * 13) + 1
} 

function startFn (){
    isAlive = true

    firstCard = randGen()
    secondCard = randGen()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGen()
}

function renderGen(){
    card.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        card.textContent += cards[i] + " "
    }

    sumFn.textContent = "Sum: " + sum

    if(sum <= 20) {
        message.textContent = "Do you want to draw a new card" 
    }
    else if (sum === 21) {
        message.textContent = "You've got blackjack"
        hasBlackjack = true
    }
    else{
        message.textContent = "You're out of the game"
        isAlive = false
    }
}
  
function newCard(){
    if (hasBlackjack === false && isAlive === true){
        let newDraw = randGen()
        sum += newDraw
        cards.push(newDraw)
        renderGen()
    }
}