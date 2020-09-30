# lab03-ro-sham-bo

Rock Paper Scissors
===

Build a R-P-S Game, user vs computer. Track win/lose/draw record. 

---

## Learning Objectives
- Use styled radio buttons to get user input in mutually-exclusive situations
- Maintain global state of total wins and losses.
- Show global state in the DOM.
- Write, test and use a function to generate a rock, paper, scissors throw for the computer player.
- Write, test and use a function (`doesUserWin`) to figure out if a user's throw beats the computer's throw.

---

## Standard Setup Process

1. Create a repo called `lab-03-rock-paper-scissors` on Github
    - make sure to click add a `README.md`
1. Copy the URL of the new repo
1. From the command line (terminal) clone your repo:
    1. `git clone <url>`
    1. **`cd` into your repo from the command line**
    1. `npx create-alchemy-bootstrap .`
    1. Launch vscode with `code .`

## Steps

### Make a New Repo

Make the repo on github first, then clone it locally and work from there. Call it `lab-03-rock-paper-scissors`.

### Design the App

Using HTML and CSS, design the look and feel of the rock, paper, scissors game. At a minimum you will need:

1. Page layout (title, header, footer?, etc.)
1. Explain the rules (paper beats rock, rock beats scissors, scissors beats papers), an HTML List might be a good semantic choice.
1. Radio buttons _with same name for grouping_ for choosing rock, paper, or scissors (images anyone?)
1. Button for "Play" 
1. Display of wins and losses and draws
1. Display of result of each game (can be text and/or images), should indicate what the computer threw and what the result was (win, loss, draw)

### Computer Throw

Create a `getRandomThrow` function in a module which should be called `get-random-throw.js`

This function needs to generate a random numbers and triage that into returning `rock`, `paper`, or `scissors` accordingly.

### TDD `didUserWin` Function

Given a user choice, and a random throw for the computer, we will need to know the game result (from the user's perspective): "win", "lose", or "draw"

TDD a `didUserWin` function that:

1. Has two parameters: `player` and `computer`
1. Returns one of the following values:
    - `draw` - the throws are identical
    - `win` - the player's throw beats the computer throw
    - `lose` - the computer's throw beats the player's throw

Write one test at a time, each test can address one of the nine possible outcomes.

You can assume _valid input_, meaning the passed input will always be a valid throw of `rock`, `paper`, or `scissors`.

#### Sections

1. Imports:
    - Your `getRandomThrow` and `doesUserWin` functions
1. Reference needed DOM elements:
    - The radio buttons with the user's throw choice
        - You can alternatively use `document.querySelector('input:checked')` in your event handler to get 
        the actively checked radio button each time the play button is clicked
    - The button the user will click for playing
    - The element(s) needed to display:
        - throw result (win, lose, or draw)
        - current wins, losses, and draws counts
1. Setup Application State (what will change over time)
   - wins
   - losses
   - draws
1. Add event listener(s):
   - Subscribe to the button's click event using `addEventListener`

### App

Take some time to plan out your logic flow of what should happen once the user makes a choice and clicks the button to play a game.

What are the steps of the process that will need to occur?

Use techniques like drawing a flow diagram, and/or pseudo-coding

## Points Break Down

Looking For | Points (10)
:--|--:
[x] Hosted on GitHub with URL in About section, Correct and Semantic HTML and CSS | 2 
[ ] TDD Get Computer Throw function (just check that the correct data type is returned using `typeof`! OR use the `.includes` test from the demo) | 1
[ ] TDD `doesUserWin` Function | 2
[x] Overall Correct Game Logic and Flow | 2
[x] Project and code files are: indented / spaced correctly / clean | 2
[x] Clear commit history present | 1
[x] STRETCH: add reset button | + 1
[ ] STRETCH: keep track of and display how many times the reset button was hit | +1