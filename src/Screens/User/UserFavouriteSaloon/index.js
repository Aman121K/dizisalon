import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import UserSubComponent from '../../../Components/UserSubComponent';
const UserFavouriteSaloon = ({navigation}) => {
    return (
        <SafeAreaView>
            <UserSubComponent navigation={navigation} titel="Favourite Salon"/>
            <Text>UserFavouriteSaloon</Text>
        </SafeAreaView>
    )
}
export default UserFavouriteSaloon;