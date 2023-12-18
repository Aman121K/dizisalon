import React, { memo } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from 'react-native';
import AuthHeader from "../../../Components/AuthHeader";
import InputBoxComponent from "../../../Components/InputBoxComponent";
import { TextConstant } from '../../../Constant/TextConstant';
import { StylesContants } from "../../../Constant/StylesContants";
import { Images } from "../../../Constant/Images";
// import OTPInputView from '@twotalltotems/react-native-otp-input'
import ButtonBlue from "../../../Components/Button_Blue";
import { normalize, scaleHeight, scaleWidth } from "../../../Constant/DynamicSize";
import { FONTS } from "../../../Constant/fonts";
import { Routes } from "../../../Constant/Routes";
import { Apis, BASE_URL } from "../../../Constant/APisUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Toast } from "react-native-toast-message/lib/src/Toast";
import Toast from 'react-native-simple-toast';
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
    const [userdata, setUserdata] = React.useState({
        signupFor: "user", // user and salon
        fullname: "amit", // for user
        salonName: "", // for salon
        salonOwnerName: "", // for salon
        countryCode: "+91", // for salon
        phone: "7018915631", // for salon
        email: "sankhyan.ameit@gmail.com", // for both
        dob: "", // for user
        gender: "1", // for user
        address: "dsfsfs", // for user
        state: "hp", // for user
        country: "", // for user
        zipcode: "", // for user
        fcmToken: "", // for both
        otp: "1234" // for both

    });
    const [saloonName, setSaloonName] = React.useState();
    const [ownerName, setOwnerName] = React.useState();
    const [mobile, setMobile] = React.useState();
    const [otp, setOtp] = React.useState();
    const [email, setEmail] = React.useState();
    const [loader, setLoader] = React.useState(false);
    const clearAllState = () => {
        setSaloonName('');
        setMobile('');
        setOtp('');
        setEmail('')
        setOwnerName('')
    }
    const onSignupClick = async () => {
        
        if (!ownerName && !saloonName && !mobile && !otp && !email) {
            Toast.show('Please fill all the filed')
            // navigation.navigate(Routes.CreatePin)
        } else {
            setLoader(true)
            let body = {
                // "salonName":"Max unisex salon", 
                // "salonOwnerName":"Vikas singh choudhary", 
                // "salonPhoneNumber":"7973070604",
                // "countryCode":"+91", 
                // "phone":"7973070604",
                // "gender":"male",
                // "email":"newSalon@unisoll.com",
                // "otp":"123456"
                signupFor: "salon", // user and salon
                salonName: saloonName ? saloonName : '', // for salon
                salonOwnerName: ownerName ? ownerName : '', // for salon
                countryCode: "+91", // for salon
                salonPhoneNumber: mobile ? mobile : '', // for salon
                phone:mobile ? mobile : '',
                email: email ? email : '', // for both
                gender:'',
                fcmToken: "", // for both
                otp: otp ? otp : '', // for both
                longitude: "31.1048",
                latitude: "77.1734"
            }
            await fetch(BASE_URL + Apis.SINUP_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body), // Replace with your data
            }).then((res) => res.json()).then(async (data) => {
                if (data.status === 200) {
                    await AsyncStorage.setItem('token', data?.token);
                    setLoader(false)
                    clearAllState();
                    Toast.show(data?.message);
                    navigation.navigate(Routes.CreatePin)
                } else {
                    setLoader(false)
                    console.log("salon singup fail",data)
                    // Toast.show(data?.message);
                }
            }).catch((err) => {
                setLoader(false)
                console.log(err)
            })
        }
    }
    const onChangeText = (e, name) => {
        console.log("e, name", e, name)
        switch (name) {
            case 'salonOwnerName':
                setOwnerName(e)
                break;
            case 'saloonName':
                setSaloonName(e)
                break;
            case 'Mobile':
                setMobile(e)
                break;
            case 'OTP':
                setOtp(e)
                break;
            case 'Email':
                setEmail(e)
                break;
            default:
                break;
        }
    }
    const sendOtps = () => {
        const body = {
            countryCode: "+91",
            phone: mobile
        }
        console.log("body >>", body)
        fetch(BASE_URL + Apis.SEND_OTP, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body), // Replace with your data
        }).then((res) => res.json()).then((data) => {
            console.log("OTP data", data)
            if (data?.status === 200) {
                Toast.show(data?.message)
            } else {
                Toast.show(data?.message)
            }
        }).catch((err) => {
            console.log("OTP erro", err)
        })
    }
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: scaleWidth(10) }}>
                <AuthHeader navigation={navigation} backbutton={true} />
                {loader ? <ActivityIndicator size={50} color="#022A6D" /> :
                    <View style={styles.mainContainer}>
                        <Image style={styles.location_img} source={Images.SIGN_IN_LOCATION} />
                        <Text style={StylesContants.auth_screen_heading}>{TextConstant.SignUp_heading}</Text>
                        <Text style={StylesContants.auth_screen_subHeading}>{TextConstant.SignUp_subHeading}</Text>
                        <InputBoxComponent
                            name="salonOwnerName"
                            value={ownerName}
                            onChnageText={onChangeText}
                            label={TextConstant.SignUp_label_one}
                            placeholder={TextConstant.SignUp_placeholder_one}
                        />
                        <InputBoxComponent
                            name="saloonName"
                            value={saloonName}
                            onChnageText={onChangeText}
                            label={TextConstant.SignUp_label_two}
                            placeholder={TextConstant.SignUp_placeholder_two}
                        />
                        <View style={styles.phoneConatiner}>
                            <InputBoxComponent
                                name="Mobile"
                                limit={10}
                                value={mobile}
                                keyboardType="numeric"
                                onChnageText={onChangeText}
                                label={TextConstant.Phone_number}
                                size={248} placeholder=
                                {TextConstant.Phone_number}
                            />
                            <TouchableOpacity onPress={() => sendOtps()} style={styles.sendConatiner}>
                                <Text style={styles.sendText}>Send</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <InputBoxComponent
                                name="OTP"
                                limit={6}
                                value={otp}
                                keyboardType="numeric"
                                onChnageText={onChangeText}
                                label={TextConstant.OTP_NUMBER}
                                size={248}
                                placeholder=
                                {TextConstant.OTP_NUMBER}
                            />
                            {/* <Text>{TextConstant.OTP_NUMBER}</Text> */}
                            {/* <OTPInputView
                            style={{ width: '70%', height: 100 }}
                            pinCount={4}
                            autoFocusOnLoad
                            codeInputFieldStyle={styles.underlineStyleBase}
                            codeInputHighlightStyle={styles.underlineStyleHighLighted}
                            onCodeFilled={(code => {
                                console.log(`Code is ${code}, you are good to go!`)
                            })}
                        /> */}
                        </View>
                        <InputBoxComponent
                            name="Email"
                            value={email}
                            onChnageText={onChangeText}
                            label={TextConstant.signUp_label_five}
                            placeholder={TextConstant.signUp_label_five}
                        />
                        <ButtonBlue
                            onClick={onSignupClick}
                            buttonText="Sign Up"
                            btnStyle={{ backgroundColor: "#022A6D", height: 48, borderRadius: 12, alignItems: "center" }}
                        />
                    </View>}
                <View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Signup;