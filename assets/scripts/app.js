'use strict'

const authEvents = require('./auth/authEvents')
const gameEvents = require('./game/gameEvents')
const store = require('./store')

$(() => {
  store.players = ['x', 'o']
  store.incompleteGameIds = []
  $('main').hide()
  $('.resume-incomplete-container', '.nav-wrapper').hide()
  $('.sign-up-form', '.sign-in-wrapper').on('submit', authEvents.onSignUp)
  $('.sign-in-form', '.sign-in-wrapper').on('submit', authEvents.onSignIn)
  $('.change-pw-form', '.nav-wrapper').on('submit', authEvents.onChangePw)
  $('.sign-out-form', '.nav-wrapper').on('submit', authEvents.onSignOut)
  $('.new-game-btn', '.main-content').on('click', gameEvents.onGameBoardCreate)
  $('.resume-incomplete-open', '.resume-incomplete-container').on('click', gameEvents.onResumeIncompleteOpen)
  $('.resume-incomplete-confirm', '.resume-incomplete-modal').on('click', gameEvents.onResumeIncomplete)
})
