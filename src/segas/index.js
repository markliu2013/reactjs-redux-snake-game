import { call, delay, put, select, all, takeEvery } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
import { restartGameWithFood, resetGameWithFood } from '../actions';
import * as selectors from '../selectors';
import { getRandomInt } from '../utils/math';

function getFoodData(gridRowNum, gridColNum, snakeData) {
    const squareNums = gridRowNum * gridColNum;
    const squareArr = [...Array(squareNums).keys()];
    const foodArr = squareArr.filter((i)=>{return !snakeData.includes(i)});
    return getRandomInt(0, foodArr.length);
}

function* restartGameSaga(action) {
    const gridRowNum = yield select(selectors.gridRowNumControl);
    const gridColNum = yield select(selectors.gridColNumControl);
    const snakeData = yield select(selectors.snakeData);
    yield put(restartGameWithFood(getFoodData(gridRowNum, gridColNum, snakeData)));
}

function* watchRestartGame() {
    yield takeEvery(types.RESTART_GAME, restartGameSaga)
}

function* resetGameSaga(action) {
    const gridRowNum = yield select(selectors.gridRowNumControl);
    const gridColNum = yield select(selectors.gridColNumControl);
    const snakeData = yield select(selectors.snakeData);
    yield put(resetGameWithFood(getFoodData(gridRowNum, gridColNum, snakeData)));
}

function* watchResetGame() {
    yield takeEvery(types.RESET_GAME, resetGameSaga)
}

export default function* rootSaga() {
    yield all([
        watchRestartGame(),
        watchResetGame()
    ])
}

//export default function* rootSaga() {
//    while (true) {
//        let gameStatus = yield select(selectors.gameStatus);
//        let snakeSpeedValue = yield select(selectors.snakeSpeedValue);
//        console.log(gameStatus);
//        if (gameStatus === RUNNING) {
//            yield put(snakeGo());
//        }
//        yield delay(snakeSpeedValue);
//    }
//}