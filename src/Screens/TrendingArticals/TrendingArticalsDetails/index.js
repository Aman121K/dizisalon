import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import AuthHeader from '../../../Components/AuthHeader';
const TrendingDetails = ({navigation}) => {
    return (
        <SafeAreaView>
            <AuthHeader backbutton={true} navigation={navigation} />
            {/* <Text> TrendingDetails</Text> */}
        </SafeAreaView>
    )
}
export default TrendingDetails;