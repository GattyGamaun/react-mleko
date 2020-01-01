import React from 'react';
import './_style.scss';
import WrappedMap from '../../components/GoogleMap';

function Contacts() {
  return (
    <section className='map'>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
      libraries=geometry,drawing,places&key=AIzaSyAadUiUkmwLQZd7BEYHCI3VybASpY4qHQE`}
        loadingElement={<div style={{ height: '100%' }}/>}
        containerElement={<div style={{ height: '100%' }}/>}
        mapElement={<div style={{ height: '100%' }}/>}
      />
    </section>
  );
}

export default Contacts;
