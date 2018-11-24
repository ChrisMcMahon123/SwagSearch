import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

class LeafletMap extends Component {
  render() {
    return (
      <Map
        className=".leaflet-container"
        id="mapid"
        center={[51.505, -0.09]}
        zoom={13}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
      </Map>
    );
  }
}

export default LeafletMap;
