import React from "react";
import { SafeAreaView, View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Images } from "../../../Constant/Images";
import UserCartHeader from "../../../Components/UserCartHeader";
import { normalize, scaleHeight, scaleWidth } from "../../../Constant/DynamicSize";
import { FONTS } from "../../../Constant/fonts";
import { TextConstant } from "../../../Constant/TextConstant";
import InputBoxComponent from "../../../Components/InputBoxComponent";
import ButtonBlue from "../../../Components/Button_Blue";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { Routes } from "../../../Constant/Routes";
const style = StyleSheet.create({
    scrollConatiner: {
        height: '100%'
    },
    bgImage: {
        alignSelf: 'center',
        marginTop: scaleHeight(36)
    },
    bgText: {
        textAlign: 'center',
        alignSelf: 'center',
        marginHorizontal: scaleWidth(64.5),
        fontSize: normalize(14),
        fontFamily: FONTS.MontserratRegular,
        lineHeight: scaleHeight(20)
    },
    phoneConatiner: {
        flexDirection: 'row',
        marginLeft: scaleWidth(20)
    },
    sendConatiner: {
        backgroundColor: '#022A6D',
        alignItems: 'center',
        height: scaleHeight(50),
        textAlign: 'center',
        padding: scaleHeight(15),
        borderRadius: scaleHeight(12),
        top: scaleHeight(40),
        marginHorizontal: scaleWidth(8)
    },
    sendText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: FONTS.MontserratSemiBold,
        fontSize: normalize(15)
    },
    submitConatuner: {
        alignSelf: 'center',
    },
    borderStyleHighLighted: {
        borderColor: "black",
    },

    underlineStyleBase: {
        width: scaleWidth(45),
        height: scaleHeight(45),
        borderWidth: 1,
        borderColor: '#CECECE',
        borderRadius: scaleWidth(12)
        // borderBottomWidth: 1,
    },
    OTPConatiner: {
        marginLeft: scaleWidth(20)
    },
    OTPText: {
        fontFamily: normalize(16),
        fontFamily: FONTS.MontserratMedium
    }
})
const ForgotMpin = ({ navigation }) => {
    const callResendOtp = () => {

    }
    const onClick = () => {
        navigation.navigate(Routes.Signin, { type: 'user' })
    }
    return (
        <SafeAreaView>
            <UserCartHeader title="Forget MPIN" navigation={navigation} />
            <ScrollView style={style.scrollConatiner}>
                <Image source={Images.ForgotMpin_bg} style={style.bgImage} />
                <Text style={style.bgText}>Please Enter Your Phone Number or Email Address To Receive a Verification Code.</Text>
                <View style={style.phoneConatiner}>
                    <InputBoxComponent label={TextConstant.Phone_number} size={248} placeholder={TextConstant.Phone_number} />
                    <TouchableOpacity style={style.sendConatiner}>
                        <Text style={style.sendText}>Send</Text>
                    </TouchableOpacity>

                </View>
                <View style={style.OTPConatiner}>
                    <Text style={style.OTPText}>{TextConstant.OTP_NUMBER}</Text>
                    <OTPInputView
                        style={{ width: '70%', height: 100 }}
                        pinCount={4}
                        autoFocusOnLoad
                        codeInputFieldStyle={style.underlineStyleBase}
                        codeInputHighlightStyle={style.underlineStyleHighLighted}
                        onCodeFilled={(code => {
                            console.log(`Code is ${code}, you are good to go!`)
                        })}
                    />
                    <Text style={[style.OTPText, { alignSelf: 'flex-end', marginRight: scaleWidth(30), marginVertical: scaleHeight(10) }]} onPress={() => callResendOtp()}>Send</Text>
                </View>
                <View style={style.submitConatuner}>
                    <ButtonBlue onClick={onClick} buttonText={TextConstant.Submit} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default ForgotMpin;