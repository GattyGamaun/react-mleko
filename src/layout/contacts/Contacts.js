import React from 'react';
import './_Contacts.scss';
import WrappedMap from '../../components/GoogleMap';

function Contacts() {
  // TODO move key to env.local
  return (
    <section className='map'>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
      libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: '100%' }}/>}
        containerElement={<div style={{ height: '100%' }}/>}
        mapElement={<div style={{ height: '100%' }}/>}
      />
    </section>
  );
}

export default Contacts;
