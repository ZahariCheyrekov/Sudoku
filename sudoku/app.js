const puzzle = [
    [0, 8, 0, 1, 0, 0, 0, 0, 7],
    [0, 0, 0, 0, 7, 0, 9, 6, 0],
    [0, 2, 6, 9, 0, 0, 1, 3, 0],
    [0, 0, 0, 2, 9, 0, 3, 0, 4],
    [9, 6, 0, 0, 0, 0, 0, 8, 2],
    [5, 0, 2, 0, 4, 7, 0, 0, 0],
    [0, 1, 3, 0, 0, 9, 8, 4, 0],
    [0, 9, 7, 0, 2, 0, 0, 0, 0],
    [6, 0, 0, 0, 0, 3, 0, 7, 0],
];

const solvedPuzzle = [
    [3, 8, 9, 1, 6, 5, 4, 2, 7],
    [1, 4, 5, 3, 7, 2, 9, 6, 8],
    [7, 2, 6, 9, 8, 4, 1, 3, 5],
    [8, 7, 1, 2, 9, 6, 3, 5, 4],
    [9, 6, 4, 5, 3, 1, 7, 8, 2],
    [5, 3, 2, 8, 4, 7, 6, 9, 1],
    [2, 1, 3, 7, 5, 9, 8, 4, 6],
    [4, 9, 7, 6, 2, 8, 5, 1, 3],
    [6, 5, 8, 4, 1, 3, 2, 7, 9],
];

let buttonSelected;
let squareSelected;
let solved;
let isPaused = false;
let minutes = 0;
let seconds = 0;
let timerDiv;

window.addEventListener('DOMContentLoaded', run);

function run() {
    displayBoard();
    displayPuzzle();
    displayNumpad();
    attachListeners();
    startTimer();
    timerDiv = document.getElementById('sudoku-timer');
}
