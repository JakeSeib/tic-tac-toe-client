'use strict'

const api = require('./api')
const ui = require('./ui')

const onGameSpaceClick = event => {
  // change div's text to X or O
  const gameSpaceIndex = event.target.getAttribute('data-cell-index')
  console.log(gameSpaceIndex)
  console.log($(`[data-cell-index=${gameSpaceIndex}]`))
  $(`[data-cell-index=${gameSpaceIndex}]`).text('X')
}

module.exports = {
  onGameSpaceClick
}
