import React from 'react';
import GameScore from './GameScore';
import GridRowNumsSelect from './GridRowNumsSelect';
import GridColNumsSelect from './GridColNumsSelect';
import GameSpeedSelect from './GameSpeedSelect';
import HitCheckBox from './HitCheckBox';
import ControlStatus from './ControlStatus';
import ControlData from './ControlData';
import GameInfo from './GameInfo';

export default class ControlPanel extends React.Component {

    handleGridRowNumControlChange = (value) => {
        this.props.onGridRowNumControlChange(value);
    }

    handleGridColNumControlChange = (value) => {
        this.props.onGridColNumControlChange(value);
    }

    handleSnakeSpeedControlChange = (value) => {
        this.props.onSnakeSpeedControlChange(value);
    }

    handleSnakeCanHitSelfChange = (value) => {
        this.props.onSnakeCanHitSelfChange(value);
    }

    render() {
        const { gridRowNumOptions, gridRowNumControl, gridColNumOptions, gridColNumControl, snakeSpeedOptions, snakeSpeedControl, snakeCanHitSelfControl, score, gameStatus } = this.props;
        return (
            <div className="controlPanel">
                <h2>{gameStatus}</h2>
                <GameScore score = {score} />
                <div className="gameInitControl">
                    <GridRowNumsSelect options={gridRowNumOptions} value={gridRowNumControl} onChange={this.handleGridRowNumControlChange} />
                    <GridColNumsSelect options={gridColNumOptions} value={gridColNumControl} onChange={this.handleGridColNumControlChange} />
                    <GameSpeedSelect options={snakeSpeedOptions} value={snakeSpeedControl} onChange={this.handleSnakeSpeedControlChange} />
                    <HitCheckBox value={snakeCanHitSelfControl} onChange={this.handleSnakeCanHitSelfChange} />
                </div>
                <ControlStatus gameStatus={gameStatus}
                               onRestartClick={this.props.onRestartClick}
                               onToggleClick={this.props.onToggleClick}
                               onResetClick={this.props.onResetClick}
                               onReviveClick={this.props.onReviveClick} />
                <ControlData onSave={this.props.onSaveClick} onLoad={this.props.onLoadClick} />
                <GameInfo />
            </div>
        );
    }
}