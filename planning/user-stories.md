### User Stories

Authentication

- As an unregistered user, I want to sign up with my email, password and password confirmation so that I can play the game
  - If my email is already taken, then I cannot sign up
  - If password and password confirmation do not match, then I cannot sign up
  - If my email is valid, and my password and password confirmation match, then I can sign up
- As a registered user, I want to sign in with my email and password so that I can play the game
  - After signing in, I can see a game board and start playing
  - While signed in, I can change my password by entering my old password and new password
  - While signed in, I can sign out
- As a user not currently signed in, I do not want to see anything that I am unable to interact with (change password, sign out, game board)

Individual Game

- As a registered user currently signed in, I want to click the space on the game board where I want the current player's (X or O) next move to be, and repeat until the game has completed
  - I do not want to options to sign up or sign in
  - If the space I click is already taken, the game board should not be affected and I should see feedback that the space is invalid
  - If the space I click is free, it is filled with the marker for the current player (X or O)
    - If the game ends as a result of my move, the page should represent the result (win or draw, and the winner if win) and disallow filling in additional spaces
    - If the game does not end, current player should be changed and should be visually represented

Multiple Games

- As a user who has completed a game, I want to start a new game
- As a user who has completed multiple games, I want to see the number of games I have completed before

Stretch Goals

- As an unregistered user, I want to sign up and immediately be signed in as the newly created user
- As a user in the middle of a game, I want to reset and start a new game
  - If my current game is not completed, I want to be asked for confirmation before resetting the board
- As a user in the middle of a game, I want to sign out and return to the same game when I sign back in
- As a user who has completed multiple games, I want to see in detail the previous games I've played
  - I want to see how many games have been won by each player (X and O)
  - I want to see those two numbers as a percentage
  - I want to see how many games ended as a draw
