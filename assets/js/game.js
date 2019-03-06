// list of words for the game
const bands = [`Eurythmics`, `INXS`, `Erasure`, `Wham`, `Aha`, `Alphaville`]
// randomly choosing a band name
let currentBand
// creates underscores based on length of secret word
let ansArr
// informational variables/arrays at game start
let winCount = 0
let guessCount
// Serves as unavailable(can't be re-guessed) letter bank
let ltrsGuessed
let ltrsRemain
// empty variable to serve as user's guess
let ltrGuess = null
let actualWord
// To be used in case of win
let bandDisplay
 // swaps base image with chosen band image
const changeImg = (link) => {
    document.getElementById("currentImg").src=link;
}
// Game's init/restart function
const newGame = _ => {
    // randomly choosing a band name
    currentBand = bands[Math.floor(Math.random() * bands.length)]
    // grabbing original band name(with caps) for win display
    bandDisplay = currentBand
    // converting the game-relevant string for functionality
    currentBand = currentBand.toLowerCase()
    // resets the underscore array
    ansArr = []
    // creates underscores based on length of secret word
    for (var i = 0; i < currentBand.length; i++) {
        ansArr[i] = `_`;
    }
    // these will serve as game progress tracking
    guessCount = currentBand.length + 5
    ltrsRemain = currentBand.length
    // resets the guessed letters array
    ltrsGuessed = []
    // array of the correct letters for the secret word
    actualWord = currentBand.split(``)
    // updates game display with base/new values
    document.querySelector(`#wordSpace`).innerHTML = ansArr.join(` `)
    document.querySelector(`#guessCounter`).innerHTML = guessCount
    document.querySelector(`#ltrGuessDisplay`).innerHTML = ltrsGuessed.join(`, `)
    document.querySelector(`#winCount`).innerHTML = winCount
}



// onkey event function to house most all game code
// will potentially be parented by a while loop tracking ltrRemain && guessCount
document.onkeydown = event => {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        ltrGuess = event.key.toLowerCase()
        // is it guessed, do we have guesses left
        if ((ltrsGuessed.indexOf(ltrGuess) === -1) && guessCount > 0) {
            ltrsGuessed.push(ltrGuess)
            guessCount--
            document.querySelector("#guessCounter").innerHTML = guessCount
            document.querySelector("#ltrGuessDisplay").innerHTML = ltrsGuessed.sort().join(` `)
        // check if itsin the word
            if ((actualWord.indexOf(ltrGuess) !== -1)) {
                // functional loop to take correct letter input and fill in word
                for (var j = 0; j < actualWord.length; j++) {
                    if (actualWord[j] === ltrGuess) {
                        ansArr[j] = ltrGuess;
                        ltrsRemain--
                    }
                }
                document.querySelector("#wordSpace").innerHTML = ansArr.join(` `)
                if (ltrsRemain === 0) {
                    // what happens if player wins
                    winCount++
                    document.querySelector(`#endMessageDisplay`).innerHTML = `You Won! It Was ${bandDisplay}!`
                    // change image to chosen band image and (play their song)
                    switch (bandDisplay) {
                        case bands[0]:
                            changeImg("./assets/images/EurAlbumCover.jpg")
                            // audio = new Audio('./assets/sounds/Eur-Dreams.mp3')
                            // audio.play()
                            break;
                        case bands[1]:
                            changeImg("./assets/images/INXSAlbumCover.jpg")
                            // audio = new Audio('./assets/sounds/INXS-Tonight.mp3')
                            // audio.play()
                            break;
                        case bands[2]:
                            changeImg("./assets/images/EraAlbumCover.jpg")
                            // audio = new Audio('./assets/sounds/Era-Respect.mp3')
                            // audio.play()
                            break;
                        case bands[3]:
                            changeImg("./assets/images/WhamAlbumCover.jpg")
                            // audio = new Audio('./assets/sounds/Wham-Christmas.mp3')
                            // audio.play()
                            break;
                        case bands[4]:
                            changeImg("./assets/images/ahaAlbumCover.jpg")
                            // audio = new Audio('./assets/sounds/aha-Take.mp3')
                            // audio.play()
                            break;
                        case bands[5]:
                            changeImg("./assets/images/AlpAlbumCover.jpg")
                            // audio = new Audio('./assets/sounds/Alp-Young.mp3')
                            // audio.play()
                            break;
                        default:
                            break
                    }
                    newGame()
                }
            }
            if (guessCount === 0) {
                // what happens if player loses
                document.querySelector(`#endMessageDisplay`).innerHTML = `Oh No! You Ran Out Of Guesses! Care To Try Again?`
                newGame()
            }
        }
        

    }
    
}

newGame()