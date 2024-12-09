import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import FactoryCard from "./FactoryCard";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Location data
const locations = [
  {
    name: "Present Location 1",
    coordinates: [77.102, 28.70], // Delhi, India
    type: "present",
  },
  {
    name: "Present Location 2",
    coordinates: [-74.006, 40.7128], // New York, USA
    type: "present",
  },
  {
    name: "Upcoming Location 1",
    coordinates: [139.6917, 35.6895], // Tokyo, Japan
    type: "upcoming",
  },
  {
    name: "Upcoming Location 2",
    coordinates: [2.3522, 48.8566], // Paris, France
    type: "upcoming",
  },
];

const WorldMap = () => {
  return (
    <div className="flex justify-center w-[54%] bg-gray-900">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 130, center: [15, 35] }}
        rotate={true}
        className="shadow-lg rounded-lg bg-gray-900"
      >
        {/* Render Geographies */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: "#ADD8E6", stroke: "#000", strokeWidth: '0px' },
                  hover: { fill: "#0356fc", outline: "none" },
                  pressed: { fill: "#E42", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Render Markers */}
        {locations.map(({ name, coordinates, type }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle
              r={3}
              fill={type === "present" ? "#34D399" : "#F59E0B"}
              stroke="#000"
              strokeWidth={0.5}
            />
            {/* <img src="../assets/icons8-factory-32.png" fill={type === "present" ? "#34D399" : "#F59E0B"}></img> */}
            <svg fill={type === "present" ? "#34D300" : "#F59E0B"} height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 335.707 335.707" xmlSpace="preserve">
              <g id="XMLID_806_">
                <g>
                  <g>
                    <path d="M117.578,227.889H46.771v68.598h70.807V227.889z M97.578,276.487H66.771v-28.598h30.807V276.487z" />
                    <path d="M203.257,227.889H132.45v68.598h70.807V227.889z M183.257,276.487H152.45v-28.598h30.807V276.487z" />
                    <path d="M288.936,227.889h-70.807v68.598h70.807V227.889z M268.936,276.487h-30.807v-28.598h30.807V276.487z" />
                    <path d="M291.014,188.668v-34.485h-20.095L251.356,43.785h-53.718l-19.562,110.398h-20.633l-13.467-45.603H78.44l-13.467,45.603
				H44.693v34.485H5.434v147.039h324.84V188.668H291.014z M214.406,63.785h20.183l16.018,90.398h-52.219L214.406,63.785z
				 M93.388,128.58h35.642l7.561,25.603H85.827L93.388,128.58z M64.692,174.183h206.321v14.282H64.692V174.183z M310.273,315.707
				L310.273,315.707H25.434V208.668h284.84V315.707z"/>
                    <path d="M77.38,76.486c1.495,2.639,3.344,5.078,5.489,7.224c6.359,6.359,14.813,9.861,23.806,9.861
				c8.993,0,17.447-3.502,23.807-9.861c13.126-13.126,13.126-34.485,0-47.612c-2.145-2.145-4.585-3.994-7.223-5.488
				c-1.541-7.265-5.149-13.955-10.478-19.284C105.476,4.022,95.767,0,85.437,0C75.109,0,65.4,4.022,58.096,11.325
				c-7.303,7.304-11.325,17.014-11.325,27.342c0,10.329,4.022,20.039,11.325,27.342C63.426,71.337,70.116,74.945,77.38,76.486z
				 M72.239,25.467C75.765,21.941,80.452,20,85.437,20c4.986,0,9.673,1.941,13.199,5.467c3.312,3.311,5.246,7.71,5.447,12.388
				l0.297,6.913l6.574,2.158c2.044,0.671,3.855,1.786,5.382,3.313c5.329,5.329,5.329,13.999,0,19.327
				c-2.581,2.582-6.013,4.003-9.664,4.003c-3.65,0-7.083-1.422-9.664-4.003c-1.527-1.527-2.642-3.338-3.313-5.382l-2.158-6.573
				l-6.913-0.298c-4.678-0.202-9.078-2.136-12.389-5.447c-3.525-3.525-5.467-8.213-5.467-13.199
				C66.771,33.681,68.713,28.993,72.239,25.467z"/>
                  </g>
                </g>
              </g>
            </svg>
            {/* <span class="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">✨ You hover me!</span> */}
            {/* <text
              textAnchor="middle"
              y={15}
              fill={type === "present" ? "#34D399" : "#F59E0B" }
              style={{
                fontFamily: "system-ui",
                // fill: "#0F0F0F",
                fontSize: "18px",
                
              }}
            >
              {name}
            </text> */}
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
