import React from 'react';
import GameScore from './GameScore'
import GridRowNumsSelect from './GridRowNumsSelect'
import GridColNumsSelect from './GridColNumsSelect'
import GameSpeedSelect from './GameSpeedSelect'
import ControlStatus from './ControlStatus'
import GameInfo from './GameInfo'

export default class ControlPanel extends React.Component {

    constructor(props) {
        super(props);
        this.gridRowNumsRef = React.createRef();
        this.gridColNumsRef = React.createRef();
        this.gameSpeedRef = React.createRef();
    }

    handleRestartClick = () => {
        this.props.onRestartClick(this.gridRowNumsRef.current.value, this.gridColNumsRef.current.value, this.gameSpeedRef.current.value)
    }

    render() {
        const { gridRowNumOptions, gridRowNum, gridColNumOptions, gridColNum, snakeSpeedOptions, snakeSpeed, score, gameStatus } = this.props;
        return (
            <div className="controlPanel">
                <h2>{gameStatus}</h2>
                <GameScore score = {score} />
                <div className="gameInitControl">
                    <GridRowNumsSelect options={gridRowNumOptions} value={gridRowNum} innerRef={this.gridRowNumsRef} />
                    <GridColNumsSelect options={gridColNumOptions} value={gridColNum} innerRef={this.gridColNumsRef} />
                    <GameSpeedSelect options={snakeSpeedOptions} value={snakeSpeed} innerRef={this.gameSpeedRef} />
                </div>
                <ControlStatus gameStatus={gameStatus} onRestartClick={this.handleRestartClick} onToggleClick={this.props.onToggleClick} onResetClick={this.props.onResetClick} />
                <GameInfo />
            </div>
        );
    }
}