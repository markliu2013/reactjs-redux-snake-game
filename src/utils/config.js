import { RUNNING, STOPPED } from '../constants/GameStatus';
import * as directions from '../constants/Directions';
import * as configs from '../constants/Config';
import { getRandomInt } from '../utils/math';

export function getFoodData(gridRowNum, gridColNum, snakeData = getInitialState().snake.data) {
    const squareNums = gridRowNum * gridColNum;
    const squareArr = [...Array(squareNums).keys()];
    const foodArr = squareArr.filter((i)=>{return !snakeData.includes(i)});
    return getRandomInt(0, foodArr.length);
}

export function getInitialState() {
    let initialState = {
        board: {
            gridColNum: 30,
            gridRowNum: 30
        },
        food: {
            data: 20
        },
        game: {
            status: STOPPED
        },
        snake: {
            direction: directions.LEFT,
            data: [0, 1, 2],
            speedValue: 50 // match speedOptions index, it is level
        },
        control: {
            gridColNum: 30,
            gridRowNum: 30,
            snakeSpeedValue: 50
        }
    }
    initialState.food.data = getFoodData(initialState.board.gridRowNum, initialState.board.gridColNum, initialState.snake.data);
    return initialState;
}