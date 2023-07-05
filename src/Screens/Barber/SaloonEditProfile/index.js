import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import UserCartHeader from '../../../Components/UserCartHeader';
const SaloonEditProfile = ({ navigation }) => {
    return (
        <View>
            <UserCartHeader navigation={navigation} title="My Services" />
            <Text>SaloonEditProfile </Text>
        </View>
    )
}
export default SaloonEditProfile