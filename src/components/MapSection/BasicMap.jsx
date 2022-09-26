import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import osm from "../osm/osm-provider";
import "./basicMap.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import NavIcons from "../NavIcons/NavIcons";
import useGeoLocation from "./useGeoLocation";
import MapBtn from "./mapBtn";

const markerIcon = new L.Icon({
  iconUrl: require("./mapMarkers/mapmarker.png"),
  iconSize: [35, 35],
});

const MyLocationIcon = new L.Icon({
  iconUrl: require("./mapMarkers/myLocationMarker.png"),
  iconSize: [35, 35],
});

const BasicMap = () => {
  const [center, setCenter] = useState({ lat: 45.21, lng: -36.58 });
  const [data, setData] = useState([]);
  const ZOOM_LEVEL = 3;
  const mapRef = useRef();

  const location = useGeoLocation();
  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      mapRef.current.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        15,
        { animate: true }
      );
    } else {
      alert(location.error.message);
    }
  };
  // data fetching

  React.useEffect(() => {
    axios("http://localhost:8000/events")
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (data.length === 0) {
    return "Loading....";
  }

  return (
    <div className="row">
      <div className="col text-center">
        <div className="col">
          <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
            <TileLayer url={osm.maptiler.url}></TileLayer>
            {data.map((val) => {
              return (
                <Marker
                  position={[val.lat ? val.lat : 20, val.lng ? val.lng : 30]}
                  icon={markerIcon}
                >
                  <Popup>
                    <a href={val.image}>{val.event}</a>
                  </Popup>
                </Marker>
              );
            })}
            {location.loaded && !location.error && (
              <Marker
                icon={MyLocationIcon}
                position={[location.coordinates.lat, location.coordinates.lng]}
              ></Marker>
            )}
          </MapContainer>
          <button className="locationBtn" onClick={showMyLocation}>
            Locate Me
          </button>
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default BasicMap;
