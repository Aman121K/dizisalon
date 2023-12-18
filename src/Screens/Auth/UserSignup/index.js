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
} from 'react-native';
import AuthHeader from "../../../Components/AuthHeader";
import InputBoxComponent from "../../../Components/InputBoxComponent";
import { TextConstant } from '../../../Constant/TextConstant';
import { StylesContants } from "../../../Constant/StylesContants";
import { Images } from "../../../Constant/Images";
import ButtonBlue from "../../../Components/Button_Blue";
import { normalize, scaleHeight, scaleWidth } from "../../../Constant/DynamicSize";
import { FONTS } from "../../../Constant/fonts";
import { Routes } from "../../../Constant/Routes";
import { Apis, BASE_URL } from "../../../Constant/APisUrl";
import InnerTexttInput from "../../../Components/InnerTextInput";
import DropDownPicker from "react-native-dropdown-picker";
import Toast from 'react-native-simple-toast';
import AsyncStorage from "@react-native-async-storage/async-storage";
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
const UserSignup = ({ navigation }) => {
    const [selectedItem, setSelectedItem] = React.useState(null);
    const items = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Transgender', value: 'Transgender' },
    ];
    const [fullName, setFullName] = React.useState();
    const [mobile, setMobile] = React.useState();
    const [otp, setOtp] = React.useState();
    const [email, setEmail] = React.useState();
    const [Address, setAddress] = React.useState();
    const [state, setState] = React.useState();
    const [city, setCity] = React.useState();
    const [zipcode, setZipCode] = React.useState();
    const [sex, setSex] = React.useState();
    const [dob, setDob] = React.useState();
    const clearAllState=()=>{
        setFullName('');
        setMobile('');
        setOtp('');
        setEmail('')
        setAddress('')
        setCity('')
        setState('')
        setSex('')
        setZipCode('')
        setDob('')
    }
    const onSignupClick = async () => {
        let body = {
            signupFor: "user", // user and salon
            fullname: fullName, // for user
            countryCode: "+91", // for salon
            phone: mobile, // for salon
            email: email, // for both
            dob: dob, // for user
            gender: "1", // for user
            address: Address, // for user
            state: state, // for user
            country: "India", // for user
            zipcode: zipcode, // for user
            fcmToken: "", // for both
            otp: otp, // for both
            longitude: "31.1048",
            latitude: "77.1734"

        }
        const response = await fetch(BASE_URL + Apis.SINUP_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body), // Replace with your data
        });
        const data = await response.json();
        if (data?.message) {
            await AsyncStorage.setItem('token', data?.token);
            clearAllState()
            navigation.navigate(Routes.CreatePin)
            Toast.show(data?.message);
        } else {
            // clearAllState()
            Toast.show(data?.error)
        }
    }
    const onChangeText = (e, name) => {
        console.log("(e, name singup page",e, name)
        switch (name) {
            case 'fullName':
                setFullName(e)
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
            case 'Address':
                setAddress(e)
                break;
            case 'state':
                setState(e)
                break;
            case 'city':
                setCity(e)
                break;
            case 'zipCode':
                setZipCode(e)
                break;
            case 'DOB':
                if (e.length <= 10) {
                    if (e.length === 2 || e.length === 5) {
                      if (e.length > dob.length) {
                        e += '/';
                      }
                    }
                    setDob(e);
                  }
                break;
            default:
                break;
        }
    }
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: scaleWidth(10) }}>
                <AuthHeader navigation={navigation} backbutton={true} />
                <View style={styles.mainContainer}>
                    <Image style={styles.location_img} source={Images.SIGN_IN_LOCATION} />
                    <Text style={StylesContants.auth_screen_heading}>{TextConstant.SignUp_heading}</Text>
                    <Text style={StylesContants.auth_screen_subHeading}>{TextConstant.SignUp_subHeading}</Text>
                    <InputBoxComponent
                        name="fullName"
                        onChnageText={onChangeText}
                        value={fullName}
                        label="Enter Full Name*"
                        placeholder="Enter Full Name*"
                    />
                    <View style={styles.phoneConatiner}>
                        <InputBoxComponent
                            name="Mobile"
                            keyboardType="numeric"
                            value={mobile}
                            onChnageText={onChangeText}
                            label={TextConstant.Phone_number}
                            size={248} 
                            placeholder={TextConstant.Phone_number}
                        />
                        <TouchableOpacity style={styles.sendConatiner}>
                            <Text style={styles.sendText}>Send</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <InputBoxComponent
                            name="OTP"
                            limit={4}
                            value={otp}
                            keyboardType="numeric"
                            onChnageText={onChangeText}
                            label={TextConstant.OTP_NUMBER}
                            size={248}
                            placeholder={TextConstant.OTP_NUMBER}
                        />
                    </View>
                    <InputBoxComponent
                        name="Email"
                        value={email}
                        onChnageText={onChangeText}
                        label={TextConstant.signUp_label_five}
                        placeholder={TextConstant.signUp_label_five}
                    />
                    <InputBoxComponent
                        name="Address"
                        value={Address}
                        onChnageText={onChangeText}
                        label={TextConstant.Signup_address}
                        placeholder={TextConstant.Signup_address}
                    />
                    <InnerTexttInput
                        name="state"
                        placeholderText="State *"
                        value={state}
                        onChange={onChangeText}

                    />
                    <View style={{ flexDirection: 'row' }}>
                        <InnerTexttInput
                            placeholderText="city *"
                            value={city}
                            name="city"
                            onChange={onChangeText}
                            width={20}

                        />
                        <InnerTexttInput
                            placeholderText="zipcode *"
                            value={zipcode}
                            limit={6}
                            name="zipCode"
                            keyboardType="numeric"
                            onChange={onChangeText}
                            width={20}
                        />
                    </View>

                </View>
                <View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: scaleWidth(10) }}>
                    <View>
                        <Text>Gender</Text>
                        <DropDownPicker
                            items={items}
                            defaultValue={null}
                            containerStyle={{ height: 10, marginTop: 10, width: 180 }}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{ backgroundColor: '#fafafa' }}
                            onChangeItem={(item) => setSelectedItem(item.value)}
                        />
                    </View>
                    <View style={{ top: scaleHeight(30) }}>
                        <InnerTexttInput
                            placeholderText="DD/MM/YYYY*"
                            value={dob}
                            name="DOB"
                            keyboardType="numeric"
                            onChange={onChangeText}
                            width={20}
                        />
                    </View>
                </View>
                <View style={{ marginTop: scaleHeight(40), alignSelf: 'center' }}>
                    <ButtonBlue
                        onClick={onSignupClick}
                        buttonText="Next"
                        btnStyle={{ 
                            backgroundColor: "#022A6D", 
                            height: 48, 
                            borderRadius: 12, 
                            alignItems: "center" 
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default UserSignup;