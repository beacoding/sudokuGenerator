var hasConflict = function(row, column, num, board) {
  //row conflict
  for (var i = 0; i < 9; i++) {
    if (board[row][i] === num) {
      return true;
    }
  }

  //col conflict
  for (var j = 0; j < 9; j++) {
    if (board[j][column] === num) {
      return true;
    }
  }

  //box conflict
  var ro = Math.floor(row / 3) * 3;
  var col = Math.floor(column / 3) * 3;

  for (var k = ro; k < ro + 3; k++) {
    for (var l = col; l < col + 3; l++) {
      if (board[k][l] === num) {
	return true;
      }
    }
  }
}


var findNextEmptySpace = function(board, i, j) {
  while (i < 9 && j < 9) {
    if (board[i][j] !== 0) {
      i = j === 8 ? i + 1 : i;
      j = j === 8 ? 0 : j + 1;
    } else {
      return [i, j];
    }
  }
  return false;
}

var solveBoard = function(board, arr, i, j) {
  var nextEmpty = findNextEmptySpace(board, i, j)

    if (!nextEmpty) {
      return board;
    }

  i = nextEmpty[0];
  j = nextEmpty[1];

  for (var k = 0; k < arr.length; k++) {
    var current = arr[k];

    if (!hasConflict(i, j, current, board)) {
      board[i][j] = current;

      if (solveBoard(board, arr, i, j)) {
	return board;
      } else {
	board[i][j] = 0;
      }
    }
  }
}

var board = [
  [0,0,0,0,0,0,0,1,0],
  [5,0,0,0,2,9,0,7,0],
  [0,0,0,1,0,0,3,0,0],
  [9,0,0,7,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,2,0,0,7],
  [0,0,8,0,0,6,0,0,0],
  [0,5,0,8,9,0,0,0,3],
  [0,9,0,0,0,0,0,0,0],
]

console.log(solveBoard(board, [1,2,3,4,5,6,7,8,9], 0,0));
