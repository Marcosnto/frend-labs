import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

function Maps({ location }) {
  let center = {
    lat: -3.745,
    lng: -38.523,
  };

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  if (location !== undefined) {
    center.lat = parseFloat(location.lat);
    center.lng = parseFloat(location.lng);
    console.log(center);
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyAt1OZr8cZurOSzbIk8xvUxyikSkvvRThE">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      ></GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Maps);
