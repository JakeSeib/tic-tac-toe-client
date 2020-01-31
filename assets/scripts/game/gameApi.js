'use strict'

const gameBoard = require('./gameBoard')
const config = require('../config')
const store = require('../store')

const gameBoardCreate = () => {
  return $.ajax({
    url: `${config.apiUrl}/games`,
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: '{}'
  })
}

const gameSpaceClick = gameSpaceIndex => {
  const gameId = store.user.game.id
  console.log('current game cells', store.user.game.cells)

  return $.ajax({
    url: `${config.apiUrl}/games/${gameId}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      'game': {
        'cell': {
          'index': gameSpaceIndex,
          'value': store.players[store.currentPlayerIndex]
        },
        'over': Boolean(gameBoard.isGameOver(store.user.game.cells))
      }
    }
  })
}

module.exports = {
  gameBoardCreate,
  gameSpaceClick
}
