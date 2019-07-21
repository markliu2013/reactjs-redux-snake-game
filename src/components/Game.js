import React from 'react';
import Board from "./Board";
import ControlPanel from "./ControlPanel";

const Game = () => (
    <div className="gameWrapper">
        <Board gridRowNum={30} gridColNum={30} />
        <ControlPanel />
    </div>
);

export default Game;