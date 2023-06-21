import React from "react";
import { Image, StyleSheet, TextInput, View } from 'react-native';
import { Images } from "../../Constant/Images";
import { TextConstant } from "../../Constant/TextConstant";
import { normalize, scaleHeight, scaleWidth } from "../../Constant/DynamicSize";
import { FONTS } from "../../Constant/fonts";
const style = StyleSheet.create({
    mainCOatiner: {
        borderWidth: 1,
        flexDirection: 'row',
        padding: scaleHeight(8.5),
        marginHorizontal: scaleWidth(16),
        borderColor:'#FFFFFF',
        borderRadius:scaleHeight(5)
    },
    location:{
        marginLeft:scaleWidth(19.5),
        marginRight:scaleWidth(8.2)
    },
    textInput:{
        fontSize:normalize(12),
        fontFamily:FONTS.MontserratRegular,
        lineHeight:scaleHeight(14.63),
        color:'#858585'
    }
})
const LocationConatiner = () => {
    return (
        <View style={style.mainCOatiner}>
            <Image style={style.location} source={Images.LOCATION} />
            <TextInput style={style.textInput} placeholder={TextConstant.LOCATION} />
        </View>
    )
}
export default LocationConatiner;