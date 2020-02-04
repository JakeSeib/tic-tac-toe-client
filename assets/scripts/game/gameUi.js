'use strict'

const store = require('../store')
const gameBoard = require('./gameBoard')
const styleVariables = require('../../styles/variables.scss')

const onGameBoardCreateSuccess = response => {
  // add the result of previous game to history table before making a new one
  if (store.user.game) {
    const tableCell = $(`.history-${store.user.game.over}`, '.game-history-table')
    tableCell.text(parseInt(tableCell.text()) + 1)
  }
  store.user.game = response.game
  store.currentPlayerIndex = 0
  $('.main-message').text('')
  $('.game-space')
    .text('_')
    .css('color', styleVariables.emptyspacecolor)
  $('.current-turn-container').text('Current turn: ' +
  store.players[store.currentPlayerIndex].toUpperCase())
}

const onGameBoardCreateFailure = () => {
  $('.main-message').text(`Failed to create new game!`)
}

const onGameSpaceClickFailure = () => {
  $('.main-message').text(`Only click empty spaces!`)
}

const onGameSpaceClickSuccess = (gameSpaceDiv, currentPlayer, currentPlayerIndex, winner) => {
  gameSpaceDiv.text(currentPlayer.toUpperCase())
    .css('color', styleVariables.defaultfontcolor)
  if (winner) {
    $('.game-space').off('click')
    if (store.players.includes(winner)) {
      $('.main-message').text(winner.toUpperCase() + ' wins!')
    } else {
      $('.main-message').text('It\'s a draw!')
    }
  } else {
    const newPlayerIndex = Math.abs(currentPlayerIndex - 1)
    store.currentPlayerIndex = newPlayerIndex
    $('.main-message').text('')
    $('.current-turn-container').text('Current turn: ' +
    store.players[newPlayerIndex].toUpperCase())
  }
}

const onGetAllGamesSuccess = response => {
  const allGameResults = gameBoard.countGameResults(response.games)
  Object.keys(allGameResults).forEach(key => {
    $(`.history-${key}`, '.game-history-table').text(allGameResults[key])
  })
  if (allGameResults['false'] > 0) {
    // todo: prompt to continue an incomplete game. If only getting and
    // processing index from the server once, whatever is put in here will need
    // to be repeated elsewhere, i.e. whenever creating a new game
  }
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
