import React, { Component } from "react";
import { Circle, Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

class LeafletMap extends Component {
  state = {
    center: [43.004026, -81.277001]
  };
  render() {
    return (
      <Map
        className=".leaflet-container"
        id="mapid"
        center={[43.0, -81.27]}
        zoom={7}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />

        <Circle
          center={[43.0, -81.27]}
          color="red"
          fillColor="red"
          radius={40000}
        />
        <Circle
          center={[43.0, -81.27]}
          color="red"
          fillColor="red"
          radius={40000}
        />
        <Circle
          center={[43.0, -81.27]}
          color="red"
          fillColor="red"
          radius={40000}
        />
        <Circle
          center={[43.0, -81.27]}
          color="red"
          fillColor="red"
          radius={40000}
        />
        <Circle
          center={[43.0, -81.27]}
          color="red"
          fillColor="red"
          radius={40000}
        />
      </Map>
    );
  }
}

export default LeafletMap;
