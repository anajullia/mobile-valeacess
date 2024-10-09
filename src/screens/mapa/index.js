import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import {css} from '../../../assets/css/Css';
import config from '../../../config/';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';

export default function Clientes({navigation}) {
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const [distance, setDistance] = useState(null);
    const mapEl = useRef(null);

    useEffect(() => {
        (async function () {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status === 'granted') {
                let location = await Location.getCurrentPositionAsync(
                    {enableHighAccuracy: true}
                );
                setOrigin(
                    {latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.00922, longitudeDelta: 0.00421}
                );
            } else {
                throw new Error('Location permission not granted');
            }
        })();
    }, []);

    return (
        <View style={css.container}>
            <MapView
                style={css.map}
                initialRegion={origin}
                showsUserLocation={true}
                zoomEnabled={true}
                loadingEnabled={true}
                ref={mapEl}>
                {
                    destination && (
                        <MapViewDirections
                            origin={origin}
                            destination={destination}
                            apikey={config.googleApi}
                            strokeWidth={5}
                            strokeColor='#a1d'
                            onReady={result => {
                                setDistance(result.distance);
                                mapEl
                                    .current
                                    .fitToCoordinates(result.coordinates, {
                                        edgePadding: {
                                            top: 50,
                                            bottom: 50,
                                            left: 50,
                                            right: 50
                                        }
                                    });
                            }}/>
                    )
                }
            </MapView>

            <View style={css.search}>
                <GooglePlacesAutocomplete
                    placeholder='Para onde vamos?'
                    onPress={(data, details = null) => {
                        const {lat, lng} = details.geometry.location; // Corrigido para extrair lat e lng
                        setDestination(
                            {latitude: lat, longitude: lng, latitudeDelta: 0.000922, longitudeDelta: 0.000421}
                        );
                    }}
                    query={{
                        key: config.googleApi,
                        language: 'pt-br'
                    }}
                    enablePoweredByContainer={false}
                    fetchDetails={true}
                    styles={{
                        textInputContainer: {
                            backgroundColor: '#FFFFFF',
                            borderRadius: 5
                        },
                        textInput: {
                            height: 38,
                            color: '#000',
                            fontSize: 16
                        },
                        predefinedPlacesDescription: {
                            color: '#1faadb'
                        },
                        listView: {
                            height: 100
                        }
                    }}/>
            </View>

            {
                distance && <Text style={css.distancia}>Distância: {distance.toFixed(2)}
                        km</Text>
            }
            {/* Mostrando distância formatada */}
        </View>
    );
}
