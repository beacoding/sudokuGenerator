var board = 
[ [ 2, 3, 4, 5, 6, 7, 8, 1, 9 ],
  [ 5, 8, 1, 3, 2, 9, 4, 7, 6 ],
  [ 6, 7, 9, 1, 4, 8, 3, 2, 5 ],
  [ 9, 1, 2, 7, 3, 4, 6, 5, 8 ],
  [ 7, 6, 3, 9, 8, 5, 1, 4, 2 ],
  [ 8, 4, 5, 6, 1, 2, 9, 3, 7 ],
  [ 3, 2, 8, 4, 5, 6, 7, 9, 1 ],
  [ 4, 5, 7, 8, 9, 1, 2, 6, 3 ],
  [ 1, 9, 6, 2, 7, 3, 5, 8, 4 ] ]

  var solveBoard = function(board, arr, i, j) {
    var nextEmpty = findNextEmptySpace(board, i, j)

      if (!nextEmpty) {
	return board;
      }

    i = nextEmpty[0];
    j = nextEmpty[1];


    var m = j === 8 ? i + 1 : i;
    var n = j === 8 ? 0 : j + 1;

    for (var k = 0; k < arr.length; k++) {
      var num = arr[k];

      if (!hasConflict(i, j, num, board)) {
	board[i][j] = num;

	if (solveBoard(board, arr, m, n)) {
	  return board;
	} else {
	  board[i][j] = 0;
	}
      }
    }
  }

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


console.log(solveBoard(board, [1,2,3,4,5,6,7,8,9], 0,0));
