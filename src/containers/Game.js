import React from 'react';
import { connect } from "react-redux";
import BoardContainer from "./BoardContainer";
import ControlPanelContainer from "./ControlPanelContainer";
import SnakeTimer from "./SnakeTimer";
import { keyCodeToDirection } from "../utils"
import { changeDirection, createFood, snakeGo } from '../actions';

class Game extends React.Component {

    handleKeyPress = (event) => {
        this.props.onKeyPress(event.keyCode);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
        this.props.onLoaded();
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    render() {
        return (
            <div className="gameWrapper">
                <BoardContainer />
                <ControlPanelContainer />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onKeyPress: (value) => {
            dispatch(changeDirection(keyCodeToDirection(value)));
            // when you change direction, move one step immediately.
            // keep Pressing the arrow key, snake will keep moving.
            dispatch(snakeGo());
        },
        onLoaded: () => {
            dispatch(createFood())
        }
    }
}

Game = connect(null, mapDispatchToProps)(Game);

export default Game;