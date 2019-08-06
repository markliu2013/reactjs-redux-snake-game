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
            data: [...Array(3).keys()],
            speedValue: 500,
            canHitSelf: false,
        },
        control: {
            gridColNum: 30,
            gridRowNum: 30,
            snakeSpeedValue: 500,
            snakeCanHitSelf: false
        }
    };
    return initialState;
}