import React, { Component } from 'react';
import "./Gallery.css"
class Gallery extends Component {


    render() {
        const { img } = this.props;
        return (
         
            <div className='imgBlock'>
                 <h1>IMG</h1>
                <img src={img} alt='Odessa'></img>
            </div>
        );
    }
}

export default Gallery;
