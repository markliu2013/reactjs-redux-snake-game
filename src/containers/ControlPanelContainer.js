import React from "react";
import { connect } from "react-redux";
import * as configs from '../constants/Config';
import ControlPanel from '../components/ControlPanel';

const mapStateToProps = (state) => ({
    gridRowNumOptions: configs.gridRowNumOptions,
    gridRowNumValue: configs.gridRowNumOptions[state.board.gridRowNum-1],
    gridColNumOptions: configs.gridColNumOptions,
    gridColNumValue: configs.gridColNumOptions[state.board.gridColNum-1],
    snakeSpeedOptions: configs.speedOptions,
    snakeSpeedValue: configs.speedOptions[state.snake.speedValue-1]
});


const ControlPanelContainer = connect(mapStateToProps, null)(ControlPanel);

export default ControlPanelContainer;
