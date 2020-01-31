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
  // api call requires game id & game delta

  // return $.ajax({
  //   url: config.apiUrl + '/change-password',
  //   method: 'PATCH',
  //   headers: {
  //     Authorization: `Token token=${store.user.token}`
  //   },
  //   data: userData
  // })
}

module.exports = {
  gameBoardCreate,
  gameSpaceClick
}
