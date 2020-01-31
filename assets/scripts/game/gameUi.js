'use strict'

const store = require('../store')

const onGameBoardCreateSuccess = response => {
  store.user.game = response.game
  $('.message').text('')
  $('.game-space').text('_')
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
    if (store.players.includes(winner)) {
      $('.message').text(winner.toUpperCase() + 'wins!')
    } else {
      $('.message').text('It\'s a draw!')
    }
  } else {
    $('.message').text('')
  }
}

module.exports = {
  onGameBoardCreateSuccess,
  onGameBoardCreateFailure,
  onGameSpaceClickSuccess,
  onGameSpaceClickFailure
}
