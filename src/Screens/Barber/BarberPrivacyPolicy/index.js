import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import UserSubComponent from '../../../Components/UserSubComponent';
import { TextConstant } from '../../../Constant/TextConstant';
import { normalize, scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import { FONTS } from '../../../Constant/fonts';
const style = StyleSheet.create({
    subConatiner: {
        marginHorizontal: scaleWidth(1)
    },
    mainConatiner: {
        flex: 1
    },
    authText: {
        fontFamily: FONTS.MontserratSemiBold,
        marginHorizontal: scaleHeight(15),
        fontSize: normalize(20)
    },
    subText: {
        fontSize: normalize(13),
        color: '#818181',
        fontFamily: FONTS.MontserratRegular,
        margin: scaleHeight(15)
    }
})
const BarberPrivacyPolicy = ({ navigation }) => {
    return (
        <SafeAreaView style={style.mainConatiner}>
            <UserSubComponent titel={TextConstant.PRIVACY_POLICY} navigation={navigation} />
            <ScrollView style={style.subConatiner}>
                <View>
                    <Text style={style.subText}>Lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                </View>
                <View>
                    <Text style={style.authText}>{TextConstant.AUTH_USER}</Text>
                    <Text style={style.subText}> Lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default BarberPrivacyPolicy;