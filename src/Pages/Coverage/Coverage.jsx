import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenter = useLoaderData();
  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();

    const location = e.target.location.value;
    const district = serviceCenter.find((c) => {
        return(c.district.toLowerCase().includes(location.toLowerCase()));
    })

    if(district) {
        const coord = [district.latitude, district.longitude];
        // go to location
        mapRef.current.flyTo(coord, 14)
    }
  }

  return (
    <div className="px-9 py-9 pb-15">
      <h2 className="text-5xl py-3">We are available in 64 districts</h2>

      {/* search */}
      <div>
        <form onSubmit={handleSearch}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="grow" placeholder="Search" name="location" />
          </label>
        </form>
      </div>

      {/* Map section */}
      <div className="h-[800px] py-9">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="h-[800px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenter.map((i, index) => {
            return (
              <Marker position={[i.latitude, i.longitude]} key={index}>
                <Popup>
                  <strong>
                    {i.district} <br />
                    Service Area: {i.covered_area.join(", ")}
                  </strong>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
