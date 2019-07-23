import React from 'react';
import { connect } from "react-redux";
import { snakeGo } from '../actions';

class SnakeTimer extends React.Component {

    componentDidMount() {
        const { snakeSpeed, onSnakeGo } = this.props;
        this.timerID = setInterval(
            onSnakeGo,
            snakeSpeed
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return null;
    }

}

const mapStateToProps = (state) => ({
    snakeSpeed: state.snake.speedValue
});

const mapDispatchToProps = (dispatch) => {
    return {
        onSnakeGo: () => {dispatch(snakeGo())},
    }
}

SnakeTimer = connect(mapStateToProps, mapDispatchToProps)(SnakeTimer);

export default SnakeTimer;