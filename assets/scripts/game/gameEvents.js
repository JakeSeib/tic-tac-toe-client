'use strict'

const gameApi = require('./gameApi')
const gameUi = require('./gameUi')
const gameBoard = require('./gameBoard')
const store = require('../store')

const onGameBoardCreate = () => {
  $('.game-space').off('click')
  $('.game-space').on('click', onGameSpaceClick)
  gameApi.gameBoardCreate()
    .then(gameUi.onGameBoardCreateSuccess)
    .catch(gameUi.onGameBoardCreateFailure)
}

const blockGameBoardClicks = () => {
  $('.game-space', '.game-board-container').off('click')
  $('.game-space', '.game-board-container').on('click', gameUi.onGameSpaceClickOver)
}

const onGameSpaceClick = event => {
  const gameSpaceIndex = event.target.getAttribute('data-cell-index')
  const gameSpaceDiv = $(`[data-cell-index="${gameSpaceIndex}"]`, '.game-board-container')
  if (!store.players.includes(gameSpaceDiv.text().toLowerCase())) {
    // to avoid confusion about what is currently stored in
    // store.currentPlayerIndex, use variables currentPlayerIndex and
    // currentPlayer
    const currentPlayerIndex = store.currentPlayerIndex
    const currentPlayer = store.players[currentPlayerIndex]
    store.user.game.cells[gameSpaceIndex] = currentPlayer
    const winner = gameBoard.isGameOver(store.user.game.cells)
    store.user.game.over = winner
    if (winner) {
      blockGameBoardClicks()
      // if newly finished game was previously stored as incomplete, remove it
      // from list of incomplete game id's
      const gameIncompleteIndex = store.incompleteGameIds.indexOf(store.user.game.id)
      if (gameIncompleteIndex >= 0) {
        store.incompleteGameIds.splice(gameIncompleteIndex, 1)
      }
    }
    gameApi.gameSpaceClick(gameSpaceIndex, currentPlayer, winner)
      // store.user.game has already been updated to check for winner, so
      // response is not actually needed for anything
      .then(response => {
        gameUi.onGameSpaceClickSuccess(gameSpaceDiv, currentPlayer, currentPlayerIndex, winner)
      })
      .catch(gameUi.onGameSpaceClickFailure)
  } else {
    gameUi.onGameSpaceClickFailure()
  }
}

const onResumeIncompleteOpen = () => {
  $('.resume-incomplete-message').text('')
  let displayText = ''
  const gameIds = store.incompleteGameIds
  for (let i = 0; i < (gameIds.length - 1); i++) {
    displayText += `${gameIds[i]}, `
  }
  displayText += gameIds[gameIds.length - 1]
  $('.incomplete-id-list', '.resume-incomplete-modal').text(displayText)
}

const onResumeIncomplete = () => {
  const selectedId = $('.incomplete-id-input', '.resume-incomplete-modal').val()
  gameApi.getGameById(selectedId)
    .then(response => {
      $('.game-space').off('click')
      $('.game-space').on('click', onGameSpaceClick)
      gameUi.onResumeIncompleteSuccess(response)
    })
    .catch(gameUi.onResumeIncompleteFailure)
}

module.exports = {
  onGameBoardCreate,
  onGameSpaceClick,
  onResumeIncompleteOpen,
  onResumeIncomplete
}
