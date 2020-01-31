'use strict'

const gameApi = require('./gameApi')
const gameUi = require('./gameUi')
const store = require('../store')

const onGameBoardReset = () => {
  gameApi.gameBoardCreate()
}

const onGameSpaceClick = event => {
  const gameSpaceIndex = event.target.getAttribute('data-cell-index')
  const gameSpaceDiv = $(`[data-cell-index="${gameSpaceIndex}"]`, '.game-board-container')
  if (!store.players.includes(gameSpaceDiv.text())) {
    gameApi.gameSpaceClick(gameSpaceIndex)
    gameUi.onGameSpaceClickSuccess(gameSpaceDiv)
  }
}

module.exports = {
  onGameBoardReset,
  onGameSpaceClick
}
