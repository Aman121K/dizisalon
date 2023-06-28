import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import UserSubComponent from '../../../Components/UserSubComponent';
const FeedBack=({navigation})=>{
    return(
        <SafeAreaView>
            <UserSubComponent navigation={navigation} titel="FeedBack"/>
            <Text>FeedBack</Text>
        </SafeAreaView>
    )
}
export default FeedBack;