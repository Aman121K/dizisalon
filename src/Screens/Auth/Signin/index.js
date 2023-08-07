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

    const [mobile, setMobile] = React.useState();
    const [mpin, setMpin] = React.useState();
    const goToSignup = () => {
        navigation.navigate(Routes.Signup)
    }
    const goToforgotScreen = () => {
        navigation.navigate(Routes.CreatePin)
    }
    const onChnageText = (Items) => {
        console.log("Items>>", Items)
    }
    const TabTypesValues = React.useContext(TabContext);

    const onSigninClick = () => {
        console.log("vika", type)
        dispatch(loginApi())
        if (type === 'For Salon') {
            TabTypesValues.setBottomType(type)
            navigation.navigate('BarberBottoNavigation', { type: type })
        } else {
            TabTypesValues.setBottomType(type)
            navigation.navigate('UserBottomNavigtion', { type: type })
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
                        <InputBoxComponent value={mobile} onChnageText={onChnageText} label={TextConstant.SignIn_label_one} placeholder={TextConstant.SignIn_placeholder_one} keyboardType="numeric" />
                        <InputBoxComponent value={mpin} onChnageText={onChnageText} label={TextConstant.SignIn_label_two} placeholder={TextConstant.SignIn_placeholder_two} />
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