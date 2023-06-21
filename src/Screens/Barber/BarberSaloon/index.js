import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';
import AuthHeader from "../../../Components/AuthHeader";
import { scaleHeight } from "../../../Constant/DynamicSize";
const style = StyleSheet.create({
    conatiner: {
        marginTop: scaleHeight(40)
    }
})
const BarberSaloon = () => {
    return (
        <SafeAreaView>
            <AuthHeader />
            <View style={style.conatiner}>
                <Text>My Saloong page</Text>
            </View>
        </SafeAreaView>
    )
}
export default BarberSaloon;