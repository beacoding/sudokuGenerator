import math

def hasConflict(row, column, num, board):
	for i in range(0,9):
		if board[row][i] == num:
			return True

	for j in range(0,9):
		if board[j][column] == num:
			return True

        ro = int(math.floor(row / 3) * 3)
        col = int(math.floor(column / 3) * 3)

	for k in range(ro,ro + 3):
		for l in range(col, col + 3):
			if board[k][l] == num:
				return True
				


	return False
		
def generateEmptyBoard():
	return [[0 for i in range(9)]for j in range(9)]

def findNextEmptySpace(board, i, j):
    while i < 9 and j < 9:
        if board[i][j] != 0:
            if j == 8:
                i = i + 1
                j = 0
            else:
                j = j + 1
        else:
            return [i, j]
    return False
