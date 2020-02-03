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

const gameSpaceClick = (gameSpaceIndex, currentPlayer, winner) => {
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
          'value': currentPlayer
        },
        'over': Boolean(winner)
      }
    }
  })
}

const gameIndex = (over) => {
  // Get all games associated with a user. Optional over parameter can be either
  // 'true' or 'false' to restrict results to games with matching over property
  let overQuery = ''
  if ([true, false].includes(over)) {
    overQuery = `?over=${over}`
  }
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
