import * as types from '../constants/ActionTypes';
import { getRandomInt } from '../utils/math';
import { getGridRowNums, getFoodData } from '../utils/config';

export const restartGame = (gridRowNum, gridColNum, snakeSpeed) => {

    return {
        type: types.RESTART_GAME,
        gridRowNum: gridRowNum,
        gridColNum: gridColNum,
        snakeSpeed: snakeSpeed,
        foodData:  getFoodData(gridRowNum, gridColNum)
    }
};
export const toggleGame = () => ({ type: types.TOGGLE_GAME });
export const resetGame = () => ({ type: types.RESET_GAME });

export const snakeGo = () => ({ type: types.SNAKE_GO });
export const moveUp = () => ({ type: types.MOVE_UP });