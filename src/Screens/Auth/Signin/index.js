import React from "react";
import { StyleSheet, View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import InputBoxComponent from "../../../Components/InputBoxComponent";
import AuthHeader from "../../../Components/AuthHeader";
import { TextConstant } from "../../../Constant/TextConstant";
import { StylesContants } from "../../../Constant/StylesContants";
import { Images } from "../../../Constant/Images";
import ButtonBlue from "../../../Components/Button_Blue";
import { Routes } from "../../../Constant/Routes";
import { FONTS } from "../../../Constant/fonts";
import { useDispatch, useSelector } from "react-redux";
import { TabContext } from "../../../Context/TabProvider";
import { normalize, scaleHeight, scaleWidth } from "../../../Constant/DynamicSize";
import { loginApi } from "../../../redux/action";
import { Apis, BASE_URL } from "../../../Constant/APisUrl";
import { LOGIN_API } from "../../../redux/Constant";
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginHorizontal: scaleWidth(15),
        marginVertical: scaleHeight(5)
    },
    location_img: {
        marginVertical: scaleHeight(37)
    },
    bottom_info_text: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8
    },
    left_side: {
        flexDirection: "row",
        fontSize: 12
    },
    new_user_txt: {
        fontSize: normalize(11),
        fontFamily: FONTS.MontserratRegular,
        lineHeight: scaleHeight(13.5)
    },
    sign_up_txt: {
        marginLeft: 4,
        fontSize: normalize(11),
        color: "#022A6D",
        textDecorationLine: 'underline',
        fontFamily: FONTS.MontserratRegular,
        lineHeight: scaleHeight(13.5)
    },
    forgot_txt: {
        fontSize: normalize(11),
        fontFamily: FONTS.MontserratSemiBold,
        lineHeight: scaleHeight(13.5),
        color: "#022A6D",
    }
})
const Signin = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.reducer)
    console.log("on sgnin redux>>", data)
    const type = route?.params?.type;
    const [loginData, setlogindata] = React.useState({})
    const [mobile, setMobile] = React.useState();
    const [pin, setPin] = React.useState();
    const goToSignup = () => {
        console.log("Signup page ", route)
        switch (route?.type) {
            case 'saloon':
                navigation.navigate(Routes.Signup)
                break;
            case 'For User':
                navigation.navigate(Routes.UserSignup)
                break;
            default:
                navigation.navigate(Routes.UserSignup)
                break;
        }
    }
    const goToforgotScreen = () => {
        navigation.navigate(Routes.CreatePin)
    }
    const onChnageText = (name, e) => {
        console.log("vika", name, e)
        switch (name) {
            case 'phone':
                setMobile(e);
                console.log('phone')
                break;
            case 'pin':
                setPin(e);
                console.log('pin')
                break;
            default:
                break;
        }
    }
    const TabTypesValues = React.useContext(TabContext);
    const onSigninClick = async () => {
        let body = {
            mobile: mobile,
            pin: pin
        }
        console.log("body is>", body)
        try {
            const response = await fetch(BASE_URL + Apis.LOGIN_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body), // Replace with your data
            });

            const data = await response.json();
            console.log("response is>>", data)
        } catch (error) {
            console.error('Error:', error);
        }
        // if (type === 'For Salon') {
        //     TabTypesValues.setBottomType(type)
        //     navigation.navigate('BarberBottoNavigation', { type: type })
        // } else {
        //     TabTypesValues.setBottomType(type)
        //     navigation.navigate('UserBottomNavigtion', { type: type })
        // }
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <AuthHeader backbutton={true} navigation={navigation} />
                <View style={styles.mainContainer}>
                    <Image style={styles.location_img} source={Images.SIGN_IN_LOCATION} />
                    <View>
                        <Text style={StylesContants.auth_screen_heading}>{TextConstant.SignIn_heading}</Text>
                        <Text style={StylesContants.auth_screen_subHeading}>{TextConstant.SignIn_subHeading}</Text>
                    </View>
                    <View>
                        <InputBoxComponent limit={10}
                            name="phone"
                            onChnageText={onChnageText}
                            value={loginData?.mobile} label={TextConstant.SignIn_label_one}
                            placeholder={TextConstant.SignIn_placeholder_one}
                            keyboardType="numeric" />
                        <InputBoxComponent
                            limit={4}
                            name="pin"
                            onChnageText={onChnageText}
                            value={loginData?.mpin}
                            label={TextConstant.SignIn_label_two}
                            placeholder={TextConstant.SignIn_placeholder_two}
                            keyboardType="numeric" />
                    </View>
                    <ButtonBlue buttonText="Sign In" onClick={onSigninClick} />
                    <View style={styles.bottom_info_text}>
                        <View style={styles.left_side}>
                            <Text style={styles.new_user_txt}>
                                {TextConstant.signIn_bottomInfoText_left_one}
                            </Text>
                            <Text style={styles.sign_up_txt} onPress={() => goToSignup()}>
                                {TextConstant.signIn_bottomInfoText_left_two}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.forgot_txt} onPress={() => goToforgotScreen()} >
                                {TextConstant.signIn_bottomInfoText_right}
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Signin;