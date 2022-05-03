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

let buttonSelected = null;
let squareSelected = null;

window.onload = function () {
    run();
};

function run() {
    displayBoard();
    displayPuzzle();
    displayNumpad();
    attachListeners();
}

function displayBoard() {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {

            let square = document.createElement('div');
            square.id = row.toString() + '-' + col.toString();
            square.classList.add('squares');

            if (row == 2 || row == 5) {
                square.classList.add('border-bottom');
            }

            if (col == 2 || col == 5) {
                square.classList.add('border-right');
            }

            square.addEventListener('click', selectSquare);
            square.addEventListener('click', enterNumber);
            document.getElementById('board').appendChild(square);
        }
    }
}

function displayPuzzle() {
    const cells = getCells();

    cells.forEach((cell) => {
        const cellId = cell.id;
        const coords = getCoordinates(cell);

        if (puzzle[coords.row][coords.col] != 0) {
            document.getElementById(cellId).textContent = puzzle[coords.row][coords.col];
            cell.classList.add('displayPuzzleSquares');
        } else {
            document.getElementById(cellId).textContent = '';
        }
    });
}

function displayNumpad() {
    for (let num = 1; num <= 10; num++) {
        const button = document.createElement('button');

        if (num == 10) {
            button.textContent = 'X';
            button.id = 'deleteBtn';
        } else {
            button.textContent = num;
            button.id = `${num}-button`;
        }

        button.classList.add('numpadButtons');
        button.addEventListener('click', selectNumber);
        document.getElementById('numpad').appendChild(button);
    }
}

function selectNumber() {
    if (buttonSelected != null) {
        buttonSelected.classList.remove('numSelected');
    }
    buttonSelected = this;
    buttonSelected.classList.add('numSelected');
}


function selectSquare() {
    if (squareSelected != this) {
        if (squareSelected != null) {
            squareSelected.classList.remove('cell-color');
        }
        squareSelected = this;
    }
    squareSelected.classList.add('cell-color');
}
