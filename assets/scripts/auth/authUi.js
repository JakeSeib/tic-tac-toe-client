'use strict'

const store = require('../store')

const onSignUpSuccess = response => {
  $('.sign-up-form').trigger('reset')
}

const onSignUpFailure = () => {
  $('.sign-up-message').text(`Failed to sign up. Ensure that password and \
    password confirmation are the same, or try a different email address.`)
  $('.sign-up-form').trigger('reset')

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
  $('.sign-up-message').text(`Failed to sign in. Ensure that your email and password are correct.`)
  $('.sign-in-form').trigger('reset')
}

const onChangePwSuccess = () => {
  $('.auth-message').text(`Successfully changed password! Congrats, ${store.user.email}!`)
  $('.change-pw-form').trigger('reset')
}

const onChangePwFailure = () => {
  $('.auth-message').text(`Failed to change password. Ensure that your current password is correct.`)
  $('.change-pw-form').trigger('reset')
}

const onSignOutSuccess = () => {
  $('main').hide()
  $('.sign-in-wrapper').show()
  $('.game-history').text('')
  store.user = null
}

const onSignOutFailure = () => {
  $('auth-message').text(`Failed to sign out!`)
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
