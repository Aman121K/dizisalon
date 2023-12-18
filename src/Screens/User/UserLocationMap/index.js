import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker } from 'react-native-maps';
import { normalize, scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import { FONTS } from '../../../Constant/fonts';
import { Routes } from '../../../Constant/Routes';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    ContinueButton: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: scaleHeight(30),
        padding: scaleHeight(10),
        backgroundColor: '#022A6D',
        borderRadius: scaleWidth(10),
        alignSelf: 'center'
    },
    ContinueText: {
        fontSize: normalize(18),
        fontFamily: FONTS.MontserratMedium,
        color: 'white',
        marginHorizontal: scaleWidth(105)

    }

});
const UserLocationMap = ({ navigation }) => {
    const [userLocation, setUSerLocation] = React.useState({
        latitude: 28.504504504504503,
        longitude: 77.0724878020635,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04,
    })
    useLayoutEffect(() => {
        Geolocation.getCurrentPosition(info => console.log(info?.coords));
    }, [])
    return (
        <View>
            <MapView
                region={userLocation}
                showsMyLocationButton={true}
                showsUserLocation={true}
                style={styles.map}

            >
                <TouchableOpacity style={styles.ContinueButton} onPress={() => navigation.navigate('UserBottomNavigtion')}>
                    <Text style={styles.ContinueText}>Continue</Text>
                </TouchableOpacity>
                <Marker
                    //   key={index}
                    coordinate={userLocation}
                    title="abc"
                    description="sallon"
                />

                {/* <View>
                    <Text>Vikas sleevy</Text>
                </View> */}
            </MapView>
        </View >
    )
}
export default UserLocationMap;