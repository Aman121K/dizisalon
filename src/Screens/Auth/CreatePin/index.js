import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, Alert } from 'react-native';
import InputBoxComponent from "../../../Components/InputBoxComponent";
import AuthHeader from "../../../Components/AuthHeader";
import { TextConstant } from "../../../Constant/TextConstant";
import { StylesContants } from "../../../Constant/StylesContants";
import { Images } from "../../../Constant/Images";
import ButtonBlue from "../../../Components/Button_Blue";
import { scaleHeight, scaleWidth } from "../../../Constant/DynamicSize";
import { Routes } from "../../../Constant/Routes";
import { Apis, BASE_URL } from "../../../Constant/APisUrl";
const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: scaleWidth(10),
        marginTop: scaleHeight(100)
    },
})
const CreatePin = ({ navigation }) => {
    const [createPin,setCreatePin]=React.useState();
    const [confirmPin,setConfirmPin]=React.useState();
    const onButtonClick = async() => {
        if(createPin===confirmPin){
        let body = {
            pin: confirmPin
        }
        console.log("body is>", body)
        try {
            const response = await fetch(BASE_URL + Apis.CREATE_MPIN, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body), // Replace with your data
            });

            const data = await response.json();
            console.log("response create pin is>>", data)
        } catch (error) {
            console.error('Error:', error);
        }
        navigation.navigate('UserBottomNavigtion')
    }else{
        Alert.alert("Both Pin is not same")
    }
    }
    return (
        <SafeAreaView>
            <AuthHeader backbutton={true} navigation={navigation} />
            <View style={styles.mainContainer}>
                <View>
                    <Text style={StylesContants.auth_screen_heading}>{TextConstant.create_pin_heading}</Text>
                    <Text style={StylesContants.auth_screen_subHeading}>{TextConstant.create_pin_subheading}</Text>
                </View>
                <View>
                    <InputBoxComponent
                        label={TextConstant.create_pin_label_one}
                        placeholder={TextConstant.create_pin_label_one} secure={true}
                    />
                    <InputBoxComponent
                        label={TextConstant.create_pin_label_two}
                        placeholder={TextConstant.create_pin_label_one}
                        secure={true} />
                </View>
                <ButtonBlue
                    onClick={onButtonClick}
                    buttonText="Continue"
                    btnStyle={{ backgroundColor: "#022A6D", height: 48, borderRadius: 12, alignItems: "center" }}
                />
            </View>
            <View>
            </View>
        </SafeAreaView>
    )
}
export default CreatePin;