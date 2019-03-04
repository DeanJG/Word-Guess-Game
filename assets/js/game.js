const bands = [`eurythmics`, `inxs`, `erasure`, `wham`, `aha`, `alphaville`]

let currentBand = bands[Math.floor(Math.random() * bands.length)]

let ansArr = []
for (var i = 0; i < currentBand.length; i++) {
    ansArr[i] = "_";
}
let ltrRemain = currentBand.length

let ltrGuess = []

document.querySelector(`#wordSpace`).append(ansArr.join(` `))

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