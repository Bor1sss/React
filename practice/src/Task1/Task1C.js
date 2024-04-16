import React, { Component } from 'react';
import './Style.css';



class Task1C extends Component {

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state.Color)
      }
    
      handleCheckChange = e => {
        this.setState({ [e.target.name]: e.target.checked })
      }
    constructor(props){
  
        super(props)
        this.state = {
            isBold: false,
            isItalic: false,
            isTT: false,
            isUnder: false,
            Font:'',
            Size:12,
            Color:''

          }
    }
    render() {
        const { isBold,isItalic,isTT,isUnder, funcB,funcI,funcTT,funcU } = this.props;
        
        return (
            <div>
                    <select
                    name='Font'
                    value={this.state.Font}
                    onChange={this.handleChange}
                    >
                    <option value=''>Select City</option>
                    <option value='Arial'>Arial</option>
                    <option value='Times New Roman'>Times</option>
                    <option value='Verdana'>Verdana</option>
                    </select>
                    <select
                    name='Size'
                    value={this.state.Size}
                    onChange={this.handleChange}
                    >
                    <option value=''>Select Size</option>
                    <option value={12}>12</option>
                    <option value={24}>24</option>
                    <option value={72}>72</option>
                    </select>
                <input type='color' name='Color' onChange={this.handleChange} value={this.state.Color}></input>

                <button onClick={funcB}>B</button>
                <button onClick={funcI}>I</button>
                <button onClick={funcU}>U</button>
                <button onClick={funcTT}>TT</button>
                <br></br>
                <textarea style={{ fontFamily: this.state.Font,color: this.state.Color,fontSize: `${this.state.Size}px` }} className={`${isBold ? 'bold' : ''} ${isItalic ? 'italic' : ''}
                 ${isTT ? 'tt' : ''} ${isUnder ? 'under' : ''}`}>
                    sad
                    </textarea>
           
            </div>
        );
    }
}

export default Task1C;
