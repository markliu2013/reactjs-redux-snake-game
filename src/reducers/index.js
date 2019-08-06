import { RUNNING, STOPPED, OVER } from '../constants/GameStatus';
import * as directions from '../constants/Directions';
import * as actionTypes from '../constants/ActionTypes';
import { getInitialState } from '../utils/config';
import { LEFT, RIGHT, UP, DOWN } from "../constants/Directions";

const initialState = getInitialState();

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.RESTART_GAME_BEFORE: {
            let nextState = Object.assign({}, state);
            let initialState = getInitialState();
            nextState.board.gridColNum = state.control.gridColNum;
            nextState.board.gridRowNum = state.control.gridRowNum;
            nextState.snake.speedValue = state.control.snakeSpeedValue;
            nextState.snake.canHitSelf = state.control.snakeCanHitSelf;
            nextState.snake.data = initialState.snake.data;
            nextState.snake.direction = initialState.snake.direction;
            nextState.game.status = RUNNING;
            return nextState;
        }
        case actionTypes.TOGGLE_GAME: {
            let nextState = Object.assign({}, state);
            nextState.game.status = state.game.status === RUNNING ? STOPPED : RUNNING;
            return nextState;
        }
        case actionTypes.RESET_GAME_BEFORE: {
            let nextState = Object.assign({}, getInitialState());
            nextState.food.data = action.foodData;
            return nextState;
        }
        case actionTypes.OVER_GAME: {
            let nextState = Object.assign({}, state);
            nextState.game.status = OVER;
            return nextState;
        }
        case actionTypes.REVIVE_GAME: {
            let nextState = Object.assign({}, state);
            const snakeHead = Number(state.snake.data[state.snake.data.length-1]);
            const gridRowNum = Number(state.board.gridRowNum);
            const gridColNum = Number(state.board.gridColNum);

            switch (state.snake.direction) {
                case UP:
                    if (snakeHead < gridColNum / 2) {
                        nextState.snake.direction = RIGHT;
                    } else {
                        nextState.snake.direction = LEFT;
                    }
                    break;
                case RIGHT:
                    // which row
                    if (snakeHead / gridColNum < gridRowNum / 2) {
                        nextState.snake.direction = DOWN;
                    } else {
                        nextState.snake.direction = UP;
                    }
                    break;
                case DOWN:
                    // which col
                    if (snakeHead % gridColNum < gridColNum / 2) {
                        nextState.snake.direction = RIGHT;
                    } else {
                        nextState.snake.direction = LEFT;
                    }
                    break;
                case LEFT:
                    // which row
                    if (snakeHead / gridColNum < gridRowNum / 2) {
                        nextState.snake.direction = DOWN;
                    } else {
                        nextState.snake.direction = UP;
                    }
                    break;
                default :
                    break;
            }
            nextState.game.status = RUNNING;
            return nextState;
        }
        case actionTypes.CHANGE_GRID_ROW_NUM: {
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
        case actionTypes.CHANGE_SNAKE_CAN_HIT_SELF: {
            let nextState = Object.assign({}, state);
            nextState.control.snakeCanHitSelf = action.value;
            return nextState;
        }
        case actionTypes.SNAKE_GO_WITH_DATA: {
            if (state.game.status !== RUNNING) return state;
            let nextState = Object.assign({}, state);
            let nextSnakeData = state.snake.data.slice();
            nextSnakeData.shift();
            nextSnakeData.push(action.value);
            nextState.snake.data = nextSnakeData;
            return nextState;
        }
        case actionTypes.EAT_FOOD: {
            if (state.game.status !== RUNNING) return state;
            let nextState = Object.assign({}, state);
            let nextSnakeData = state.snake.data.slice();
            nextSnakeData.push(state.food.data);
            nextState.snake.data = nextSnakeData;
            return nextState;
        }
        case actionTypes.CREATE_FOOD_WITH_DATA: {
            let nextState = Object.assign({}, state);
            nextState.food.data = action.value;
            return nextState;
        }
        case actionTypes.CHANGE_DIRECTION: {
            if (state.game.status !== RUNNING) return state;
            if (state.snake.direction === LEFT && action.value === RIGHT) return state;
            if (state.snake.direction === RIGHT && action.value === LEFT) return state;
            if (state.snake.direction === UP && action.value === DOWN) return state;
            if (state.snake.direction === DOWN && action.value === UP) return state;
            let nextState = Object.assign({}, state);
            nextState.snake.direction = action.value;
            return nextState;
        }
        case actionTypes.LOAD_STATE_WITH_DATA: {
            return Object.assign({}, state, action.value);
        }
        default:
            return state
    }
}