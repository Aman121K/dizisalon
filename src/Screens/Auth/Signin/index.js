import React from "react";
import { StyleSheet,View, Text,Image } from 'react-native';
import InputBoxComponent from "../../../Components/InputBoxComponent";
import AuthHeader from "../../../Components/AuthHeader";
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
    bottom_info_text:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:8
    },
    left_side:{
        flexDirection:"row",
        fontSize:12
    },
    new_user_txt:{
        fontSize:14,
        fontWeight:400
    },
    sign_up_txt:{
        marginLeft:4,
        fontSize:14,
        color:"#022A6D",
        fontWeight:500
    },
    forgot_txt:{
        marginLeft:4,
        fontSize:14,
        color:"#022A6D",
        fontWeight:500
    }
})
const Signin = () => {
    return (
        <View>
            <AuthHeader backbutton={true} />
            <View style={styles.mainContainer}>
            <Image style={styles.location_img} source={Images.SIGN_IN_LOCATION} />
                <View>
                    <Text style={StylesContants.auth_screen_heading}>{TextConstant.SignIn_heading}</Text>
                    <Text style={StylesContants.auth_screen_subHeading}>{TextConstant.SignIn_subHeading}</Text>
                </View>
                <View>
                <InputBoxComponent label={TextConstant.SignIn_label_one} placeholder={TextConstant.SignIn_placeholder_one} keyboardType="numeric" />
                <InputBoxComponent label={TextConstant.SignIn_label_two} placeholder={TextConstant.SignIn_placeholder_two} />
                </View>
                <ButtonBlue buttonText="Sign In" />
                <View style={styles.bottom_info_text}>
                    <View style={styles.left_side}>
                        <Text style={styles.new_user_txt}>
                            {TextConstant.signIn_bottomInfoText_left_one}
                        </Text>
                        <Text style={styles.sign_up_txt}>
                            {TextConstant.signIn_bottomInfoText_left_two}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.forgot_txt}>
                            {TextConstant.signIn_bottomInfoText_right}
                        </Text>
                    </View>
                </View>
            </View>
            <View>
            </View>
        </View>
    )
}
export default Signin;