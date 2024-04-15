import React, { Component } from 'react';
import './Style.css';



class Task1C extends Component {
    constructor(props){
        super(props)
        
    }
    render() {
        const { isBold,isItalic,isTT,isUnder, funcB,funcI,funcTT,funcU } = this.props;
        
        return (
            <div>
                
                <button onClick={funcB}>B</button>
                <button onClick={funcI}>I</button>
                <button onClick={funcU}>U</button>
                <button onClick={funcTT}>TT</button>
                <textarea className={`${isBold ? 'bold' : ''} ${isItalic ? 'italic' : ''} ${isTT ? 'tt' : ''} ${isUnder ? 'under' : ''}`}>sad</textarea>
           
            </div>
        );
    }
}

export default Task1C;
