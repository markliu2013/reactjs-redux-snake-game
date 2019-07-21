import React from 'react';

const GameSpeedSelect = () => (
    <div className="gameSpeedSelect">
        <span>Speed</span>
        <select>
            <option value="1000">1</option>
            <option value="900">2</option>
            <option value="800">3</option>
            <option value="700">4</option>
            <option value="600">5</option>
            <option value="500">6</option>
            <option value="400">7</option>
            <option value="300">8</option>
            <option value="200">9</option>
            <option value="100">10</option>
            <option value="50">11</option>
        </select>
        <span>Level</span>
    </div>
);

export default GameSpeedSelect;