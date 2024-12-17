import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Location data
const locations = [
  {
    name: "New Delhi, IN",
    coordinates: [77.102, 28.70], 
    type: "present",
  },
  {
    name: "New York, US",
    coordinates: [-74.006, 40.7128], 
    type: "present",
  },
  {
    name: "Tokyo, JP",
    coordinates: [139.6917, 35.6895], 
    type: "upcoming",
  },
  {
    name: "Paris, FR",
    coordinates: [2.3522, 48.8566],
    type: "upcoming",
  },
];

const WorldMap = () => {
  const [tooltip, setTooltip] = useState({ visible: false, name: "", type:"", x: 0, y: 0 });

  const handleMouseEnter = (event, name, type) => {
    const rect = event.currentTarget.getBoundingClientRect(); // Get SVG position
    setTooltip({
      visible: true,
      name,
      type,
      x: rect.left + rect.width / 2, // Centered horizontally
      y: rect.bottom, // Tooltip below SVG
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, name: "", type:"", x: 0, y: 0 });
  };

  return (
    <>
      <div className="relative flex justify-center w-3/4 dark:bg-gray-900 bg-gray-50">
        {/* Tooltip */}
        {tooltip.visible && (
          <div
            className="absolute z-10 px-3 py-1 dark:text-white text-black dark:bg-gray-800 bg-gray-200 rounded shadow-lg pointer-events-none"
            style={{ top: tooltip.y - 90, left: tooltip.x + 10}} // Adjust offsets as needed
          >
            {tooltip.name}<br></br>
            {tooltip.type === "present" ? "Present" : "Upcoming"}
          </div>
        )}

        <ComposableMap
          projection="geoMercator"
          viewBox="17 -5 889 600"
          projectionConfig={{ scale: 125, center: [-25,35] }}
          style={{width: "90%"}}
          className="shadow-lg rounded-lg dark:bg-gray-900 bg-gray-50"
        >
          {/* Render Geographies */}
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: { fill: "#007bff", stroke: "#000", strokeWidth: "0px" },
                    hover: { fill: "#00307d", outline: "white" },
                    pressed: { fill: "#023770", outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Render Markers */}
          {locations.map(({ name, coordinates, type }) => (
            <Marker key={name} coordinates={coordinates}>
              {/* <circle
                r={3}
                fill={type === "present" ? "#34D399" : "#F59E0B"}
                stroke="#000"
                strokeWidth={0.5}
              /> */}
              <svg
                onMouseEnter={(e) => handleMouseEnter(e, name, type)}
                onMouseLeave={handleMouseLeave}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="100 100 135.707 235.707"
                height="10px"
                width="10px"
              >
                {/* Solid background for smooth hover */}
                <rect width="100%" height="100%" fill="transparent" />
                <g>
                  <path
                    fill={type === "present" ? "#F59E0B" : "#F59E0B"}
                    d="M117.578,227.889H46.771v68.598h70.807V227.889z M97.578,276.487H66.771v-28.598h30.807V276.487z"
                  />
                  <path
                    fill={type === "present" ? "#F59E0B" : "#F59E0B"}
                    d="M203.257,227.889H132.45v68.598h70.807V227.889z M183.257,276.487H152.45v-28.598h30.807V276.487z"
                  />
                  <path
                    fill={type === "present" ? "#F59E0B" : "#F59E0B"}
                    d="M288.936,227.889h-70.807v68.598h70.807V227.889z M268.936,276.487h-30.807v-28.598h30.807V276.487z"
                  />
                  <path
                    fill={type === "present" ? "#F59E0B" : "#F59E0B"}
                    d="M291.014,188.668v-34.485h-20.095L251.356,43.785h-53.718l-19.562,110.398h-20.633l-13.467-45.603H78.44l-13.467,45.603
				H44.693v34.485H5.434v147.039h324.84V188.668H291.014z M214.406,63.785h20.183l16.018,90.398h-52.219L214.406,63.785z
				 M93.388,128.58h35.642l7.561,25.603H85.827L93.388,128.58z M64.692,174.183h206.321v14.282H64.692V174.183z M310.273,315.707
				L310.273,315.707H25.434V208.668h284.84V315.707z"
                  />
                </g>
              </svg>
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </>
  );
};

export default WorldMap;
