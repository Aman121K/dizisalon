import React, { memo } from "react";
import { View, Text, StyleSheet, Image, TextInput, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import AuthHeader from "../../../Components/AuthHeader";
import InputBoxComponent from "../../../Components/InputBoxComponent";
import { TextConstant } from "../../../Constant/TextConstant";
import { StylesContants } from "../../../Constant/StylesContants";
import { Images } from "../../../Constant/Images";
import OTPInputView from '@twotalltotems/react-native-otp-input'
import ButtonBlue from "../../../Components/Button_Blue";
import { normalize, scaleHeight, scaleWidth } from "../../../Constant/DynamicSize";
import { FONTS } from "../../../Constant/fonts";
const styles = StyleSheet.create({
    mainContainer: {
        width: '95%',
        alignSelf: 'center'
    },
    location_img: {
        marginVertical: scaleHeight(37)
    },
    phone_no_field: {
        flexDirection: "row",
        alignItems: "center",
    },
    inputField: {
        height: scaleHeight(50),
        borderWidth: 2,
        padding: scaleHeight(10),
        borderColor: "#CECECE",
        borderRadius: 12,
        color: "#6C6C6C",
        fontSize: normalize(16),
        paddingLeft: scaleWidth(22),
        width: scaleWidth(260)
    },
    phoneConatiner: {
        flexDirection: 'row',
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

})

const Signup = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: scaleWidth(10) }}>
                <AuthHeader navigation={navigation} backbutton={true} />
                <View style={styles.mainContainer}>
                    <Image style={styles.location_img} source={Images.SIGN_IN_LOCATION} />
                    <Text style={StylesContants.auth_screen_heading}>{TextConstant.SignUp_heading}</Text>
                    <Text style={StylesContants.auth_screen_subHeading}>{TextConstant.SignUp_subHeading}</Text>
                    <InputBoxComponent label={TextConstant.SignUp_label_one} placeholder={TextConstant.SignUp_placeholder_one} keyboardType="numeric" />
                    <InputBoxComponent label={TextConstant.SignUp_label_two} placeholder={TextConstant.SignUp_placeholder_two} />
                    <View style={styles.phoneConatiner}>
                        <InputBoxComponent label={TextConstant.Phone_number} size={248} placeholder={TextConstant.Phone_number} />
                        <TouchableOpacity style={styles.sendConatiner}>
                            <Text style={styles.sendText}>Send</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>{TextConstant.OTP_NUMBER}</Text>
                        <OTPInputView
                            style={{ width: '70%', height: 100 }}
                            pinCount={4}
                            autoFocusOnLoad
                            codeInputFieldStyle={styles.underlineStyleBase}
                            codeInputHighlightStyle={styles.underlineStyleHighLighted}
                            onCodeFilled={(code => {
                                console.log(`Code is ${code}, you are good to go!`)
                            })}
                        />
                    </View>
                    <InputBoxComponent label={TextConstant.signUp_label_five} placeholder={TextConstant.signUp_label_five} />
                    <ButtonBlue buttonText="Sign Up" btnStyle={{ backgroundColor: "#022A6D", height: 48, borderRadius: 12, alignItems: "center" }} />
                </View>
                <View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Signup;