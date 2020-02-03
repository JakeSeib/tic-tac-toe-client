## Overview

This is a SPA written in Javascript that allows the user to play multiple games of tic-tac-toe, using a third-party API deployed on Heroku to store historical game data.

## How to Play

Sign up by filling out email, password, and password confirmation, or log in if already signed up. To play, simply click empty spaces on the game board until the game ends in a victory for one side or a draw.

At any time, the new game button can be pressed to reset the board and begin a new game. Changing password and logging out are (hopefully) self-explanatory to any user familiar with webapps.

## Technologies Used

- **Javascript**: Game engine
- **Jquery**: Event handling and UI updates
- **AJAX**: Api calls for user authentication as well as creating, accessing, and updating game data
- **Grunt**: Deployment
- **GitHub**: Version control

## Development

### Planning

Roughly, the route to having a working MVP was plotted as follows:
- Write curl scripts for all needed API communication
- Implement user auth events on the front-end
- Create basic page layout and flow (i.e. hide sign up/in options when already signed in, create game board with basic click handlers)
- Implement API calls for creating a new game and updating it when clicked
- Create game engine, consisting of 2 main components
  - A "referee" to determine if a game is over, and if so who won
  - A way to cycle the current player between X and O
- Implement remaining requirements (form resetting, game board reset button, user messaging, showing game history)

See also [the wireframes](/planning/wireframes.md) and [user stories](/planning/user-stories.md) created for this project as part of planning.

### How could this be improved?

Being a project completed in four days, there is naturally much room for improvement.

- For starters, the layout and styling could do with a serious overhaul with the help of a designer, rather than continuing to be made up entirely of plain-looking boxes and paragraph elements.
- Error messages for the user do not always contain relevant information on what caused the error. For example, the same stock message is displayed whenever signing up fails, though it would be possible to check whether password and password confirmation match or not and inform the user of the specific problem if they do not.
- Rapidly playing through games and beginning new ones can cause the number of completed games shown on the screen to fail to update (the number on the server remains correct).
- Simply seeing the total number of completed games for a given user is not particularly interesting, and this could be broken out into a more informative breakdown (X wins, O wins, draws, uncompleted). Additionally, an option could be given to go back to uncompleted games and finish them.
- Other play options could be incorporated: playing against someone on another device, or playing against a computer opponent.

###
