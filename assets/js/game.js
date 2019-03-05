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


// onkey event function to house most all game code
// will potentially be parented by a while loop tracking ltrRemain && guessCount
document.onkeydown = event => {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        ltrGuess = event.key.toLowerCase()
        // functional loop to take correct letter input and fill in word
        // find out how to capitalize only first letter regardless of when it's guessed
        for (var j = 0; j < actualWord.length; j++) {
            if (actualWord[j] === ltrGuess) {
            ansArr[j] = ltrGuess;
            }
        }
        document.querySelector("#wordSpace").innerHTML = ansArr.join(` `)

    }
    
}

// pseudo-coded rest of assignment
// housed by above onkey event function
letter is guessed {
    checks if guess is NOT contained in Wrong&&actual {
    // for incorrect
        returns true,
        set ltrGuess = event.key
        pushes ltrGuess into Wrong array, 
        decrements guessCount,
        innerHTML to visually update the letters guessed and guessCount
    // for correct
    }else checks if NOT contained in ltrsGuessedRight&&Wrong {
        returns true,
        set variable ltrGuess = event.key
        loop through all indexes of actualWord {
            compare ltrGuess to all indexes,
            place correctly guessed letter in appropriate underscore,
            decrement ltrsRemain,
        }
        push ltrGuess into ltrsGuessedRight,
        decrement guessCount,
        show updated wordSpace with innerHTML,
        innerHTML update guessCount,
    }
}