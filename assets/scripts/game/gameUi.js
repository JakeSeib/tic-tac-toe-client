'use strict'

const store = require('../store')

const onGameBoardCreateSuccess = response => {
  store.user.game = response.game
}

const onGameSpaceClickSuccess = gameSpaceDiv => {
  gameSpaceDiv.text(store.players[store.currentPlayerIndex])
  store.currentPlayerIndex = Math.abs(store.currentPlayerIndex - 1)
}

module.exports = {
  onGameBoardCreateSuccess,
  onGameSpaceClickSuccess
}
