// // import functions and grab DOM elements

const shootButton = document.getElementById('shoot-button');
const resetButton = document.getElementById('reset-button');
const winDiv = document.getElementById('win-div');
const lossDiv = document.getElementById('loss-div');
const drawDiv = document.getElementById('draw-div')
const totalDiv = document.getElementById('totalDiv');

// set state
let wins = 0;
let losses = 0;
let draws = 0;
let total = 0;

shootButton.addEventListener('click', () => {
    
    const selectedChoice = document.querySelector('input[radio]:checked');
    const results = compareNumbers(userShoot, cpuShoot);
    let userShoot = selectedChoice.value;
    let cpuShoot = getRandomThrow();
    
    useResults(results);
});

// initialize state
function useResults(results) {
    if (results === 'Win') {
        total++;
        wins++;
        winsText.textContent = wins;
    }
    else if(results === 'Lose') {
        total++;
        losses++;
        lossesText.textContent = loss;
    }
    else if(results === 'Draw') {
        total++;
        draw++;
        drawsText.textContent = draw;
    }
    resultsDisplay.textContent = results;
}

// Reset 
// set event listeners to update state and DOM
resetButton.addEventListener('click', () => {

    wins = 0;
    losses = 0;
    draws = 0;
    total = 0;

    winsText.textContent = '0';
    lossesText.textContent = '0';
    drawsText.textContent = '0';
    totalText.textContent = '0';

    resultsDisplay.textContent = '';
});