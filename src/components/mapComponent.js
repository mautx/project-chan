import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {MarkerF} from '@react-google-maps/api'

const businessLocation = {
    lat: 19.498480639871463,
    lng: -99.22631157884375
};
const MapComponent = () => {
    const mapStyles = {
        height: '70vh',
        width: '70vh',
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyDNskcEVAXjx0yUxqPkh1gdm4rz0nJE6v0">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={16}
                center={businessLocation} // Utiliza las coordenadas de tu negocio aquí
            >
                <MarkerF position={businessLocation}></MarkerF> {/* Agrega un marcador en la ubicación */}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent