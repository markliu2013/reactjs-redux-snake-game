import { call, delay, put, select, all, takeEvery } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
import { restartGameBefore, resetGameBefore, overGame, snakeGoWithData, eatFood, createFood, createFoodWithData, loadStateWithData } from '../actions';
import * as selectors from '../selectors';
import { getRandomInt } from '../utils';
import { RUNNING, STOPPED, OVER } from '../constants/GameStatus';
import { LEFT, RIGHT, UP, DOWN } from '../constants/Directions';
import { saveState, loadState } from '../utils/localStorage'

function* restartGameSaga(action) {
    yield put(restartGameBefore());
    yield put(createFood());
}

function* watchRestartGame() {
    yield takeEvery(types.RESTART_GAME, restartGameSaga)
}

function* resetGameSaga(action) {
    yield put(resetGameBefore());
    yield put(createFood());
}

function* watchResetGame() {
    yield takeEvery(types.RESET_GAME, resetGameSaga)
}

function* watchSnakeGo() {
    yield takeEvery(types.SNAKE_GO, snakeGoSaga)
}

function* snakeGoSaga(action) {
    const gameStatus = yield select(selectors.gameStatus);
    if (gameStatus === RUNNING) {
        const gridRowNum = yield select(selectors.gridRowNum);
        const gridColNum = yield select(selectors.gridColNum);
        const gridNum = gridRowNum * gridColNum;
        const snakeDirection = yield select(selectors.snakeDirection);
        const snakeData = yield select(selectors.snakeData);
        const snakeHead = yield select(selectors.snakeHead);
        let hitFlag = false;
        let nextGrid = snakeHead;
        switch (snakeDirection) {
            case UP:
                nextGrid = snakeHead - gridColNum;
                if (nextGrid < 0) hitFlag = true;
                break;
            case DOWN:
                nextGrid = snakeHead + gridColNum;
                // be careful, gridNum-1
                if (nextGrid > gridNum-1) hitFlag = true;
                break;
            case LEFT:
                if (snakeHead % gridColNum === 0) hitFlag = true;
                nextGrid = snakeHead - 1;
                break;
            case RIGHT:
                nextGrid = snakeHead + 1;
                if (nextGrid % gridColNum === 0) hitFlag = true;
                break;
            default :
                break;
        }
        // can not hit yourself
        if (snakeData.includes(nextGrid)) hitFlag = true;
        if (hitFlag) {
            yield put(overGame());
        } else {
            const foodData = yield select(selectors.foodData);
            if (nextGrid === foodData) {
                yield put(eatFood());
                yield put(createFood());
            } else {
                yield put(snakeGoWithData(nextGrid));
            }
        }
    }
}

function* createFoodSaga(action) {
    const gridRowNum = yield select(selectors.gridRowNum);
    const gridColNum = yield select(selectors.gridColNum);
    const snakeData = yield select(selectors.snakeData);
    const squareNums = gridRowNum * gridColNum;
    const squareArr = [...Array(squareNums).keys()];
    const foodArr = squareArr.filter((i)=>{return !snakeData.includes(i)});
    yield put(createFoodWithData(foodArr[getRandomInt(0, foodArr.length-1)]));
}

function* watchCreateFood() {
    yield takeEvery(types.CREATE_FOOD, createFoodSaga)
}

function* saveStateSaga(action) {
    const stateJson = yield select(selectors.stateJson);
    saveState(stateJson);
}

function* watchSaveState() {
    yield takeEvery(types.SAVE_STATE, saveStateSaga)
}

function* loadStateSaga(action) {
    const json = yield call(loadState);
    if (json) {
        yield put(loadStateWithData(json));
    }
}

function* watchLoadState() {
    yield takeEvery(types.LOAD_STATE, loadStateSaga)
}

export default function* rootSaga() {
    yield all([
        watchRestartGame(),
        watchResetGame(),
        watchSnakeGo(),
        watchCreateFood(),
        watchSaveState(),
        watchLoadState()
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