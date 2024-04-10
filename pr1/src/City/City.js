import React from 'react';
import Gallery from "../gallery/Gallery";
let city="Odessa";
let country="Ukraine";
let year = 1794;


const City = () => {
    return (
        <div>
        <h2>Hello i am func</h2>
        <h2> {city}, {country}</h2>
        <p>year {year}</p>
        <Gallery img={"https://planetofhotels.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/odessa-4.jpg"} />

    </div>
    );
}

export default City;
