import React from "react";
import { connect } from "react-redux";
import * as configs from '../constants/Config';
import ControlPanel from '../components/ControlPanel';
import { restartGame, toggleGame, resetGame } from '../actions';

const mapStateToProps = (state) => ({
    gridRowNumOptions: configs.gridRowNumOptions,
    gridRowNum: state.board.gridRowNum,
    gridColNumOptions: configs.gridColNumOptions,
    gridColNum: state.board.gridColNum,
    snakeSpeedOptions: configs.speedOptions,
    snakeSpeed: state.snake.speedValue,
    score: state.snake.data.length,
    gameStatus: state.game.status
});

const mapDispatchToProps = (dispatch) => {
    return {
        onRestartClick: (gridRowNumValue, gridColNumValue, snakeSpeedValue) => {dispatch(restartGame(gridRowNumValue, gridColNumValue, snakeSpeedValue))},
        onToggleClick: () => {dispatch(toggleGame())},
        onResetClick: () => {dispatch(resetGame())}
    }
}

const ControlPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ControlPanel);

export default ControlPanelContainer;
