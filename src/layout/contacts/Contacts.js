import React, { Component } from 'react';
import './Contacts.scss';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Contacts extends Component {
  render() {
    return (
      <div className="foot-section contacts">
        <Map google={this.props.google} zoom={14}>

          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            {/*<div>*/}
            {/*  <h1>{this.state.selectedPlace.name}</h1>*/}
            {/*</div>*/}
          </InfoWindow>
        </Map>
      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAadUiUkmwLQZd7BEYHCI3VybASpY4qHQE')
})(Contacts)
