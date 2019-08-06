import React from 'react';

const ControlData = ({ onSave, onLoad }) => (
    <div className="controlButtons">
        <button onClick={ onSave }>Save</button>
        <button onClick={ onLoad }>Load</button>
    </div>
);

export default ControlData;