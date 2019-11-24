import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import MapView, { Circle } from "react-native-maps";
import { getDistance } from 'geolib';

class App extends Component {
  state = {
    _selectedZona: null,
    zones: [
        /*
        EN: If you are going to place a circle over another layer, 
        put it here in the innermost and radiused states first.
        Because of the functionality, the program will go through 
        the array, and stop at the first one it finds, so you can 
        click on the place that technically has more than one circle, 
        but the program will only return the topmost circle, the first 
        one placed in the states.


        PT-BR: Se você for colocar um circulo em cima de outro circulo, 
        coloque aqui nos estados, o mais interno e com raio menor primeiro. 
        Justamente pela funcionalidade, o programa vai percorrer o array, e parar
        no primeiro que encontrar, desta forma, poderá clicar no lugar que tecnicamente
        tem mais de um circulo, porém, o programa só retornará apenas o que tiver mais
        em cima, ou seja, o primeiro colocado nos states.
        */
       {
            _id: '1',
            radius: 1000,
            strokeWidth: 2,
            fillColor: '#FF000050',
            latitude: -12.932239,
            longitude: -38.500279,
            type: '1',
        },
        {
            _id: '2',
            radius: 1000,
            strokeWidth: 2,
            fillColor: '#FF7F0050',
            latitude: -13.010362,
            longitude: -38.533032,
            type: '2',
        },
        {
            _id: '3',
            radius: 1000,
            strokeWidth: 2,
            fillColor: '#FFFF0050',
            latitude: -13.008362,
            longitude: -38.523966,
            type: '3'
        },
        {
            _id: '4',
            radius: 1000,
            strokeWidth: 2,
            fillColor: '#FF000050',
            latitude: -12.962911,
            longitude: -38.567955,
            type: '1'
        },
        {
            _id: '5',
            radius: 2000,
            strokeWidth: 2,
            fillColor: '#FF7F0050',
            latitude: -12.962911,
            longitude: -38.567955,
            type: '2'
        },
        {
            _id: '6',
            radius: 3000,
            strokeWidth: 2,
            fillColor: '#FFFF0050',
            latitude: -12.962911,
            longitude: -38.567955,
            type: '3'
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
                const click = this.state.zones.find(zone => (distace = getDistance(
                  { latitude: coordinates.latitude, longitude: coordinates.longitude },
                  { latitude: zone.latitude, longitude: zone.longitude } 
                )) <= zone.radius);
    
                const color = click.type;
    
                if (color == '1') {
                  Alert.alert("The RED color");
                }
                if (color == '2') {
                  Alert.alert("The ORANGE color");
                }
                if (color == '3') {
                  Alert.alert("The YELLOW color");
                }
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
                          strokeColor={zone.strokeColor}
                          fillColor={zone.fillColor}
                      />
                  ))
              }
      </MapView>
          </View>
        );
    }

}
 
export default App;