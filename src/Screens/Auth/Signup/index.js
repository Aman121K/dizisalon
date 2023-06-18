import React from "react";
import { View, Text, StyleSheet, Image,TextInput } from 'react-native';
import AuthHeader from "../../../Components/AuthHeader";
import InputBoxComponent from "../../../Components/InputBoxComponent";
import { TextConstant } from "../../../Constant/TextConstant";
import { StylesContants } from "../../../Constant/StylesContants";
import { Images } from "../../../Constant/Images";
import ButtonBlue from "../../../Components/Button_Blue";


const styles = StyleSheet.create({
    mainContainer:{
       marginHorizontal:10,
       marginVertical:20
    },
    location_img:{
        marginVertical:37
    },
    phone_no_field:{
        flexDirection:"row",
        alignItems:"center",
    },
    inputField:{
        height: 50,
        borderWidth: 2,
        padding: 10,
        borderColor:"#CECECE",
        borderRadius:12 ,
        color:"#6C6C6C",
        fontSize:16,
        paddingLeft:22,
        width:260
    }
})

const Signup = () => {
    return (
        <View>
            <AuthHeader backbutton={true} />
            <View style={styles.mainContainer}>
            <Image style={styles.location_img} source={Images.SIGN_IN_LOCATION} />
                <View>
                    <Text style={StylesContants.auth_screen_heading}>{TextConstant.SignUp_heading}</Text>
                    <Text style={StylesContants.auth_screen_subHeading}>{TextConstant.SignUp_subHeading}</Text>
                </View>
                <View>
                <InputBoxComponent label={TextConstant.SignUp_label_one} placeholder={TextConstant.SignUp_placeholder_one} keyboardType="numeric" />
                <InputBoxComponent label={TextConstant.SignUp_label_two} placeholder={TextConstant.SignUp_placeholder_two} />
                <View style={styles.phone_no_field}>
                {/* <TextInput style={styles.inputField}/> */}
                <ButtonBlue buttonText="Send" btnStyle={{backgroundColor:"#022A6D",height:48, borderRadius:12, alignItems:"center", width:80}} /> 
                </View>
                <InputBoxComponent label={TextConstant.signUp_label_five} />
                </View>
                <ButtonBlue buttonText="Sign Up" btnStyle={{backgroundColor:"#022A6D",height:48, borderRadius:12, alignItems:"center"}} />
            </View>
            <View>
            </View>
        </View>
    )
}
export default Signup;