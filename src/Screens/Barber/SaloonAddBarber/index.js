import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import UserCartHeader from '../../../Components/UserCartHeader';
const SaloonAddBarber = ({ navigation }) => {
    return (
        <View>
            <UserCartHeader navigation={navigation} title="My Services" />
            <Text>SaloonAddBarber</Text>
        </View>
    )
}
export default SaloonAddBarber