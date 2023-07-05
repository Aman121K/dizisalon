import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import UserCartHeader from '../../../Components/UserCartHeader';
const SaloonNotificationLists = ({ navigation }) => {
    return (
        <View>
            <UserCartHeader navigation={navigation} title="My Services" />
            <Text>SaloonNotificationLists </Text>
        </View>
    )
}
export default SaloonNotificationLists