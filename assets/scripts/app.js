'use strict'

const authEvents = require('./auth/authEvents')
const gameEvents = require('./game/gameEvents')
const store = require('./store')

$(() => {
  store.players = ['x', 'o']
  $('main').hide()
  $('.sign-up-form').on('submit', authEvents.onSignUp)
  $('.sign-in-form').on('submit', authEvents.onSignIn)
  $('.change-pw-form').on('submit', authEvents.onChangePw)
  $('.sign-out-form').on('submit', authEvents.onSignOut)
  $('.new-game-btn').on('click', gameEvents.onGameBoardCreate)
})
