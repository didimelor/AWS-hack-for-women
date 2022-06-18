import { createMap } from "maplibre-gl-js-amplify";
import "maplibre-gl/dist/maplibre-gl.css";
import "maplibre-gl-js-amplify/dist/public/amplify-map.css";


function Map() {

  /*function getLocation() {
    let _lat = null, _lon = null;
    if (navigator.geolocation) {
      [_lat, _lon] = navigator.geolocation.getCurrentPosition(showPosition);
      return [_lat, _lon];
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude; 
    console.log(lat);
    console.log(lon);

    return [lat, lon];
  }*/

  //let [longitude, latitude] = getLocation();

  const map = createMap({ 
    container: "mapaViaje",
    center: [-99.1351514, 19.2834515], // [Longitude, Latitude]
    zoom: 15,
  })

}

export default Map;