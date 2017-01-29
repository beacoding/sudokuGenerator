import random
import helpers

def generateBoard(board=None, arr=[1,2,3,4,5,6,7,8,9], i=0, j=0):
	if board is None:
		board = helpers.generateEmptyBoard()

	if board[8][8] != 0:
		return board

	copy = arr[:]
	random.shuffle(copy)

	for k in range(len(copy)):
		num = copy[k]
		if not helpers.hasConflict(i, j, num, board):
			board[i][j] = num
			m = i
			n = j

			if (j == 8):
				m += 1
				n = 0
			else:
				n += 1

			#if has solution
			if generateBoard(board, copy, m, n):
				#return board
				return board
			#else revert board back to 0s
			else:
				board[i][j] = 0


print generateBoard()

def solveBoard(board, arr=[1,2,3,4,5,6,7,8,9], i=0, j=0):
    nextEmptySpace = helpers.findNextEmptySpace(board, i, j)
    
    if not nextEmptySpace:
            return board
    
    i = nextEmptySpace[0]
    j = nextEmptySpace[1]
    
    for k in range (len(arr)):
        num = array[k]
        if not helpers.hasConflict(i, j, num, board):
            board[i][j] = num

        if generateBoard(board, copy, i, j):
            return board
        else:
            board[i][j] = 0
