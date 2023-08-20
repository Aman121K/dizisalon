// import React from "react";
// import {} from 'react-native';
// const UserSignup=()=>{
//     return(

//     )
// }
// export default UserSignup;

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
// import OTPInputView from '@twotalltotems/react-native-otp-input'
import ButtonBlue from "../../../Components/Button_Blue";
import { normalize, scaleHeight, scaleWidth } from "../../../Constant/DynamicSize";
import { FONTS } from "../../../Constant/fonts";
import { Routes } from "../../../Constant/Routes";
import { Apis, BASE_URL } from "../../../Constant/APisUrl";
import InnerTexttInput from "../../../Components/InnerTextInput";
import DropDownPicker from "react-native-dropdown-picker";
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
    const [Address, setAddress] = React.useState();
    const [state, setState] = React.useState();
    const [city, setCity] = React.useState();
    const [zipcode, setZipCode] = React.useState();
    const [sex, setSex] = React.useState();
    const [dob, setDob] = React.useState();
    const onSignupClick = async () => {
        let body = {
            signupFor: "saloon", // user and salon
            fullname: ownerName, // for user
            salonName: saloonName, // for salon
            salonOwnerName: ownerName, // for salon
            countryCode: "+91", // for salon
            phone: mobile, // for salon
            email: email, // for both
            dob: "", // for user
            gender: "1", // for user
            address: "", // for user
            state: "hp", // for user
            country: "", // for user
            zipcode: "", // for user
            fcmToken: "", // for both
            otp: "1234" // for both
        }
        const response = await fetch(BASE_URL + Apis.SINUP_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body), // Replace with your data
        });
        const data = await response.json();
        navigation.navigate(Routes.CreatePin)
    }
    const onChangeText = (e, name) => {
        switch (name) {
            case 'value':

                break;

            default:
                break;
        }
        // setUserdata(prevData => ({
        //     ...prevData,
        //     [name]: e,
        // }));

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
                        name="salonOwnerName"
                        onChnageText={onChangeText}
                        label={TextConstant.SignUp_label_one}
                        placeholder={TextConstant.SignUp_placeholder_one}
                    />
                    <InputBoxComponent
                        name="saloonName"
                        onChnageText={onChangeText}
                        label={TextConstant.SignUp_label_two}
                        placeholder={TextConstant.SignUp_placeholder_two}
                    />
                    <View style={styles.phoneConatiner}>
                        <InputBoxComponent
                            name="Mobile"
                            onChnageText={onChangeText}
                            label={TextConstant.Phone_number}
                            size={248} placeholder=
                            {TextConstant.Phone_number}
                        />
                        <TouchableOpacity style={styles.sendConatiner}>
                            <Text style={styles.sendText}>Send</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>{TextConstant.OTP_NUMBER}</Text>
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
                        onChnageText={onChangeText}
                        label={TextConstant.signUp_label_five}
                        placeholder={TextConstant.signUp_label_five}
                    />
                    <InputBoxComponent
                        name="Address"
                        onChnageText={onChangeText}
                        label={TextConstant.Signup_address}
                        placeholder={TextConstant.Signup_address}
                    />
                    <InnerTexttInput
                        placeholderText="State *"
                        value={state}
                        onChange={onChangeText}

                    />
                    <View style={{ flexDirection: 'row' }}>
                        <InnerTexttInput
                            placeholderText="city *"
                            value={state}
                            onChange={onChangeText}
                            width={20}

                        />
                        <InnerTexttInput
                            placeholderText="zipcode *"
                            value={state}
                            onChange={onChangeText}
                            width={20}
                        />
                    </View>

                </View>
                <View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft:scaleWidth(10) }}>
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
                    <View style={{top:scaleHeight(30)}}>
                        <InnerTexttInput
                            placeholderText="DD/MM/YYYY *"
                            value={state}
                            onChange={onChangeText}
                            width={20}
                        />
                    </View>
                </View>
                <View style={{marginTop:scaleHeight(40),alignSelf:'center'}}>
                <ButtonBlue
                    onClick={onSignupClick}
                    buttonText="Next"
                    btnStyle={{ backgroundColor: "#022A6D", height: 48, borderRadius: 12, alignItems: "center" }}
                />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default UserSignup;