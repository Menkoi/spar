import React from 'react';
import {MapContainer, TileLayer, Marker} from 'react-leaflet';


function SparMaps() {
  
  //Api key
  const access_token = process.env.REACT_APP_ACCESS_TOKEN;

  // ATL, GA
  const position = [33.7490, -84.3880]

    return (
      <div class="leaflet-container">
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url={`https://api.mapbox.com/styles/v1/celaeon/cl1t8e65i001614rqfbqvb9de/tiles/256/{z}/{x}/{y}@2x?access_token=${access_token}`}
          />
          <Marker position={position}></Marker>
        </MapContainer>
      </div>
    );
}

export default SparMaps;