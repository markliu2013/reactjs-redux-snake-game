import { call, delay, put, select } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
import { snakeGo } from '../actions';
import * as selectors from '../selectors';
import { RUNNING, STOPPED } from '../constants/GameStatus';

export const getProject = (state) => state.project

export default function* rootSaga() {
    console.log(123);
    while (true) {
        let gameStatus = yield select(selectors.gameStatus);
        let snakeSpeedValue = yield select(selectors.snakeSpeedValue);
        console.log(gameStatus);
        if (gameStatus === RUNNING) {
            yield put(snakeGo());
            //yield delay(100000);
        }
        yield delay(snakeSpeedValue);
    }
}