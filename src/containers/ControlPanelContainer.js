import React from "react";
import { connect } from "react-redux";
import * as configs from '../constants/Config';
import ControlPanel from '../components/ControlPanel';
import { restartGame, toggleGame, resetGame, reviveGame, changeGridRowNumControl, changeGridColNumControl, changeSnakeSpeedControl, changeSnakeCanHitSelfControl, saveState, loadState } from '../actions';

const mapStateToProps = (state) => ({
    gridRowNumOptions: configs.gridRowNumOptions,
    gridRowNumControl: state.control.gridRowNum,
    gridColNumOptions: configs.gridColNumOptions,
    gridColNumControl: state.control.gridColNum,
    snakeSpeedOptions: configs.speedOptions,
    snakeSpeedControl: state.control.snakeSpeedValue,
    snakeCanHitSelfControl: state.control.snakeCanHitSelf,
    score: state.snake.data.length,
    gameStatus: state.game.status
});

const mapDispatchToProps = (dispatch) => {
    return {
        onGridRowNumControlChange: (value) => { dispatch(changeGridRowNumControl(value)) },
        onGridColNumControlChange: (value) => { dispatch(changeGridColNumControl(value)) },
        onSnakeSpeedControlChange: (value) => { dispatch(changeSnakeSpeedControl(value)) },
        onSnakeCanHitSelfChange: (value) => { dispatch(changeSnakeCanHitSelfControl(value)) },
        onRestartClick: () => { dispatch(restartGame()) },
        onToggleClick: () => { dispatch(toggleGame()) },
        onResetClick: () => { dispatch(resetGame()) },
        onReviveClick: () => { dispatch(reviveGame()) },
        onSaveClick: () => { dispatch(saveState()) },
        onLoadClick: () => { dispatch(loadState()) }
    }
}

const ControlPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ControlPanel);

export default ControlPanelContainer;
