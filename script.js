// -----------------------------------------------------
// шахматная доска на JS
// -----------------------------------------------------
const mainWrapper = document.querySelector('.chess-board-main-wrapper');
const chessBoard = document.querySelector('.chess-board');

// chessMan - это объект с расстановкой фигур на доске 
// (0, 1, 6, 7 - это линии на которых стоя фигуры)
// массив - это коды фигур в юникоде
const chessMan = {
    // черные фигуры
    0: ['&#9820', '&#9818', '&#9821', '&#9818', '&#9819', '&#9821', '&#9818', '&#9820'],
    1: ['&#9823', '&#9823', '&#9823', '&#9823', '&#9823', '&#9823', '&#9823', '&#9823'],
    // белые фигуры
    6: ['&#9817', '&#9817', '&#9817', '&#9817', '&#9817', '&#9817', '&#9817', '&#9817'],
    7: ['&#9814', '&#9816', '&#9815', '&#9812', '&#9813', '&#9815', '&#9816', '&#9814'],
};

// -----------------------------------------------------
// функция создания шахматной доски с расстановкой фигур
// -----------------------------------------------------
const createChessBoard = () => {
    let raw, cell;

    for (let i = 0; i < 8; i++) {
        raw = document.createElement('div');
        raw.className = 'wrapper';

        for (let j = 0; j < 8; j++) {
            cell = document.createElement('div');

            // окраска клеток
            if (i % 2 == 0) {
                if (j % 2 == 0) {
                    cell.className = 'cell white';
                } else {
                    cell.className = 'cell black';
                }
            } else {
                if (j % 2 == 0) {
                    cell.className = 'cell black';
                } else {
                    cell.className = 'cell white';
                }
            }

            // расстановка шахматных фигур
            if (chessMan[i] != undefined && chessMan[i][j] != undefined) {
                cell.innerHTML = `<span> ${chessMan[i][j]} </span>`;
            }

            raw.appendChild(cell);
        }

        chessBoard.appendChild(raw);
    }

    chessBoard.before(createNumbersCell());
    chessBoard.after(createNumbersCell());

    mainWrapper.prepend(createAbcCell());
    mainWrapper.append(createAbcCell());
};

// -----------------------------------------------------
// функция создания буквенных ячеек
// -----------------------------------------------------
const createAbcCell = () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'abc-wrapper';
    const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    for (let i = 0; i < abc.length; i++) {
        const cell = document.createElement('div');
        cell.className = 'abc-cell';
        cell.innerHTML = abc[i];
        wrapper.appendChild(cell);
    }

    return wrapper;
};

// -----------------------------------------------------
// функция создания ячеек с номерами
// -----------------------------------------------------
const createNumbersCell = () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'number-wrapper';

    for (let i = 8; i >= 1; i--) {
        const cell = document.createElement('div');
        cell.className = 'number-cell';
        cell.innerHTML = i;
        wrapper.appendChild(cell);
    }

    return wrapper;
};

createChessBoard();