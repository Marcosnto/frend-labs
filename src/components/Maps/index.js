import React, { useState, useEffect } from "react";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Maps({ location }) {
  const [center, setCenter] = useState({ lat: -3.745, lng: -38.523 });

  useEffect(() => {
    if (location !== undefined) {
      setCenter({
        lat: parseFloat(location.lat),
        lng: parseFloat(location.lng),
      });
    }
  }, [location]);

  const containerStyle = {
    width: "100%",
    height: "200px",
    marginTop: "5px",
  };

  const onLoad = marker => {
    console.log("marker: ", marker);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAt1OZr8cZurOSzbIk8xvUxyikSkvvRThE">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker onLoad={onLoad} position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Maps);
