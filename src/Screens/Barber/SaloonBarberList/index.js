import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import UserCartHeader from '../../../Components/UserCartHeader';
const SaloonBarberList = ({ navigation }) => {
    return (
        <SafeAreaView>
            <UserCartHeader navigation={navigation} title="My Barbers" />
            <Text>SaloonNotificationLists </Text>
        </SafeAreaView>
    )
}
export default SaloonBarberList