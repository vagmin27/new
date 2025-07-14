// src/components/MapView.jsx
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '0.5rem',
};

const center = {
    lat: 12.9716,  // Bengaluru latitude
    lng: 77.5946,  // Bengaluru longitude
};

export default function MapView() {
    const [location, setLocation] = useState(center);

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white shadow rounded-xl p-4 transition-all duration-300">
            <h2 className="text-lg font-semibold mb-2">📍 Current Location</h2>
            <div className="h-96 rounded-lg overflow-hidden">
                <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={location}
                        zoom={15}
                    >
                        <Marker position={location} />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
}
