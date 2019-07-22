import React from 'react';
import BoardContainer from "./BoardContainer";
import ControlPanelContainer from "./ControlPanelContainer";

const Game = () => (
    <div className="gameWrapper">
        <BoardContainer />
        <ControlPanelContainer />
    </div>
);

export default Game;