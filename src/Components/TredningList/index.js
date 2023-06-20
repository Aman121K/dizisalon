import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Images } from "../../Constant/Images";
import { TextConstant } from "../../Constant/TextConstant";
import { normalize, scaleHeight, scaleWidth } from "../../Constant/DynamicSize";
import { FONTS } from "../../Constant/fonts";
const style = StyleSheet.create({
    mainConatiner: {
        // marginHorizontal: scaleWidth(16),
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: scaleHeight(5),
        borderRadius: scaleHeight(5),
        marginTop: scaleHeight(5)
    },
    titleConatiner: {
        marginLeft: scaleWidth(5)
    },
    titleText: {
        fontSize: normalize(16),
        fontFamily: FONTS.MontserratMedium,
        lineHeight: scaleHeight(20)
    },
    subtitleText: {
        fontSize: normalize(10)
    }

})
const TrendingLists = ({onClick}) => {
    return (
        <TouchableOpacity style={style.mainConatiner} onPress={onClick}>
            <Image source={Images.CHOTI_DESIGN} />
            <View style={style.titleConatiner}>
                <Text style={style.titleText}>{TextConstant.CHOTI_Title}</Text>
                <Text style={style.subtitleText}>{TextConstant.CHOTI_Title} {TextConstant.CHOTI_Title} {TextConstant.CHOTI_Title} </Text>
                <Text>{Date()}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default TrendingLists;