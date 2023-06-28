import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { normalize, scaleHeight, scaleWidth } from '../../Constant/DynamicSize'
import { FONTS } from '../../Constant/fonts'

const styles = StyleSheet.create({
    btnText: {
        color: "#fff",
        textAlign: "center",
        fontSize: normalize(16),
        lineHeight: scaleHeight(20),
        paddingVertical: scaleHeight(16),
        fontFamily: FONTS.MontserratSemiBold
    },
    btnText1: {
        color: "#fff",
        textAlign: "center",
        fontSize: normalize(16),
        lineHeight: scaleHeight(20),
        paddingVertical: scaleHeight(16),
        fontFamily: FONTS.MontserratSemiBold
    },
    btnStyle: {
        backgroundColor: "#022A6D",
        height: scaleHeight(48),
        borderRadius: scaleHeight(12),
        alignItems: "center",
        // width:scaleWidth(330)
    }
})

const Simplebutton = ({ buttonText, onClick, isclick }) => {
    return (
        <TouchableOpacity style={isclick ? styles.btnStyle : styles?.btnText1} onPress={onClick}>
            <Text style={styles.btnText}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

export default Simplebutton