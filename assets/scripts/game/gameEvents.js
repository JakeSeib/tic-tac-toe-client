'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onGameSpaceClick = event => {
  const gameSpaceIndex = event.target.getAttribute('data-cell-index')
  const gameSpaceDiv = $(`[data-cell-index="${gameSpaceIndex}"]`, '.game-board-container')
  if (!['x', 'o'].includes(gameSpaceDiv.text())) {
    ui.onGameSpaceClickSuccess(gameSpaceDiv)
  }
}

module.exports = {
  onGameSpaceClick
}
