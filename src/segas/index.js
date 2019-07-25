import { call, delay, put, select, all, takeEvery } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
import { restartGameBefore, resetGameBefore, overGame, snakeGo, eatFood, createFood, createFoodWithData } from '../actions';
import * as selectors from '../selectors';
import { getRandomInt } from '../utils';
import { RUNNING, STOPPED, OVER } from '../constants/GameStatus';
import { LEFT, RIGHT, UP, DOWN } from "../constants/Directions";

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
    yield takeEvery(types.SNAKE_GO_BEFORE, snakeGoBefore)
}

function* snakeGoBefore(action) {

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
                if (nextGrid > gridNum) hitFlag = true;
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
        if (snakeData.includes(nextGrid)) hitFlag = true;

        if (hitFlag) {
            yield put(overGame());
        } else {
            const foodData = yield select(selectors.foodData);
            if (nextGrid === foodData) {
                yield put(eatFood());
                yield put(createFood());
            } else {
                yield put(snakeGo(nextGrid));
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
    yield put(createFoodWithData(getRandomInt(0, foodArr.length)));
}

function* watchCreateFood() {
    yield takeEvery(types.CREATE_FOOD, createFoodSaga)
}

export default function* rootSaga() {
    yield all([
        watchRestartGame(),
        watchResetGame(),
        watchSnakeGo(),
        watchCreateFood()
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