import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Images } from '../../Constant/Images';
import { TextConstant } from '../../Constant/TextConstant';
import { normalize, scaleHeight, scaleWidth } from '../../Constant/DynamicSize';
import { FONTS } from '../../Constant/fonts';
const style = StyleSheet.create({
    mainConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: scaleWidth(16),
        marginTop: scaleHeight(10)

    },
    galleryConatiner: {
        backgroundColor: '#022A6D',
        padding: scaleHeight(5),
        borderRadius: scaleHeight(5)
    },
    galleryText: {
        color: 'white',
        fontSize: normalize(12),
        fontFamily: FONTS.MontserratRegular
    },
    bgStyle: {
        height: scaleHeight(300),
        width: '100%'
    }
})
const UserSaloonDetailsHeader = ({ galleryDesign, navigation }) => {
    return (
        <ImageBackground source={Images.SaloonBgGallery} style={style.bgStyle}>
            <View style={style.mainConatiner}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={Images.BGBack} />
                </TouchableOpacity>
                <TouchableOpacity onPress={galleryDesign} style={style.galleryConatiner}>
                    <Text style={style.galleryText}>{TextConstant.Gallery}</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
export default UserSaloonDetailsHeader;