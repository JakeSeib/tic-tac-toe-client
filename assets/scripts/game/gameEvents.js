'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onGameSpaceClick = event => {
  // change div's text to X or O
  const gameSpaceIndex = event.target.getAttribute('data-cell-index')
  const gameSpaceDiv = $(`[data-cell-index="${gameSpaceIndex}"]`, '.game-board-container')
  if (!['x', 'o'].includes(gameSpaceDiv.text())) {
    gameSpaceDiv.text(store.players[store.currentPlayerIndex])
    store.currentPlayerIndex = Math.abs(store.currentPlayerIndex - 1)
  }
}

module.exports = {
  onGameSpaceClick
}
