import GoogleMapReact from "google-map-react";
import { HiLocationMarker } from "react-icons/hi";

// Google Geocoding: AIzaSyBvjzj92Q7W5_U229N0g-oXzvFJnJev_xk

const MarkerLocation = () => (
  <HiLocationMarker className="text-red-500 w-6 h-6" />
);

const GoogleMaps = ({ properties }) => {
  const defaultMapParams = {
    center: {
      lat: parseInt(properties[0].geography.lat),
      lng: parseInt(properties[0].geography.lng),
    },
    zoom: 11,
  };

  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBvjzj92Q7W5_U229N0g-oXzvFJnJev_xk" }}
          defaultCenter={defaultMapParams.center}
          defaultZoom={defaultMapParams.zoom}
        >
          {properties?.map((listing, key) => (
            <MarkerLocation
              key={key}
              lat={listing.geography.lat}
              lng={listing.geography.lng}
            />
          ))}
        </GoogleMapReact>
      </div>
    </>
  );
};

export default GoogleMaps;
