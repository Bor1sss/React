import React, { Component } from 'react';
import './Style.css'
class Photo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blur:0,
            brightness:100,
            contrast:100,
            grayscale:0,
            hue_rotate:0,
            invert:0,
            opacity:100,
            saturate:100,
            sepia:0,
            photo: null,
  
  
      }
    }


    
    handleChange = e => {


        this.setState({ [e.target.name]: e.target.value })
      }
      handleChangePhoto = e => {
        this.setState({
          photo: e.target.files[0]
        })};

    render() {
        return (
        <div>
            <div className='bigWrap'>
                <div className='Photo'>
                <form>
                {this.state.photo && 
                <img src={URL.createObjectURL(this.state.photo)} alt="Preview"
                style={{ 
                    filter: `
                        blur(${this.state.blur}px)
                        brightness(${this.state.brightness}%)
                        contrast(${this.state.contrast}%)
                        grayscale(${this.state.grayscale}%)
                        hue-rotate(${this.state.hue_rotate}deg)
                        invert(${this.state.invert}%)
                        opacity(${this.state.opacity}%)
                        saturate(${this.state.saturate}%)
                        sepia(${this.state.sepia}%)
                    ` 
            
            
             }}/>}    
                <input type="file" onChange={this.handleChangePhoto} />
     
                </form>
                </div>

                <div className='wrap'>
                    <div className="slider-container">
                    <div>
                    <input name='blur' type='range' onChange={this.handleChange} min="0" max="10" value={this.state.blur}></input>
                    <span>blur {this.state.blur}</span>
                    </div>
                    <div>
                    <input name='brightness' type='range' onChange={this.handleChange} min="0" max="200" value={this.state.brightness}></input>
                    <span>brightness {this.state.brightness}</span>
                    </div>

                    <div>
                    <input name='grayscale' type='range' onChange={this.handleChange} min="0" max="100" value={this.state.grayscale}></input>
                    <span>grayscale {this.state.grayscale}</span>
                    </div>

                    
                    <div>
                    <input name='hue_rotate' type='range' onChange={this.handleChange} min="0" max="270" value={this.state.hue_rotate}></input>
                    <span>hue_rotate {this.state.hue_rotate}</span>
                    </div>


                    <div>
                    <input name='contrast' type='range' onChange={this.handleChange} min="0" max="400" value={this.state.contrast}></input>
                    <span>grayscale {this.state.contrast}</span>
                    </div>


                    <div>
                    <input name='invert' type='range' onChange={this.handleChange} min="0" max="10" value={this.state.invert}></input>
                    <span>invert {this.state.invert}</span>
                    </div>


                    <div>
                    <input name='opacity' type='range' onChange={this.handleChange} min="0" max="100" value={this.state.opacity}></input>
                    <span>opacity {this.state.opacity}</span>
                    </div>



                    <div>
                    <input name='saturate' type='range' onChange={this.handleChange} min="0" max="200" value={this.state.saturate}></input>
                    <span>saturate {this.state.saturate}</span>
                    </div>


                
                    <div>
                    <input name='sepia' type='range' onChange={this.handleChange} min="0" max="100" value={this.state.sepia}></input>
                    <span>sepia {this.state.sepia}</span>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Photo;
