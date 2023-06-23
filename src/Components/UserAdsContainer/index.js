import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { TextConstant } from '../../Constant/TextConstant';
import { Images } from '../../Constant/Images';
import { normalize, scaleHeight, scaleWidth } from '../../Constant/DynamicSize';
import { FONTS } from '../../Constant/fonts';
const style = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#C8C8C8',
        marginHorizontal: scaleWidth(16),
        borderRadius: scaleWidth(10),
        flexDirection: 'row',
        paddingTop: scaleHeight(10),
        paddingLeft:scaleWidth(15),
        alignItems: 'center'
    },
    textStyle: {
        width: scaleWidth(200),
        fontSize:normalize(16),
        color:'white',
        fontFamily:FONTS.MontserratRegular
    }
})
const UserAdsContainer = () => {
    return (
        <View style={style.mainContainer}>
            <Text style={style.textStyle}>{TextConstant.USER_ADS_TEXT}</Text>
            <Image source={Images.USERS_ADS} />
        </View>
    )
}
export default UserAdsContainer;