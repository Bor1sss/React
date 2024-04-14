import React from 'react';
import './Style.css'
const Task1F = ({ isBold, func }) => {
    return (
      <div>
        <button onClick={func}>B</button>
        <p className={isBold ? 'bold' : ''}>sad</p>
      </div>
    );
  }

export default Task1F;
