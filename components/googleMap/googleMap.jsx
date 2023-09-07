import GoogleMapReact from "google-map-react";
import { HiLocationMarker } from "react-icons/hi";

// Google Geocoding: AIzaSyBvjzj92Q7W5_U229N0g-oXzvFJnJev_xk

const MarkerLocation = () => (
  <HiLocationMarker className="text-red-500 w-6 h-6" />
);

const GoogleMaps = ({ listingforSale }) => {
  const defaultMapParams = {
    center: {
      lat: 25.276987,
      lng: 55.296249,
    },
    zoom: 9,
  };

  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBvjzj92Q7W5_U229N0g-oXzvFJnJev_xk" }}
          defaultCenter={defaultMapParams.center}
          defaultZoom={defaultMapParams.zoom}
        >
          {listingforSale?.map((listing, key) => (
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
