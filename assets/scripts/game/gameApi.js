'use strict'

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
        'over': false
      }
    }
  })
}

module.exports = {
  gameBoardCreate,
  gameSpaceClick
}
