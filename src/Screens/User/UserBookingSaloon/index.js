import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import UserSubComponent from '../../../Components/UserSubComponent';
const UserBookingSaloon=({navigation})=>{
    return(
        <SafeAreaView>
            <UserSubComponent navigation={navigation} titel=""/>
            <Text>UserBookingSaloon</Text>
        </SafeAreaView>
    )
}
export default UserBookingSaloon;