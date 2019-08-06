import * as types from '../constants/ActionTypes';

export const restartGame = () => ({ type: types.RESTART_GAME });
export const restartGameBefore = () => ({ type: types.RESTART_GAME_BEFORE });
export const toggleGame = () => ({ type: types.TOGGLE_GAME });
export const resetGame = () => ({ type: types.RESET_GAME });
export const resetGameBefore = () => ({ type: types.RESET_GAME_BEFORE });
export const overGame = () => ({ type: types.OVER_GAME });
export const reviveGame = () => ({ type: types.REVIVE_GAME });

export const changeGridRowNumControl = (value) => ({
    type: types.CHANGE_GRID_ROW_NUM,
    value: value
});
export const changeGridColNumControl = (value) => ({
    type: types.CHANGE_GRID_COL_NUM,
    value: value
});
export const changeSnakeSpeedControl = (value) => ({
    type: types.CHANGE_SNAKE_SPEED,
    value: value
});
export const changeSnakeCanHitSelfControl = (value) => ({
    type: types.CHANGE_SNAKE_CAN_HIT_SELF,
    value: value
});

export const snakeGo = () => ({ type: types.SNAKE_GO });
export const snakeGoWithData = (value) => ({
    type: types.SNAKE_GO_WITH_DATA,
    value: value
});
export const eatFood = () => ({ type: types.EAT_FOOD });
export const createFood = (value) => ({ type: types.CREATE_FOOD });
export const createFoodWithData = (value) => ({
    type: types.CREATE_FOOD_WITH_DATA,
    value: value
});

export const changeDirection = (value) => ({
    type: types.CHANGE_DIRECTION,
    value: value
});

export const saveState = () => ({ type: types.SAVE_STATE });
export const loadState = () => ({ type: types.LOAD_STATE });
export const loadStateWithData = (value) => ({
    type: types.LOAD_STATE_WITH_DATA,
    value: value
});