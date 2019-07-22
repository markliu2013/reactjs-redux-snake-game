# reactjs-redux-snake-game
ReactJS Redux Snake Game

state design:
var gameState = 1;// game status  1 stopped  2 running  3 paused
var gridRowNum = 30;
var gridColNum = 30;
var speed = 200;// speed,  the milliseconds to move a grid
var snakeArr = null;// the coordinates snake holding
var food = null;// the coordinate food holding
var direction = 39;// direction of snake, init to right

var moveThread = null;


board gridRowNum gridColNum
snake direction data speed
food data

component design:
Game
Board
game-info
