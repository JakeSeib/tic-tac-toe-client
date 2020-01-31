'use strict'

const gameApi = require('./gameApi')
const gameUi = require('./gameUi')
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
    gameApi.gameSpaceClick(gameSpaceIndex)
      .then(response => gameUi.onGameSpaceClickSuccess(gameSpaceDiv, response))
      .catch(gameUi.onGameSpaceClickFailure)
  }
}

module.exports = {
  onGameBoardCreate,
  onGameSpaceClick
}
