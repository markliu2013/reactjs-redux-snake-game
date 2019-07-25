import * as types from '../constants/ActionTypes';

export const restartGame = () => ({ type: types.RESTART_GAME });
export const toggleGame = () => ({ type: types.TOGGLE_GAME });
export const resetGame = () => ({ type: types.RESET_GAME });
export const overGame = () => ({ type: types.OVER_GAME });

export const changeGridRowNumControl = (value) => ({
    type: types.CHANGE_GRID_ROW_NUM,
    value: value
})
export const changeGridColNumControl = (value) => ({
    type: types.CHANGE_GRID_COL_NUM,
    value: value
})
export const changeSnakeSpeedControl = (value) => ({
    type: types.CHANGE_SNAKE_SPEED,
    value: value
})

export const snakeGoBefore = () => ({ type: types.SNAKE_GO_BEFORE });
export const snakeGo = (value) => ({
    type: types.SNAKE_GO,
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