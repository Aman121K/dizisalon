import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import UserSubComponent from '../../../Components/UserSubComponent';
const AppVersion=({navigation})=>{
    return(
        <SafeAreaView>
            <UserSubComponent navigation={navigation} titel="App Version"/>
            <Text>AppVersion</Text>
        </SafeAreaView>
    )
}
export default AppVersion;