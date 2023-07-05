import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import UserCartHeader from '../../../Components/UserCartHeader';
const SaloonNotification = ({ navigation }) => {
    return (
        <View>
            <UserCartHeader navigation={navigation} title="My Services" />
            <Text>SaloonNotification </Text>
        </View>
    )
}
export default SaloonNotification