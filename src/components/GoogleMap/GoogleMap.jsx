import React from "react";
import GoogleMap from "google-map-react";

const AnyReactComponent = ({ title }) => <div>{title}</div>;
function GoogleMaps({ lat, lng, propertyTitle, propertyCurrency, propertyPrice }) {
  return (
    <div style={{ height: '40rem', width: "100%" }}>
      <GoogleMap
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={{ lat: -33.879763, lng: -58.418557 }}
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} title={propertyTitle} />
      </GoogleMap>
    </div>
  );
}

export default GoogleMaps;
