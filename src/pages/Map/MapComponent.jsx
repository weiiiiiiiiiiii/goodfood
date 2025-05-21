import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  return (
    <div className="w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer center={[25.024377585879215, 121.54677998700183]} zoom={20} scrollWheelZoom={true} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[25.024377585879215, 121.54677998700183]}>
          <Popup>好食 Breakfast 位置</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}