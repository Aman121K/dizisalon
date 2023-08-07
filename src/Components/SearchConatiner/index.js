import React from 'react';
import { Image, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { TextConstant } from '../../Constant/TextConstant';
import { Images } from '../../Constant/Images';
import { normalize, scaleHeight, scaleWidth } from '../../Constant/DynamicSize';
import { FONTS } from '../../Constant/fonts';
const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        borderWidth: .5,
        padding: scaleHeight(Platform.OS === 'ios' ? 16 : 2),
        marginHorizontal: scaleWidth(12),
        borderColor: '#CECECE',
        borderRadius: scaleWidth(5),
        alignItems: 'center'
    },
    inputStyle: {
        marginLeft: scaleWidth(20),
        fontSize: normalize(14),
        fontFamily: FONTS.MontserratRegular,
        width: "90%"
    }
})
const SearchConatiner = ({placeholdertext}) => {
    return (
        <View style={styles.mainContainer}>
            <Image source={Images.SEARCH_ICON} />
            <TextInput style={styles.inputStyle} placeholder={placeholdertext?placeholdertext:TextConstant.SEARCH_TEXT} />
            
        </View>
    )
}
export default SearchConatiner;