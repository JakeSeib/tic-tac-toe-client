'use strict'

const gameApi = require('./gameApi')
const gameUi = require('./gameUi')
const gameBoard = require('./gameBoard')
const store = require('../store')

const onGameBoardCreate = () => {
  gameApi.gameBoardCreate()
    .then(gameUi.onGameBoardCreateSuccess)
    .catch(gameUi.onGameBoardCreateFailure)
}

const onGameSpaceClick = event => {
  const gameSpaceIndex = event.target.getAttribute('data-cell-index')
  const gameSpaceDiv = $(`[data-cell-index="${gameSpaceIndex}"]`, '.game-board-container')
  if (!store.players.includes(gameSpaceDiv.text())) {
    store.user.game.cells[gameSpaceIndex] = store.players[store.currentPlayerIndex]
    const winner = gameBoard.isGameOver(store.user.game.cells)
    gameApi.gameSpaceClick(gameSpaceIndex, winner)
      .then(response => gameUi.onGameSpaceClickSuccess(gameSpaceDiv, winner, response))
      .catch(gameUi.onGameSpaceClickFailure)
  } else {
    gameUi.onGameSpaceClickFailure()
  }
}

module.exports = {
  onGameBoardCreate,
  onGameSpaceClick
}
