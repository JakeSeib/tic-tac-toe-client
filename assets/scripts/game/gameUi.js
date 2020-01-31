'use strict'

const store = require('../store')

const onGameBoardCreateSuccess = response => {
  store.user.game = response.game
}

const onGameBoardCreateFailure = response => {
  $('.message').text(`Failed to create new game!`)
}

const onGameSpaceClickFailure = response => {
  $('.message').text(`Only click empty spaces!`)
}

const onGameSpaceClickSuccess = (gameSpaceDiv, winner, response) => {
  gameSpaceDiv.text(store.players[store.currentPlayerIndex])
  store.currentPlayerIndex = Math.abs(store.currentPlayerIndex - 1)
  if (winner) {
    $('.game-space').off('click')
  }
}

module.exports = {
  onGameBoardCreateSuccess,
  onGameBoardCreateFailure,
  onGameSpaceClickSuccess,
  onGameSpaceClickFailure
}
