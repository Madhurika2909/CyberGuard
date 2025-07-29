import L from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect } from "react";

const CyberMap: React.FC = () => {
  useEffect(() => {
    const map = L.map("map").setView([20, 0], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    fetch("/data/geojson/file.geojson")
      .then((res) => res.json())
      .then((geojson) => {
        const geojsonLayer = L.geoJSON(geojson, {
          onEachFeature: (feature, layer) => {
            layer.on("mouseover", () => {
              const cyberRate = feature.properties.cyberRate;
              layer.bindPopup(`Cyber Rate: ${cyberRate}%`).openPopup();
            });
            layer.on("mouseout", () => {
              layer.closePopup();
            });
          },
        });
        geojsonLayer.addTo(map);
      });
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Cybercrime Risk Map</h2>
      <div id="map" className="w-full h-[600px] bg-gray-200"></div>
    </div>
  );
};

export default CyberMap;