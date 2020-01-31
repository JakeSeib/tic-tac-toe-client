'use strict'

const store = require('../store')

const convertToRows = gameBoard => {
  // Given a game board represented as an array of length 9 with elements 'x',
  // 'o', or '' (empty square), return an array of 3 arrays, with each nested
  // array representing a horizontal row on the game board
  const row1 = [gameBoard[0], gameBoard[1], gameBoard[2]]
  const row2 = [gameBoard[3], gameBoard[4], gameBoard[5]]
  const row3 = [gameBoard[6], gameBoard[7], gameBoard[8]]
  return [row1, row2, row3]
}

const isGameOver = gameBoard => {
  const gameBoardRows = convertToRows(gameBoard)
  // Given a game board represented as an array of 3 arrays, with each nested
  // array representing a horizontal row on the game board, return 'x' if 'x' is
  // the winner, 'o' if 'o' is the winner, 'draw' if the game is over but has no
  // winner, and false if the game is not over

  // Check for horizontal win
  for (let i = 0; i < gameBoardRows.length; i++) {
    const row = gameBoardRows[i]
    if (row.every(element => element === row[0]) &&
    store.players.includes(row[0])) {
      return row[0]
    }
  }

  // check for vertical win
  for (let i = 0; i < 3; i++) {
    const col = [gameBoardRows[0][i], gameBoardRows[1][i], gameBoardRows[2][i]]
    if (col.every(element => element === col[0]) &&
      store.players.includes(col[0])) {
      return col[0]
    }
  }

  // check for diagonal win (indices 0, 4, and 8 or 2, 4, and 6)
  const diag1 = [gameBoard[0], gameBoard[4], gameBoard[8]]
  const diag2 = [gameBoard[2], gameBoard[4], gameBoard[6]]
  if (diag1.every(element => element === diag1[0]) &&
  store.players.includes(diag1[0])) {
    return diag1[0]
  } else if (diag2.every(element => element === diag2[0]) &&
  store.players.includes(diag2[0])) {
    return diag2[0]
  }

  // check if the game board has any free spaces left
  if (gameBoard.some(element => element === '')) {
    return false
  } else {
    return 'draw'
  }
}

module.exports = {
  isGameOver
}
