import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TextConstant } from "../../Constant/TextConstant";
import { Images } from "../../Constant/Images";
import { normalize, scaleHeight, scaleWidth } from "../../Constant/DynamicSize";
import { FONTS } from "../../Constant/fonts";
import ButtonBlue from "../Button_Blue";
const styles = StyleSheet.create({
    mainConatiner: {

    },
    formSubConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: scaleWidth(12)
    },
    knowConatiner: {
        backgroundColor: '#022A6D',
        padding: scaleHeight(10),
        borderRadius: scaleHeight(5)
    },
    knowText: {
        color: 'white',
        fontSize: normalize(10),
        fontFamily: FONTS.MontserratRegular
    }
}
)
const KycDetailsHome = () => {
    return (
        <View style={styles.mainConatiner}>
            <View style={styles.formSubConatiner}>
                <View>
                    <Image source={Images.kycForm} />
                </View>
                <TouchableOpacity style={styles.knowConatiner}>
                    <Text style={styles.knowText}>{TextConstant.KNOW_MORE}</Text>
                </TouchableOpacity>
            </View>
            <ButtonBlue buttonText={TextConstant.LIST_NOW} />
            
        </View>
    )
}
export default KycDetailsHome;