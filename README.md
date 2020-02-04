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
- Handle user authentication
- Handle game API
- Create game board & engine

Broken out into smaller steps, this became:
- Write curl scripts for all needed API communication
- Implement user auth events on the front-end
- Create basic page layout and flow (i.e. hide sign up/in options when already signed in, create game board with basic click handlers)
- Implement API calls for creating a new game and updating it when clicked
- Create game engine, consisting of 2 main components
  - A "referee" to determine if a game is over, and if so who won
  - A way to cycle the current player between X and O
- Implement remaining requirements (form resetting, game board reset button, user messaging, showing game history)

I focused my plan around grouping together all the game logic in my workflow- creating the game board and testing its funcionality vis-a-vis both the API and the game engine. The different components of making the game function were far more interlinked than other components, and to some degree their full implementation also depended upon user auth already being completed (for example, automatically creating a new game upon login required an event handler for login to hook game creation up to).

See also [the wireframes](/planning/wireframes.md) and [user stories](/planning/user-stories.md) created for this project as part of planning.

For features beyond the MVP, I had planned on showing more detailed game history and from there allowing the user to resume a specified incomplete game (if any existed).

Before adding more detailed game results, the application was getting the full historical data from the server, then processing them for game results, every time a new game was started. After showing the results in more detail, it became necessary to only get historical data on sign-in, and thereafter update the table client-side (while still sending results to the server).

### How could this be improved?

Being a project completed in four days, there is naturally much room for improvement.

- For starters, the layout and styling could do with a serious overhaul with the help of a designer, rather than continuing to be made up entirely of plain-looking boxes and paragraph elements.
  - Having square spaces on the game board would make it look more like a traditional game board. This could be accomplished by swapping between identically-sized square images for an empty square, a square with an X, and a square with an O.
- The application can become slow to load with lots of historical data, as the result is not stored in the database with any more granularity beyond being 'over' or not. While steps have been taken to ameliorate this on the front-end, the real solution to this problem, if this kind of historical data is desired, would be to store it in the database (which falls outside the scope of this project).
- Error messages for the user do not always contain relevant information on what caused the error. For example, the same stock message is displayed whenever signing up fails, though it would be possible to check whether password and password confirmation match or not and inform the user of the specific problem if they do not.
- An option could be given to go back to uncompleted games and finish them.
- Other play options could be incorporated: playing against someone on another device, or playing against a computer opponent.
