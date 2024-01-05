import GoogleMapReact from "google-map-react";
import { HiLocationMarker } from "react-icons/hi";

// Google Geocoding: AIzaSyBvjzj92Q7W5_U229N0g-oXzvFJnJev_xk

const GoogleMaps = ({ properties }) => {
  const landscapeColor = "#DEF8ED";
  const arterialColor = "#8AE5C0";
  const highwayColor = "#8AE5C0";

  const defaultMapParams = {
    center: {
      lat: properties.length > 0 ? parseInt(properties[0].geography.lat) : null,
      lng: properties.length > 0 ? parseInt(properties[0].geography.lng) : null,
    },
    zoom: 10,
  };

  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBvjzj92Q7W5_U229N0g-oXzvFJnJev_xk" }}
          defaultCenter={defaultMapParams.center}
          defaultZoom={defaultMapParams.zoom}
          options={{
            // Customize map styles here
            styles: [
              {
                featureType: "landscape",
                elementType: "geometry.fill",
                stylers: [
                  { color: landscapeColor }, // Change water color
                ],
              },

              {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{ color: arterialColor }],
              },

              {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: highwayColor }],
              },

              // Add more style customizations as needed
            ],
          }}
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

const MarkerLocation = () => (
  <HiLocationMarker className="text-red-600 w-6 h-6" />
);

export default GoogleMaps;
