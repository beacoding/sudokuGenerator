def hasConflict(row, column, num, board):
	columnConflict = False
	rowConflict = False
	quadrantConflict = False

	for i in range(0,9):
		if board[row][i] == num:
			rowConflict = True

	for j in range(0,9):
		if board[j][column] == num:
			columnConflict = True

	if row < 3 and column < 3:
		ro = 0
		col = 0
	elif row < 3 and column < 6:
		ro = 0
		col = 3
	elif row < 3 and column < 9:
		ro = 0
		col = 6
	elif row < 6 and column < 3:
		ro = 3
		col = 0
	elif row < 6 and column < 6:
		ro = 3
		col = 3
	elif row < 6 and column < 9:
		ro = 3
		col = 6
	elif row < 9 and column < 3:
		ro = 6
		col = 0
	elif row < 9 and column < 6:
		ro = 6
		col = 3
	else:
		ro = 6
		col = 6

	for k in range(ro,ro + 3):
		for l in range(col, col + 3):
			if board[k][l] == num:
				quadrantConflict = True
				


	if columnConflict or rowConflict or quadrantConflict:
		return True
	else:
		return False
		
def generateEmptyBoard():
	return [[0 for i in range(9)]for j in range(9)]