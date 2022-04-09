import React, {useState} from "react";
import ReactMapGL from 'react-map-gl'



function SparMap() {

    const mapToken = process.env.REACT_APP_MAPBOX_TOKEN

    const [viewport, setViewport ] = useState({
        latitude: 33.753746,
        longitude: -84.386330,
        zoom: 10,
    });
    
    return (
        <div class='SparMap'>
            <ReactMapGL 
            mapStyle={'mapbox://styles/menkoi/cl1s6xsdz000a14m7yftr0z6z'}
            mapboxAccessToken={mapToken}
        {...viewport} 
        onViewportChange={(viewport) => {
            setViewport(viewport);
        }}>
            TEST
        </ReactMapGL>
        </div>
    )
}

export default SparMap;