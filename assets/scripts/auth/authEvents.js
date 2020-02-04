'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./authApi')
const authUi = require('./authUi')
const gameEvents = require('../game/gameEvents')
const gameApi = require('../game/gameApi')
const gameUi = require('../game/gameUi')

const signInWithData = userData => {
  // userData has the format that getFormFields outputs from a form with email
  // and password
  authApi.signIn(userData)
    .then(authUi.onSignInSuccess)
    // Get list of previous games before creating the new one to avoid counting
    // the newly created (uncompleted) game in the UI
    .then(response => {
      gameApi.gameIndex()
        .then(gameUi.onGetAllGamesSuccess)
        .catch(gameUi.onGetAllGamesFailure)
    })
    .then(gameEvents.onGameBoardCreate)
    .catch(authUi.onSignInFailure)
}

const onSignUp = event => {
  event.preventDefault()
  // get values from user's input, format for api
  const userData = getFormFields(event.target)
  // format for sign-in api call
  const signInUserData = {
    credentials: {
      email: userData.credentials.email,
      password: userData.credentials.password
    }
  }
  // send data to api as a post request
  authApi.signUp(userData)
    // handle if api succeeds
    .then(authUi.onSignUpSuccess)
    // automatically log the new user in
    .then(response => signInWithData(signInUserData))
    // handle if api fails
    .catch(authUi.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const userData = getFormFields(event.target)
  signInWithData(userData)
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
