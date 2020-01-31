'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./authApi')
const authUi = require('./authUi')
const gameEvents = require('../game/gameEvents')

const onSignUp = event => {
  event.preventDefault()
  // get values from user's input, format for api
  const userData = getFormFields(event.target)
  // send data to api as a post request
  authApi.signUp(userData)
    // handle if api succeeds
    .then(authUi.onSignUpSuccess)
    // handle if api fails
    .catch(authUi.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const userData = getFormFields(event.target)
  authApi.signIn(userData)
    .then(authUi.onSignInSuccess)
    .then(gameEvents.onGameBoardCreate)
    .catch(authUi.onSignInFailure)
}

const onChangePw = event => {
  event.preventDefault()
  const userData = getFormFields(event.target)
  authApi.changePw(userData)
    .then(authUi.onChangePwSuccess)
    .catch(authUi.onChangePwFailure)
}

const onSignOut = event => {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.onSignOutSuccess)
    .catch(authUi.onSignOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut
}
