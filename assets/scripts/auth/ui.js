'use strict'

const store = require('../store')

const onSignUpSuccess = response => {
  $('#message').text(`Successfully signed up! Congrats, ${response.user.email}!`)
  // $('.sign-up-form').trigger('reset')
}

const onSignUpFailure = response => {
  $('#message').text(`Failed to sign up!`)
  // $('.sign-up-form').trigger('reset')

  // clear the message
  // setTimeout(() => {
  //   $('#message')
  //     .text('')
  //     .removeClass('failure')
  // }, 3000)
}

const onSignInSuccess = response => {
  $('#message').text(`Successfully signed in! Congrats, ${response.user.email}!`)
  // $('.sign-in-form').trigger('reset')
  store.user = response.user
}

const onSignInFailure = response => {
  $('#message').text(`Failed to sign in!`)
  // $('.sign-in-form').trigger('reset')
}

const onChangePwSuccess = response => {
  $('#message').text(`Successfully changed password! Congrats, ${store.user.email}!`)
  // $('.change-pw-form').trigger('reset')
}

const onChangePwFailure = response => {
  $('#message').text(`Failed to change password!`)
  // $('.change-pw-form').trigger('reset')
}

const onSignOutSuccess = () => {
  $('#message').text(`Successfully signed out! Congrats, ${store.user.email}!`)
  store.user = null
}

const onSignOutFailure = () => {
  $('#message').text(`Failed to sign out!`)
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
