'use strict'

const store = require('../store')

const onGameSpaceClickSuccess = gameSpaceDiv => {
  gameSpaceDiv.text(store.players[store.currentPlayerIndex])
  store.currentPlayerIndex = Math.abs(store.currentPlayerIndex - 1)
}

module.exports = {
  onGameSpaceClickSuccess
}
