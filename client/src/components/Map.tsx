import { FC, useRef } from "react";
import { CircleMarker, MapContainer, TileLayer, Tooltip } from "react-leaflet";

const Map: FC = () => {
	const mapRef = useRef(null);
	const coords: { lat: number; lon: number } = {
		lat: -1.1018,
		lon: 37.0144,
	};

	return (
		<MapContainer
			center={[coords.lat, coords.lon]}
			zoom={15}
			scrollWheelZoom={false}
			ref={mapRef}
			style={{ height: "100%", width: "100%" }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<CircleMarker
				center={[coords.lat, coords.lon]}
				pathOptions={{ color: "#cccc00" }}
			></CircleMarker>
		</MapContainer>
	);
};

export default Map;
