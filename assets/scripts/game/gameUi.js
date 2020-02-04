'use strict'

const store = require('../store')
const gameBoard = require('./gameBoard')
const styleVariables = require('../../styles/variables.scss')

const refillGameBoard = gameCells => {
  // given a game's cells from the api (array of length 9), set the game board
  // to represent the state of that game
  for (let i = 0; i < gameCells.length; i++) {
    const cell = gameCells[i]
    if (cell) {
      $(`[data-cell-index="${i}"]`, '.game-board-container')
        .text(cell.toUpperCase())
        .css('color', styleVariables.defaultfontcolor)
    } else {
      $(`[data-cell-index="${i}"]`, '.game-board-container')
        .text('_')
        .css('color', styleVariables.emptyspacecolor)
    }
  }
}

const onGameBoardCreateSuccess = response => {
  // add the result of previous game to history table before making a new one
  if (store.user.game) {
    const tableCell = $(`.history-${store.user.game.over}`, '.game-history-table')
    tableCell.text(parseInt(tableCell.text()) + 1)
    if (!store.user.game.over) {
      $('.resume-incomplete-container', '.nav-wrapper').show()
      store.incompleteGameIds.push(store.user.game.id)
    }
  }
  store.user.game = response.game
  store.currentPlayerIndex = 0
  $('.main-message', '.main-content').removeClass('victory-message')
  $('.main-message', '.main-content').text('')
  refillGameBoard(store.user.game.cells)
  $('.current-turn-container', '.main-content').text('Current turn: ' +
  store.players[store.currentPlayerIndex].toUpperCase())
}

const onGameBoardCreateFailure = () => {
  $('.main-message', '.main-content').text(`Failed to create new game!`)
}

const onGameSpaceClickFailure = () => {
  $('.main-message', '.main-content').text(`Only click empty spaces!`)
}

const onGameSpaceClickOver = () => {
  $('.current-turn-container', '.main-content').text(`You must start a new game to do that`)
}

const onGameOver = winner => {
  if (store.players.includes(winner)) {
    $('.main-message', '.main-content').addClass('victory-message')
    $('.main-message', '.main-content').text(winner.toUpperCase() + ' wins!')
  } else {
    $('.main-message', '.main-content').text('It\'s a draw!')
  }
}

const onGameSpaceClickSuccess = (gameSpaceDiv, currentPlayer, currentPlayerIndex, winner) => {
  gameSpaceDiv.text(currentPlayer.toUpperCase())
    .css('color', styleVariables.defaultfontcolor)
  if (winner) {
    onGameOver(winner)
  } else {
    const newPlayerIndex = Math.abs(currentPlayerIndex - 1)
    store.currentPlayerIndex = newPlayerIndex
    $('.main-message', '.main-content').text('')
    $('.current-turn-container', '.main-content').text('Current turn: ' +
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
    $('.resume-incomplete-container', '.nav-wrapper').show()
  }
}

const onGetAllGamesFailure = () => {
  $('.game-history', '.nav-wrapper').text(`Failed to get game history`)
}

const onResumeIncompleteSuccess = response => {
  onGameBoardCreateSuccess(response)
  $('.resume-incomplete-message').text('Game retrieved!')
  $('.incomplete-id-input').val('')
}

const onResumeIncompleteFailure = () => {
  $('.resume-incomplete-message').text('Failed to retrieve game')
  $('.incomplete-id-input').val('')
}

module.exports = {
  onGameBoardCreateSuccess,
  onGameBoardCreateFailure,
  onGameSpaceClickSuccess,
  onGameSpaceClickFailure,
  onGameSpaceClickOver,
  onGetAllGamesSuccess,
  onGetAllGamesFailure,
  onResumeIncompleteSuccess,
  onResumeIncompleteFailure
}
