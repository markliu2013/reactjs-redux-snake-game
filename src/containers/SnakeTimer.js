import React from 'react';
import { connect } from "react-redux";
import { snakeGo } from '../actions';
// replaced by redux saga
class SnakeTimer extends React.Component {

    setTimer() {
        if (this.timerID) clearInterval(this.timerID);
        const { snakeSpeed, onSnakeGo } = this.props;
        this.timerID = setInterval(
            onSnakeGo,
            snakeSpeed
        );
    }

    componentDidMount() {
        this.setTimer();
    }

    componentDidUpdate() {
        this.setTimer();
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
        onSnakeGo: () => { dispatch(snakeGo()) },
    }
}

SnakeTimer = connect(mapStateToProps, mapDispatchToProps)(SnakeTimer);

export default SnakeTimer;