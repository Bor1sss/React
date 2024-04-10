import React, { Component } from 'react';
import Gallery from "../gallery/Gallery";
let city="Odessa";
let country="Ukraine";
let year = 1794;
class CityComp extends Component {
    render() {
        return (
            <div>
            <h2>Hello i am Component</h2>
            <h2> {city}, {country}</h2>
            <p>year {year}</p>
            <Gallery img={"https://www.shutterstock.com/image-photo/city-birdseye-view-roofs-odessa-600nw-1095160982.jpg"} />

        </div>
        );
    }
}

export default CityComp;
