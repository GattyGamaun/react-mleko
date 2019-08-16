import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import './_style.scss';
import { info } from '../../data/about';

function Map() {
  const [selectedChurch, setSelectedChurch] = useState(null);

  return (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: 54.057930, lng: 27.741845 }}
    >

      {info.map(item => (
        <Marker
          position={{ lat: 54.057930, lng: 27.741845 }}
          onClick={() => {
            setSelectedChurch(item);
          }}
          icon={{
            url: './church.svg',
            scaledSize: new window.google.maps.Size(50, 50),
          }}
        />
      ))
      }

      {selectedChurch && (
        <InfoWindow
          position={{ lat: 54.057930, lng: 27.741845 }}
          onCloseClick={() => {
            setSelectedChurch(null);
          }}
        >
          <div className='map-description'>
            <h2 className='map-header'>{selectedChurch.mainTitle}</h2>
            <p>{selectedChurch.description}
            </p>
          </div>
        </InfoWindow>
      )}

    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
