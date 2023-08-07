import React from "react";
import { Text, View } from 'react-native';
import UserCartHeader from "../../../Components/UserCartHeader";
const SaloonGallery = () => {
    return (
        <View>
          <UserCartHeader navigation={navigation} title="Hair Cutting Booking" />
            <Text>Saloon Gallery</Text>
        </View>
    )
}
export default SaloonGallery;