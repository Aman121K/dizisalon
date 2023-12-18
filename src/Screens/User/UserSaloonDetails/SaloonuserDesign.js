import React from "react";
import { Image, StyleSheet, View, Text } from 'react-native';
import { Images } from "../../../Constant/Images";
import { normalize, scaleHeight } from "../../../Constant/DynamicSize";
import { FONTS } from "../../../Constant/fonts";
const style = StyleSheet.create({
    mainConatiner: {
        top: scaleHeight(-80),
        flexDirection: 'row',
        alignItems: 'center'
    },
    userConatiner: {
        marginTop: scaleHeight(30)
    },
    starConatiner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    reviewStyle: {
        marginLeft: scaleHeight(10),
        fontFamily: FONTS.MontserratRegular,
        fontSize: normalize(10)
    },
    userNameStyle: {
        fontSize: normalize(20),
        fontFamily: FONTS.MontserratSemiBold,
    },
    saloonName: {
        fontSize: normalize(15),
        fontFamily: FONTS.MontserratSemiBold,
        lineHeight: scaleHeight(20)
    }
})
const SaloonuserDesign = () => {
    return (
        <>
            <View style={style.mainConatiner}>
                <Image source={Images.SaloonUser} />
                <View style={style.userConatiner}>
                    <Text style={style.userNameStyle}>James Doe</Text>
                    <Text style={style.saloonName}>Salon Name</Text>
                    <View style={style.starConatiner}>
                        <Image source={Images.STAR} />
                        <Image source={Images.STAR} />
                        <Image source={Images.STAR} />
                        <Image source={Images.STAR} />
                        <Image source={Images.STAR} />
                        <Text style={style.reviewStyle}>4.0 102 Review</Text>
                    </View>
                </View>
            </View>

        </>
    )
}
export default SaloonuserDesign;