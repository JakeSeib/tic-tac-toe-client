'use strict'

const store = require('../store')

const onGameBoardCreateSuccess = response => {
  store.user.game = response.game
  $('.main-message').text('')
  $('.game-space').text('_')
  $('.current-turn-container').text('Current turn: ' +
  store.players[store.currentPlayerIndex].toUpperCase())
}

const onGameBoardCreateFailure = () => {
  $('.main-message').text(`Failed to create new game!`)
}

const onGameSpaceClickFailure = () => {
  $('.main-message').text(`Only click empty spaces!`)
}

const onGameSpaceClickSuccess = (gameSpaceDiv, winner, response) => {
  gameSpaceDiv.text(store.players[store.currentPlayerIndex])
  store.currentPlayerIndex = Math.abs(store.currentPlayerIndex - 1)
  if (winner) {
    $('.game-space').off('click')
    if (store.players.includes(winner)) {
      $('.main-message').text(winner.toUpperCase() + ' wins!')
    } else {
      $('.main-message').text('It\'s a draw!')
    }
  } else {
    $('.main-message').text('')
    $('.current-turn-container').text('Current turn: ' +
    store.players[store.currentPlayerIndex].toUpperCase())
  }
}

const onGetAllGamesSuccess = response => {
  const totalGames = response.games.length
  $('.game-history').text(`Total games played: ${totalGames}`)
}

const onGetAllGamesFailure = () => {
  $('.game-history').text(`Failed to get game history`)
}

module.exports = {
  onGameBoardCreateSuccess,
  onGameBoardCreateFailure,
  onGameSpaceClickSuccess,
  onGameSpaceClickFailure,
  onGetAllGamesSuccess,
  onGetAllGamesFailure
}
