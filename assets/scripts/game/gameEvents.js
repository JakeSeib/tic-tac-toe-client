'use strict'

const gameApi = require('./gameApi')
const gameUi = require('./gameUi')
const gameBoard = require('./gameBoard')
const store = require('../store')

const onGameBoardCreate = () => {
  $('.game-space').on('click', onGameSpaceClick)
  gameApi.gameBoardCreate()
    .then(gameUi.onGameBoardCreateSuccess)
    .catch(gameUi.onGameBoardCreateFailure)
}

const onGameSpaceClick = event => {
  const gameSpaceIndex = event.target.getAttribute('data-cell-index')
  const gameSpaceDiv = $(`[data-cell-index="${gameSpaceIndex}"]`, '.game-board-container')
  if (!store.players.includes(gameSpaceDiv.text().toLowerCase())) {
    // to avoid confusion about what is currently stored in
    // store.currentPlayerIndex, use variables currentPlayerIndex and
    // currentPlayer
    const currentPlayerIndex = store.currentPlayerIndex
    const currentPlayer = store.players[currentPlayerIndex]
    store.user.game.cells[gameSpaceIndex] = currentPlayer
    const winner = gameBoard.isGameOver(store.user.game.cells)
    store.user.game.over = winner
    gameApi.gameSpaceClick(gameSpaceIndex, currentPlayer, winner)
      // store.user.game has already been updated to check for winner, so
      // response is not actually needed for anything
      .then(response => gameUi.onGameSpaceClickSuccess(gameSpaceDiv, currentPlayer, currentPlayerIndex, winner))
      .catch(gameUi.onGameSpaceClickFailure)
  } else {
    gameUi.onGameSpaceClickFailure()
  }
}

module.exports = {
  onGameBoardCreate,
  onGameSpaceClick
}
