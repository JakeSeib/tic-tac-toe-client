'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onGameBoardReset = () => {
  console.log(api.gameBoardCreate())
}

const onGameSpaceClick = event => {
  const gameSpaceIndex = event.target.getAttribute('data-cell-index')
  const gameSpaceDiv = $(`[data-cell-index="${gameSpaceIndex}"]`, '.game-board-container')
  if (!store.players.includes(gameSpaceDiv.text())) {
    api.gameSpaceClick(gameSpaceIndex)
    ui.onGameSpaceClickSuccess(gameSpaceDiv)
  }
}

module.exports = {
  onGameSpaceClick,
  onGameBoardReset
}
