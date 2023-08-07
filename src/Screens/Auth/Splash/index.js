import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import AuthHeader from "../../../Components/AuthHeader";
import { Images } from "../../../Constant/Images";
import { TextConstant } from "../../../Constant/TextConstant";
import { scaleHeight, scaleWidth } from "../../../Constant/DynamicSize";
const styles = StyleSheet.create({
    mainConatiner: {
    },
    splashLogo: {
        marginHorizontal: scaleWidth(106),
        marginTop: scaleHeight(127),
        alignSelf:'center'
    },
    splashText: {
        marginHorizontal: scaleWidth(75),
        marginTop: scaleHeight(32)
    }
})
const Splash = ({ navigation }) => {
    React.useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Welcome')
        }, 3000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <SafeAreaView>
            <StatusBar backgroundColor='#E7EEFA' barStyle="light-content" />
            <AuthHeader />
            <Image source={Images.Splash_logo} style={styles.splashLogo} />
            <Text style={styles.splashText}>{TextConstant.SplashText}</Text>
        </SafeAreaView>
    )
}
export default Splash;