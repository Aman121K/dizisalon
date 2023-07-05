import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import { TextConstant } from '../../Constant/TextConstant';
import { Images } from '../../Constant/Images';
import { normalize, scaleHeight, scaleWidth } from '../../Constant/DynamicSize';
import { FONTS } from '../../Constant/fonts';
const styles = StyleSheet.create({
    mainContainer: {
        // flex:1
        flexDirection: 'row',
        // marginTop: scaleHeight(50),
        borderWidth: .5,
        padding: scaleHeight(16),
        marginHorizontal: scaleWidth(12),
        borderColor: '#CECECE',
        borderRadius:scaleWidth(5)
    },
    inputStyle: {
        marginLeft: scaleWidth(20),
        fontSize: normalize(14),
        fontFamily: FONTS.MontserratRegular
    }
})
const SearchConatiner = () => {
    return (
        <View style={styles.mainContainer}>
            <Image source={Images.SEARCH_ICON} />
            <TextInput style={styles.inputStyle} placeholder={TextConstant.SEARCH_TEXT} />
        </View>
    )
}
export default SearchConatiner;