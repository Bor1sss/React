import React, { Component } from 'react';
import './Style.css';

class Task1C extends Component {
    constructor(props){
        super(props)
        
    }
    render() {
        const { isBold, func } = this.props;
        
        return (
            <div>
                <button onClick={func}>B</button>
                <p className={isBold ? 'bold' : ''}>sad</p>
            </div>
        );
    }
}

export default Task1C;
