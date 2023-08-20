import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { TextConstant } from '../../Constant/TextConstant';
import { Images } from '../../Constant/Images';
import { normalize, scaleHeight, scaleWidth } from '../../Constant/DynamicSize';
import { FONTS } from '../../Constant/fonts';
import { Routes } from '../../Constant/Routes';
const style = StyleSheet.create({
    mainConatiner: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: scaleWidth(16) },
    detectImageStyle: {
        alignSelf: 'center',
        marginLeft: scaleWidth(50)
    },
    mainSubConatiner: {
        marginHorizontal: scaleWidth(16)
    },
    title: {
        fontSize: normalize(16),
        fontFamily: FONTS.MontserratSemiBold
    },
    subTitle: {
        fontSize: normalize(12),
        fontFamily: FONTS.MontserratRegular
    },
    detectext: {
        textAlign: 'center',
        color: 'white',
        fontFamily: FONTS.MontserratSemiBold,
        fontSize: normalize(16)
    },
    maualText: {
        textAlign: 'center',
        fontFamily: FONTS.MontserratSemiBold,
        fontSize: normalize(16)
    },
    locationButt: {
        backgroundColor: '#022A6D',
        padding: Platform.OS === 'ios' ? scaleHeight(10) : scaleHeight(10),
        marginTop: scaleHeight(30),
        borderRadius: scaleHeight(10)
    },
    locationWhiteButt: {
        backgroundColor: 'white',
        padding: Platform.OS === 'ios' ? scaleHeight(10) : scaleHeight(10),
        marginTop: scaleHeight(10),
        borderWidth: 1,
        borderRadius: scaleHeight(10),
    },
    textsStyle: {
        marginTop: scaleHeight(10)
    }

})
const LocationBottomSheet = ({ cancelButtonClick,navigation,getOnlineLocationData }) => {
    return (
        <ScrollView >
            <View style={style.mainSubConatiner}>
                <View style={style.mainConatiner}>
                    <TouchableOpacity >
                        <Image source={Images.LOCATION_DETECT} style={style.detectImageStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>cancelButtonClick()}>
                        <Image source={Images.CROSS_ICONS} />
                    </TouchableOpacity>
                </View>
                <View style={style.textsStyle}>
                    <Text style={style.title}>{TextConstant.LOCATION_TITLE}</Text>
                    <Text style={style.subTitle}>{TextConstant.LOCATION_SUB_TITLE}</Text>
                </View>
                <TouchableOpacity style={style.locationButt} onPress={getOnlineLocationData}>
                    <Text style={style.detectext}>{TextConstant.DETECT_LOCATION}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.locationWhiteButt} onPress={()=>navigation.navigate(Routes.UserLocationMap)}>
                    <Text style={style.maualText}>{TextConstant.LOCATION_MANUALLY}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default LocationBottomSheet;