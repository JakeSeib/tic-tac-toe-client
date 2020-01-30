'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/authEvents')
const gameEvents = require('./game/gameEvents')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('main').hide()
  $('.sign-up-form').on('submit', authEvents.onSignUp)
  $('.sign-in-form').on('submit', authEvents.onSignIn)
  $('.change-pw-form').on('submit', authEvents.onChangePw)
  $('.sign-out-form').on('submit', authEvents.onSignOut)
  $('.game-space').on('click', gameEvents.onGameSpaceClick)
})
