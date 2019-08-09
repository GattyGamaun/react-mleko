import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './_Contacts.scss';

class Contacts extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    const mapStyle = {
      position: 'none',
      width: '100%',
      height: '500px',
    };

    const headerStyle = {
      margin: '10px 0px',
      font: 'inherit',
      color: '#000',
      'font-size': '14px',
    };

    const decriptionStyle = {
      width: '300px'
    };

    return (
      <div className='map'>
        <Map google={this.props.google}
             zoom={10}
             style={mapStyle}
             initialCenter={{
               lat: 54.017930,
               lng: 27.741845
             }}
             onClick={this.onMapClicked}>

          <Marker onClick={this.onMarkerClick}
                  title={'Храм в честь иконы Божией Матери "Млекопитательница". д. Раубичи'}
                  description={'В Раубичах очень красиво. Большое озеро с заливами и островами окружёно поросшими лесом ' +
                  'холмами, полями, старыми деревеньками и новыми посёлками. Эти места принято называть «белорусской Швейцарией».'}
                  position={{
                    lat: 54.057930,
                    lng: 27.741845
                  }} />

          <InfoWindow marker={this.state.activeMarker}
                      visible={this.state.showingInfoWindow}>
            <div style={decriptionStyle}>
              <h1 style={headerStyle}>{this.state.selectedPlace.title}</h1>
              <p>{this.state.selectedPlace.description}</p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAadUiUkmwLQZd7BEYHCI3VybASpY4qHQE')
})(Contacts)
