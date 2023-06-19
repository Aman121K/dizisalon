import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { TextConstant } from '../../Constant/TextConstant';
import { normalize, scaleHeight, scaleWidth } from '../../Constant/DynamicSize';
import { FONTS } from '../../Constant/fonts';
import { COLORS } from '../../Constant/Colors';
const styles = StyleSheet.create({
    mainContainer: {
        padding: scaleHeight(15),
        alignItems: 'center',
        marginTop: scaleHeight(24),
        backgroundColor: '#F8F8F8',
        borderRadius: scaleWidth(5),
        borderColor: '#F8F8F8',
        elevation: 10,
        opacity: 5,
        paddingHorizontal: scaleWidth(25),
        paddingVertical: scaleHeight(21)
    },
    imageStyle: {

    },
    textStyle: {
        marginTop: scaleHeight(10.5),
        // marginHorizontal: scaleWidth(25),
        fontSize: normalize(20),
        fontFamily: FONTS.MontserratRegular,
        lineHeight: scaleHeight(31),
        color: COLORS.RGB022A6D
    }
})
const SaloonType = ({ level, image, onClick }) => {
    return (
        <TouchableOpacity style={styles.mainContainer} onPress={() => onClick(level)}>
            <Image source={image} />
            <Text style={styles.textStyle}>{level}</Text>
        </TouchableOpacity>
    )
}
export default SaloonType;