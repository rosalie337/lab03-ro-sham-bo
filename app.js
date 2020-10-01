// // import functions and grab DOM elements

const shootButton = document.getElementById('shoot-button');
const resetButton = document.getElementById('reset-button');
const winDiv = document.getElementById('win-div');
const lossDiv = document.getElementById('loss-div');
const drawDiv = document.getElementById('draw-div')
const totalDiv = document.getElementById('totalDiv');

let wins = 0;
let losses= 0;
let draws = 0;
let total = 0;

shootButton.addEventListener('click', () => {

    const selectedChoice = document.querySelector('input[radio]:checked');

    let userShoot = selectedChoice.value;
    let cpuShoot = 'scissors';

    // if (Math.random() < .3) {
    //     cpuShoot = 'paper'
    //     cpuShoot = 'rock'
    // }
})
// Span
//     -Wins
//         -textcontent
//     -Losses
//         -textcontent
//     -Draws
//         -textcontent
//     - ThrowResults
//         -textcontent

// Reset 
//     - EventListener
//     - Wins
//     - Draws


// Style

// - Rock image
// - Paper image
// - Scissors image

// initialize state

// set event listeners to update state and DOM