'use strict'

const authEvents = require('./auth/authEvents')
const store = require('./store')

$(() => {
  store.players = ['x', 'o']
  $('main').hide()
  $('.sign-up-form').on('submit', authEvents.onSignUp)
  $('.sign-in-form').on('submit', authEvents.onSignIn)
  $('.change-pw-form').on('submit', authEvents.onChangePw)
  $('.sign-out-form').on('submit', authEvents.onSignOut)
})
