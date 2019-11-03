import React, { Component } from 'react';
import { View } from 'react-native';
import MapView, { Circle } from "react-native-maps";
import { getDistance } from 'geolib';

class App extends Component {
  state = {
    _selectedZona: null,
    zones: [
       {
            _id: '1',
            radius: 1000,
            strokeWidth: 2,
            latitude: -12.932239,
            longitude: -38.500279
        },
        {
            _id: '2',
            radius: 1000,
            strokeWidth: 2,
            latitude: -13.010362,
            longitude: -38.533032
        },
        {
            _id: '3',
            radius: 1000,
            strokeWidth: 2,
            latitude: -13.008362,
            longitude: -38.523966
        },
        {
            _id: '4',
            radius: 1000,
            strokeWidth: 2,
            latitude: -12.929870,
            longitude: -38.513615
        }
    ]
}

    render() {
        return (
            <View style={{ flex: 1 }}>
            <MapView
              ref={component => this._mapView = component}
              style={{ flex: 1 }}
              region={{
                  latitude: -13.010362,
                  longitude: -38.533032,
                  latitudeDelta: 0.2, 
                  longitudeDelta: 0.2,
              }}
              onPress={(event) => {
                  const coordinates = event.nativeEvent.coordinate;
                  this.state.zones.map(zone => {
                      const distance = getDistance(
                          { latitude: coordinates.latitude, longitude: coordinates.longitude },
                          { latitude: zone.latitude, longitude: zone.longitude }
                      );
          
                      if (distance <= zone.radius) {
                          this.setState({
                              _selectedZona: zone._id
                          })
                      }
                  })
              }}
          >
              {this.state.zones.map(zone => (
                      <Circle  
                          key={zone._id}
                          center={{
                              latitude: zone.latitude,
                              longitude: zone.longitude,
                          }}
                          radius={zone.radius}
                          strokeWidth={zone.strokeWidth}
                          strokeColor={ this.state._selectedZona == zone._id ? '#D63031' : '#4C4B5C'}
                          fillColor={ this.state._selectedZona == zone._id ? 'rgba(255, 118, 117, 0.62)' : 'rgba(76,75,92,0.34)'}
                      />
                  ))
              }
      </MapView>
          </View>
        );
    }

}
 
export default App;