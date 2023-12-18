import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import UserCartHeader from '../../../Components/UserCartHeader';
import UserSubComponent from '../../../Components/UserSubComponent';
const SaloonAddServices = ({ navigation }) => {
    return (
        <SafeAreaView>
            <UserSubComponent navigation={navigation} titel="My Services" />
        </SafeAreaView>
    )
}
export default SaloonAddServices