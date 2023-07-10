import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import UserCartHeader from '../../../Components/UserCartHeader';
const SaloonNotificationLists = ({ navigation }) => {
    return (
        <SafeAreaView>
            <UserCartHeader navigation={navigation} title="" />
            <Text>SaloonNotificationLists </Text>
        </SafeAreaView>
    )
}
export default SaloonNotificationLists