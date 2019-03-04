// list of words for the game
const bands = [`eurythmics`, `inxs`, `erasure`, `wham`, `aha`, `alphaville`]
// randomly choosing a band name
let currentBand = bands[Math.floor(Math.random() * bands.length)]
// creates underscores based on length of secret word
let ansArr = []
for (var i = 0; i < currentBand.length; i++) {
    ansArr[i] = `_`;
}
// informational variables/arrays at game start
let winCount = 0
let guessCount = currentBand.length + 4
let ltrsGuessedWrong = []
// this along with guessCount will serve as game progress tracking
let ltrsRemain = currentBand.length
// empty variable to serve as user's guess
let ltrGuess = null
// Right and Wrong will serve as unavailable letter bank
let ltrsGuessedRight = []
// array of the correct letters for the secret word
let actualWord = currentBand.split(``)


// display at game start and upon refresh
document.querySelector(`#wordSpace`).append(ansArr.join(` `))
document.querySelector(`#guessCounter`).append(guessCount)
document.querySelector(`#ltrGuessDisplay`).append(ltrsGuessedWrong.join(`, `))
document.querySelector(`#winCount`).append(winCount)

// // first checks if key pressed is a letter
// // will parent most all game code
// document.onkeydown = event => {
//     if (event.keyCode >= 65 && event.keyCode <= 90) {
//             if (event.keyCode === 65) {
//             }else if (event.keyCode === 81) {
//             }
//     }else {
//         alert(`only letters are valid guesses`)
//     }
// }

letter is guessed {
    checks if guess is NOT contained in Wrong/Right/actual {
    // for incorrect
        returns true, 
        pushes into wrong array, 
        decrements guessCount
        innerHTML to visually update the letters guessed and guessCount
    // for correct
    }else checks if NOT contained in Right {
        
    }
    // for repeat attempts
        same check if NOT in W/R/A
        returns false, then checks if contained in wrong array
        returns true, 
}