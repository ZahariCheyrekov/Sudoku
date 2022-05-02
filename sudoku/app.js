const puzzle = [
    [0, 8, 0, 1, 0, 0, 0, 0, 7],
    [0, 0, 0, 0, 7, 0, 9, 6, 0],
    [0, 2, 6, 9, 0, 0, 1, 3, 0],
    [0, 0, 0, 2, 9, 0, 3, 0, 4],
    [9, 6, 0, 0, 0, 0, 0, 8, 2],
    [5, 0, 2, 0, 4, 7, 0, 0, 0],
    [0, 1, 3, 0, 0, 9, 8, 4, 0],
    [0, 9, 7, 0, 2, 0, 0, 0, 0],
    [6, 0, 0, 0, 0, 3, 0, 7, 0]
];

let buttonSelected = null;

window.onload = function () {
    start();
};

function start() {
    displayBoard();
    displayPuzzle();
    displayNumpad();
}
