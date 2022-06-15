import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import axios from "axios";
import LoadingIndicator from "@department-of-veterans-affairs/formation-react/LoadingIndicator";

const FacilitiesMap = () => {
  const mapElement = useRef();
  const VA_API_KEY = process.env.REACT_APP_VA_API_KEY;
  const VA_FACILITIES_API = process.env.REACT_APP_VA_FACILITIES_API;
  const [facilities, setFacilities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState({});

  const getCoordinates = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const getLocation = async () => {
    const position = await getCoordinates();

    return {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
  };

  const addMarkers = (map, points) => {
    const markerIcon = L.divIcon({
      html: '<i class="fas fa-map-marker"></i>',
      iconSize: [20, 20],
      className: "map-marker",
    });

    points.forEach((point) => {
      const { lat, long } = point.attributes;

      L.marker([lat, long], { icon: markerIcon }).addTo(map);
    });
  };

  const fetchFacilities = (coordinates) => {
    const { lat, lng } = coordinates;

    axios
      .get(VA_FACILITIES_API, {
        headers: {
          apiKey: VA_API_KEY,
        },
        params: {
          lat,
          long: lng,
          type: "health",
        },
      })
      .then((response) => {
        let data;

        if (response.status === 200) {
          data = response.data.data;
        }

        return data;
      })
      .then((data) => {
        addMarkers(mapElement.current, data);
        setFacilities(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data.", error);
      });
  };

  useEffect(() => {
    getLocation()
      .then((data) => {
        setLocation(data);
        mapElement.current = L.map("map", {
          center: [data.lat, data.lng],
          zoom: 10,
          layers: [
            L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
              attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            }),
          ],
        });

        fetchFacilities(data);
      })
      .catch((error) => {
        console.log("Error creating map", error);
      });
  }, []);

  return (
    <div>
      {location && <section id="map" />}
      <section className="facilities-details">
        {isLoading && (
          <LoadingIndicator message="Fetching nearest facilities..." />
        )}
        <ul className="facilities-details">
          {facilities.map((facility) => {
            const { name, address, phone } = facility.attributes;
            return (
              <li className="facility" key={facility.id}>
                <section className="facility-data">
                  <h4>{name}</h4>
                  <p>{address.physical.address_1}</p>
                  <p>{`${address.physical.city} ${address.physical.state} ${address.physical.zip}`}</p>
                  <p>
                    <a href={`tel:${phone.main}`}>{`Main: ${phone.main}`}</a>
                  </p>
                  <p>
                    <a
                      href={`tel:${phone.after_hours}`}
                    >{`After Hours: ${phone.after_hours}`}</a>
                  </p>
                </section>
                <a className="directions" href="https://maps.google.com/">
                  <p>Directions</p>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default FacilitiesMap;
