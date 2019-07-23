import React from "react";
import { connect } from "react-redux";
import * as configs from '../constants/Config';
import Board from '../components/Board';

const mapStateToProps = (state) => {
    return ({
        gridRowNum: state.board.gridRowNum,
        gridColNum: state.board.gridColNum,
        snakeData: state.snake.data,
        foodData: state.food.data
    })
}

const BoardContainer = connect(mapStateToProps, null)(Board);

export default BoardContainer;
