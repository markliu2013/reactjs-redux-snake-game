import { RUNNING, STOPPED } from '../constants/GameStatus';
import * as directions from '../constants/Directions';
import * as actionTypes from '../constants/ActionTypes';
import { getInitialState } from '../utils/config';

const initialState = getInitialState();

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.RESTART_GAME: {
            let nextState = Object.assign({}, getInitialState());
            nextState.board.gridColNum = action.gridColNum;
            nextState.board.gridRowNum = action.gridRowNum;
            nextState.food.data = action.foodData;
            nextState.game.status = RUNNING;
            return nextState;
        }
        case actionTypes.TOGGLE_GAME: {
            return Object.assign({}, state, {
                game: {status: state.game.status === RUNNING ? STOPPED : RUNNING}
            });
        }
        case actionTypes.RESET_GAME: {
            return getInitialState();
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
                    console.log(nextGrid % state.board.gridColNum)
                    if (nextGrid % state.board.gridColNum === 0) hitFlag = true;
                    break;
                default :
                    break;
            }
            let nextState = Object.assign({}, state);
            if (hitFlag) {
                nextState.game.status = STOPPED;
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