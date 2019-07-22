import React from 'react';
import GameScore from './GameScore'
import GridRowNumsSelect from './GridRowNumsSelect'
import GridColNumsSelect from './GridColNumsSelect'
import GameSpeedSelect from './GameSpeedSelect'
import ControlStatus from './ControlStatus'
import GameInfo from './GameInfo'

const ControlPanel = ({snakeSpeedOptions, snakeSpeedValue, gridRowNumOptions, gridRowNumValue, gridColNumOptions, gridColNumValue }) => (
    <div className="controlPanel">
        <h2>Stopped</h2>
        <GameScore />
        <div className="gameInitControl">
            <GridRowNumsSelect options={gridRowNumOptions} value={gridRowNumValue} />
            <GridColNumsSelect options={gridColNumOptions} value={gridColNumValue} />
            <GameSpeedSelect options={snakeSpeedOptions} value={snakeSpeedValue} />
        </div>
        <ControlStatus />
        <GameInfo />
    </div>
);

export default ControlPanel;