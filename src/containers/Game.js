import React from 'react';
import { connect } from "react-redux";
import BoardContainer from "./BoardContainer";
import ControlPanelContainer from "./ControlPanelContainer";
import SnakeTimer from "./SnakeTimer";

class Game extends React.Component {

    handleKeyPress = (event) => {
        this.props.onKeyPress(event.keyCode);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    render() {
        return (
            <div className="gameWrapper">
                <BoardContainer />
                <ControlPanelContainer />
                <SnakeTimer />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onKeyPress: (code) => {},
    }
}

Game = connect(null, mapDispatchToProps)(Game);

export default Game;