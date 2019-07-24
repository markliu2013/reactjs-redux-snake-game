import { RUNNING, STOPPED, OVER } from '../constants/GameStatus';
import * as directions from '../constants/Directions';
import * as actionTypes from '../constants/ActionTypes';
import { getInitialState } from '../utils/config';

const initialState = getInitialState();

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.RESTART_GAME_WITH_FOOD: {
            let nextState = Object.assign({}, state);
            let initialState = getInitialState();
            nextState.board.gridColNum = state.control.gridColNum;
            nextState.board.gridRowNum = state.control.gridRowNum;
            nextState.snake.speedValue = state.control.snakeSpeedValue;
            nextState.food.data = action.foodData;
            nextState.snake.data = initialState.snake.data;
            nextState.game.status = RUNNING;
            return nextState;
        }
        case actionTypes.TOGGLE_GAME: {
            return Object.assign({}, state, {
                game: {status: state.game.status === RUNNING ? STOPPED : RUNNING}
            });
        }
        case actionTypes.RESET_GAME_WITH_FOOD: {
            let nextState = Object.assign({}, getInitialState());
            nextState.food.data = action.foodData;
            return nextState;
        }
        case actionTypes.CHANGE_GRID_ROW_NUM: {
            // TODO shallow? deep?
            let nextState = Object.assign({}, state);
            nextState.control.gridRowNum = action.value;
            return nextState;
        }
        case actionTypes.CHANGE_GRID_COL_NUM: {
            let nextState = Object.assign({}, state);
            nextState.control.gridColNum = action.value;
            return nextState;
        }
        case actionTypes.CHANGE_SNAKE_SPEED: {
            let nextState = Object.assign({}, state);
            nextState.control.snakeSpeedValue = action.value;
            return nextState;
        }
        case actionTypes.SNAKE_GO: {
            if (state.game.status == STOPPED) {
                return state;
            }

            let nextSnakeData = state.snake.data.slice();
            let nextGrid = Number(nextSnakeData[nextSnakeData.length-1]);
            let hitFlag = false;
            switch (state.snake.direction) {
                case directions.UP:
                    nextGrid = nextGrid - Number(state.board.gridColNum);
                    if (nextGrid < 0) hitFlag = true;
                    break;
                case directions.DOWN:
                    nextGrid = nextGrid + Number(state.board.gridColNum);
                    if (nextGrid > state.board.gridRowNum * state.board.gridColNum) hitFlag = true;
                    break;
                case directions.LEFT:
                    if (nextGrid % state.board.gridColNum === 0) hitFlag = true;
                    nextGrid = nextGrid - 1;
                    break;
                case directions.RIGHT:
                    nextGrid = nextGrid + 1;
                    if (nextGrid % state.board.gridColNum === 0) hitFlag = true;
                    break;
                default :
                    break;
            }
            let nextState = Object.assign({}, state);
            if (hitFlag) {
                nextState.game.status = OVER;
                return nextState;
            }
            nextSnakeData.shift();
            nextSnakeData.push(nextGrid);

            nextState.snake.data = nextSnakeData;
            return nextState;
        }
        default:
            return state
    }
}