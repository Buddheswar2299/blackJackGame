
const cards = document.getElementById('card')
const Sum = document.getElementById('sum')
const startGame = document.getElementById('start-game')
const newCard = document.getElementById('new-card')
const drawCard = document.getElementById('draw-card')
const restartBtn = document.getElementById('restart')
let hasLive = false
let sum = 0 ;
let twoCards = []


function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) +1 

    if(randomNumber >10){
        return 10
    }else if(randomNumber === 1 ){
        return 11

    }else{
        return randomNumber
    }

}




startGame.addEventListener('click',()=>{

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    twoCards = [firstCard , secondCard]

    sum = firstCard + secondCard
    console.log(sum)
    console.log(twoCards.join(' '))

    render()
})

function render(){
    cards.textContent = `Cards: ${twoCards.join(' ')}`
    Sum.textContent = `Sum: ${sum}`
    let message = ''
    if(sum <21){
        message = "Do You want to draw a another card"
        hasLive = true
    }
    if(sum === 21 ){
        message = "You won "
        hasLive = false
    }
    if(sum >21){
        message = 'You Lost the game'
        hasLive = false
        
    }
    console.log(hasLive)
    drawCard.textContent = message
}


newCard.addEventListener('click',()=>{
if(hasLive === true){
    let thirdCard = getRandomCard()
    twoCards.push(thirdCard)
    sum += thirdCard
    render()
}
})

restartBtn.addEventListener('click',()=>{
    twoCards = []
    sum = ' '
    render()

})




