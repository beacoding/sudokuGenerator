var generateEmptyBoard = function() {
    var board = [];
    for (var i = 0; i < 9; i++) {
        board[i] = [];
        for (var j = 0; j < 9; j++) {
            board[i][j] = 0;
        }
    }
    return board;
}
var hasConflict = function(row, column, num, board) {
    var rowConflict = false;
    var columnConflict = false;
    var quadrantConflict = false;

    for (var i = 0; i < 9; i++) {
        if (board[row][i] === num) {
            rowConflict = true;
        }
    }
    for (var j = 0; j < 9; j++) {
        if (board[j][column] === num) {
            columnConflict = true;
        }
    }
    var ro;
    var col;
    if (row < 3 && column < 3) {
        ro = 0;
        col = 0;
    } else if (row < 3 && column < 6) {
        ro = 0;
        col = 3;
    } else if (row < 3 && column < 9) {
        ro = 0;
        col = 6;
    } else if (row < 6 && column < 3) {
        ro = 3;
        col = 0;
    } else if (row < 6 && column < 6) {
        ro = 3;
        col = 3;
    } else if (row < 6 && column < 9){
        ro = 3;
        col = 6;
    } else if (row < 9 && column < 3) {
        ro = 6;
        col = 0;
    } else if (row < 9 && column < 6) {
        ro = 6;
        col = 3;
    } else {
        ro = 6
        col = 6;
    }
    for (var k = ro; k < ro + 3; k++) {
        for (var l = col; l < col + 3; l++) {
            if (board[k][l] === num) {
                quadrantConflict = true;
            }
        }
    }

    return rowConflict || columnConflict || quadrantConflict;
}

var shuffle = function(arr) {
	var array = arr.slice();
	for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var generateBoard = function(arr, board, i, j) {
    var board = board || generateEmptyBoard();
    i = i || 0;
    j = j || 0;

    if (board[8][8] !== 0) {
        return board;
    }

    var copy = shuffle(arr);

    for (var k = 0; k < copy.length; k++) {
    	var num = copy[k];
        if (!hasConflict(i, j, num, board)) {
        	board[i][j] = num;
        	var m = i;
        	var n = j;

            if (j === 8) {
                m += 1;
                n = 0;
            } else {
            	n += 1;
            }
            if (generateBoard(copy, board, m, n)) {
            	//if solution is found, return board
            	return board;
            } else {
            	board[i][j] = 0;
            }
        }
    }
}
console.log(generateBoard([1,2,3,4,5,6,7,8,9]))