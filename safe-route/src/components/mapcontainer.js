import { React, useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { currentLocIcon } from './icons/loc-icon';
import Recenter from './recenter';

const MapCont = ({ lat, lng }) => {

  const { coords, setCoords } = useState([lat, lng]);

  

  return (
    <MapContainer center={[lat, lng]} zoom={12} style={{ width: "100%", height: "100vh" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={currentLocIcon}></Marker>
      <Recenter lat={lat} lng={lng}></Recenter>
    </MapContainer>
  );
}

export default MapCont;