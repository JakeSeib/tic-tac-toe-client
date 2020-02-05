'use strict'

const store = require('../store')

const onSignUpSuccess = response => {
  $('.sign-up-form', '.sign-in-wrapper').trigger('reset')
}

const onSignUpFailure = () => {
  $('.sign-up-message', '.sign-in-wrapper').text(`Failed to sign up. Ensure that password and \
    password confirmation are the same, or try a different email address.`)
  $('.sign-up-form', '.sign-in-wrapper').trigger('reset')

  // clear the message
  // setTimeout(() => {
  //   $('#message')
  //     .text('')
  //     .removeClass('failure')
  // }, 3000)
}

const onSignInSuccess = response => {
  $('.signed-in-message').text(`You are signed in as ${response.user.email}`)
  $('main').show()
  $('.sign-in-wrapper').hide()
  $('.sign-in-form').trigger('reset')
  store.user = response.user
}

const onSignInFailure = () => {
  $('.sign-up-message', '.sign-in-wrapper').text(`Failed to sign in. Ensure that your email and password are correct.`)
  $('.sign-in-form', '.sign-in-wrapper').trigger('reset')
}

const onChangePwSuccess = () => {
  $('.auth-message', '.nav-wrapper').text(`Successfully changed password! Congrats, ${store.user.email}!`)
  $('.change-pw-form', '.nav-wrapper').trigger('reset')
}

const onChangePwFailure = () => {
  $('.auth-message', '.nav-wrapper').text(`Failed to change password. Ensure that your current password is correct.`)
  $('.change-pw-form', '.nav-wrapper').trigger('reset')
}

const onSignOutSuccess = () => {
  $('main').hide()
  $('.resume-incomplete-container', '.nav-wrapper').hide()
  $('.sign-in-wrapper', 'body').show()
  $('.game-history', '.nav-wrapper').text('')
  store.incompleteGameIds = []
  store.user = null
}

const onSignOutFailure = () => {
  $('auth-message', '.nav-wrapper').text(`Failed to sign out!`)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePwSuccess,
  onChangePwFailure,
  onSignOutSuccess,
  onSignOutFailure
}
