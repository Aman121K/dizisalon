import React from "react";
import { StyleSheet, View, Text, Image, SafeAreaView, ScrollView, Alert } from 'react-native';
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
import Toast from 'react-native-simple-toast';
import AsyncStorage from "@react-native-async-storage/async-storage";
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
        marginTop: scaleHeight(20)
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
        navigation.navigate(Routes.Signup)
    }
    const goToforgotScreen = () => {
        navigation.navigate(Routes.CreatePin)
    }
    const onChnageText = (name, e) => {
        switch (e) {
            case 'phone':
                setMobile(name);
                console.log('phone')
                break;
            case 'pin':
                setPin(name);
                console.log('pin')
                break;
            default:
                break;
        }
    }
    const TabTypesValues = React.useContext(TabContext);
    const onSigninClick = async () => {
        if (!mobile && !pin) {
            Alert.alert('Please Fill all the column')
        }
        else {
            let body = {
                phone: mobile,
                pin: pin
            }
            console.log("body>>", body)
            try {
                const response = await fetch(BASE_URL + Apis.LOGIN_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                });
                const data = await response.json();
                console.log("login data>>", data)
                if (data?.message) {
                    await AsyncStorage.setItem('token', data?.token);
                    await AsyncStorage.setItem('loginData', JSON.stringify(data?.data));
                    Toast.show(data?.message);
                    if (data?.data?.role === 2) {
                        navigation.navigate('BarberBottoNavigation')
                    } else {
                        navigation.navigate('UserBottomNavigtion')
                    }
                } else {
                    Toast.show(data?.error)
                }
            } catch (error) {
                console.error('Error:', error);
                Toast.show(error);
            }
        }
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