import { RUNNING, STOPPED } from '../constants/GameStatus';
import * as directions from '../constants/Directions';
import * as configs from '../constants/Config';

export function getInitialState() {
    let initialState = {
        board: {
            gridColNum: 30,
            gridRowNum: 30
        },
        food: {
            data: -1
        },
        game: {
            status: STOPPED
        },
        snake: {
            direction: directions.RIGHT,
            data: [0, 1, 2],
            speedValue: 50 // match speedOptions index, it is level
        },
        control: {
            gridColNum: 30,
            gridRowNum: 30,
            snakeSpeedValue: 50
        }
    }
    // TODO init food with saga
    // initialState.food.data = getFoodData(initialState.board.gridRowNum, initialState.board.gridColNum, initialState.snake.data);
    return initialState;
}