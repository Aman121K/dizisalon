import React from "react";
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native';
import { TextConstant } from "../../Constant/TextConstant";
import { scaleHeight, scaleWidth } from "../../Constant/DynamicSize";
import { FONTS } from "../../Constant/fonts";
const style=StyleSheet.create({
    mainConatiner:{
        marginHorizontal:scaleWidth(16),
        backgroundColor:'white',
        padding: Platform.OS==='ios'?scaleHeight(15):scaleHeight(2),
        borderRadius:scaleWidth(23)
    },
    searchTextType:{
        marginHorizontal:scaleHeight(10),
        width:'97%',
        fontFamily:FONTS.MontserratSemiBold
    }
})
const SearchNearSaloon = ({text}) => {
    return (
        <View style={style.mainConatiner}>
            <TextInput placeholder={text} style={style.searchTextType} />
        </View>
    )
}
export default SearchNearSaloon;