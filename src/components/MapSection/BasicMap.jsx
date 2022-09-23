import React, { useState } from "react";
import { MapContainer , TileLayer, Marker, Popup } from "react-leaflet";
import osm from "../osm/osm-provider";
import { useRef } from "react";
import "./basicMap.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css"
import axios from "axios";
import NavIcons from "../NavIcons/NavIcons";

const markerIcon = new L.Icon({
    iconUrl: require("./mapmarker.png"),
    iconSize: [35, 35],
});

const BasicMap = () => {
  const [center, setCenter] = useState({ lat: 45.21, lng: -36.58 });
  const[data,setData] = useState([]);
  const ZOOM_LEVEL = 3;
  const mapRef = useRef();

// data fetching
    
React.useEffect(()=>{
  axios("http://localhost:8000/events").then(data=>{
    setData(data.data)
  }).catch((err)=>{
    console.log(err)
  });

},[])

if(data.length === 0){
  return "Loading...."
}

  return (
   
    <div className="row"> 
   
      <div className="col text-center">
        <div className="col">
      
          <MapContainer  center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
            <TileLayer url={osm.maptiler.url}>
            </TileLayer>
            {
              data.map(val=>{
                return(
                  <Marker position={[val.lat?val.lat:20,val.lng?val.lng:30]} icon={markerIcon} > 
                  <Popup>
                      <b>{val.event?val.event:"happy"}</b>
                   </Popup> 
                   
              </Marker>
              
                );
              })
            }
          
          </MapContainer >
            <NavIcons />
          </div>
        </div>
      </div>
  );
};

export default BasicMap;
