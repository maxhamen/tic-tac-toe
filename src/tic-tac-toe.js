class TicTacToe {
    constructor() {
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.x = 1;
        this.o = 4;
        this.value = 1;
    }

    getCurrentPlayerSymbol() {
        if (this.value == 1) {
            return 'x';
        }
        return 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] == null) {
            this.matrix[rowIndex][columnIndex] = this.value;
            if (this.value == 1) {
                this.value = 4;
            } else {
                this.value = 1;
            }
        }
    }

    isFinished() {
        if ((this.getWinner() !== null) || (this.isDraw() == true)) {
            return true;
        }
        return false;
    }

    getWinner() {
        if ((this.matrix[0][0] + this.matrix[0][1] + this.matrix[0][2] == 3) || (this.matrix[0][2] + this.matrix[1][2] + this.matrix[2][2] == 3) || (this.matrix[2][0] + this.matrix[2][1] + this.matrix[2][2] == 3) || (this.matrix[0][0] + this.matrix[1][0] + this.matrix[2][0] == 3) || (this.matrix[0][0] + this.matrix[1][1] + this.matrix[2][2] == 3) || (this.matrix[0][2] + this.matrix[1][1] + this.matrix[2][0] == 3) || (this.matrix[1][0] + this.matrix[1][1] + this.matrix[1][2] == 3) || (this.matrix[0][1] + this.matrix[1][1] + this.matrix[2][1] == 3)) {
            return 'x';
        }
        if ((this.matrix[0][0] + this.matrix[0][1] + this.matrix[0][2] == 12) || (this.matrix[0][2] + this.matrix[1][2] + this.matrix[2][2] == 12) || (this.matrix[2][0] + this.matrix[2][1] + this.matrix[2][2] == 12) || (this.matrix[0][0] + this.matrix[1][0] + this.matrix[2][0] == 12) || (this.matrix[0][0] + this.matrix[1][1] + this.matrix[2][2] == 12) || (this.matrix[0][2] + this.matrix[1][1] + this.matrix[2][0] == 12) || (this.matrix[1][0] + this.matrix[1][1] + this.matrix[1][2] == 12) || (this.matrix[0][1] + this.matrix[1][1] + this.matrix[2][1] == 12)) {
            return 'o';
        }

        return null;
    }
    noMoreTurns() {
        for (let i = 0; i < this.matrix.length; i++) {
            let matrixLocal = this.matrix[i];
            for (let j = 0; j < matrixLocal.length; j++) {
                if (matrixLocal[j] === null) {
                    return false;
                }
            }

        }
        return true;
    }

    isDraw() {
        if ((this.getWinner() == null) && (this.noMoreTurns() == true)) {
            return true;
        }
        return false;
    }



    getFieldValue(rowIndex, colIndex) {

        if (this.matrix[rowIndex][colIndex] == null) {
            return null;
        }
        if (this.matrix[rowIndex][colIndex] == 4) {
            return 'o';
        }
        if (this.matrix[rowIndex][colIndex] == 1) {
            return 'x';
        }
    }
}
module.exports = TicTacToe;