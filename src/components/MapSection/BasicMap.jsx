import React, { useState } from "react";
import { MapContainer , TileLayer, Marker, Popup } from "react-leaflet";
import osm from "../osm/osm-provider";
import { useRef } from "react";
import "./basicMap.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css"

const markerIcon = new L.Icon({
    iconUrl: require("./mapmarker.png"),
    iconSize: [35, 35],
});

const BasicMap = () => {
  const [center, setCenter] = useState({ lat: 51.505, lng: 30.258 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();
  return (
    <div className="row">
      <div className="col text-center">
        <div className="col">
          <MapContainer  center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
            <TileLayer url={osm.maptiler.url}>
            </TileLayer>
            <Marker position={center} icon={markerIcon} > 
                <Popup>
                    <b>first popup</b>
                 </Popup> 
            </Marker>
          </MapContainer >
          </div>
        </div>
      </div>
  );
};

export default BasicMap;
