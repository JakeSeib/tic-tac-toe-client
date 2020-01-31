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

const gameSpaceClick = (gameSpaceIndex, winner) => {
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
        'over': Boolean(winner)
      }
    }
  })
}

const gameIndex = (over) => {
  let overQuery = ''
  if (over !== undefined) {
    overQuery = `?over=${over}`
  }
  // Get all games associated with a user. Optional over parameter can be either
  // 'true' or 'false' to restrict results to games with matching over property
  return $.ajax({
    url: `${config.apiUrl}/games${overQuery}`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  gameBoardCreate,
  gameSpaceClick,
  gameIndex
}
