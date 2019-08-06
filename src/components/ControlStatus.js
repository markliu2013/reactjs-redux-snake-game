import React from 'react';
import { RUNNING, STOPPED, OVER } from '../constants/GameStatus';

const ControlStatus = ({ onRestartClick, onToggleClick, onResetClick, onReviveClick, gameStatus }) => (
    <div className="controlButtons">
        <button onClick={ onRestartClick }>Restart</button>
        <button onClick={ onToggleClick } disabled={gameStatus === OVER}>{gameStatus === RUNNING ? 'Pause' : 'Continue'}</button>
        <button onClick={ onResetClick }>Reset</button>
        <button onClick={ onReviveClick } disabled={gameStatus !== OVER}>Revive</button>
    </div>
);

export default ControlStatus;