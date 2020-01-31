'use strict'

const store = require('../store')

const onGameBoardCreateSuccess = response => {
  store.user.game = response.game
}

const onGameBoardCreateFailure = response => {
  $('.message').text(`Failed to create new game!`)
}

const onGameSpaceClickSuccess = (gameSpaceDiv, response) => {
  gameSpaceDiv.text(store.players[store.currentPlayerIndex])
  store.currentPlayerIndex = Math.abs(store.currentPlayerIndex - 1)
}

const onGameSpaceClickFailure = response => {
  $('.message').text(`Failed to update game!`)
}

module.exports = {
  onGameBoardCreateSuccess,
  onGameBoardCreateFailure,
  onGameSpaceClickSuccess,
  onGameSpaceClickFailure
}
