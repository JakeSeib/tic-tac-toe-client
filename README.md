To be replaced with own content

scripts/game/gameBoard.js

isGameOver arbitrarily checks for horizontal wins first, followed by
vertical wins, followed by diagonal wins, and additionally loops over the
different rows, columns, and diagonals arbitrarily. It does not check for
an illegal game board- either too many inputs from one player (i.e. a
board with 5 'x's and 2 'o's) or a board with multiple victory
conditions. It is entirely up to the rest of the project to prevent a
game from ever being stored this way in the API's database.
