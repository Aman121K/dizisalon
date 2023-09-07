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
import Toast from 'react-native-simple-toast';
import AsyncStorage from "@react-native-async-storage/async-storage";
const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: scaleWidth(10),
        marginTop: scaleHeight(100)
    },
})
const CreatePin = ({ navigation }) => {
    const [createPin, setCreatePin] = React.useState();
    const [confirmPin, setConfirmPin] = React.useState();
    const [token, setToken] = React.useState();
    React.useLayoutEffect(() => {
        getToken()
    }, [])
    const getToken = async () => {
        let token = await AsyncStorage.getItem('token');
        console.log("Token is>>", token)
        if (token) {
            setToken(token)
        }
    }
    const clearAllState = () => {
        setCreatePin('')
        setConfirmPin('');
    }
    const onButtonClick = async () => {
        let body = {
            pin: confirmPin
        }
        console.log("body is>", body)
        try {
            const response = await fetch(BASE_URL + Apis.CREATE_MPIN, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(body), 
            });
            const data = await response.json();
            console.log("Create pin data>>", data)
            if (data?.message) {
                navigation.navigate(Routes.Signin)
                Toast.show(data?.message);
            } else {
                clearAllState()
                Toast.show(data?.error)
            }
        } catch (error) {
            Toast.show(error);
        }
    }
    const onChnageText = (e, name) => {
        console.log("name,e>", name)
        if (name === 'createPin') {
            setCreatePin(e)
        } else {
            setConfirmPin(e)
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
                        name="createPin"
                        value={createPin}
                        keyboardType="numeric"
                        onChnageText={onChnageText}
                        placeholder={TextConstant.create_pin_label_one}
                        secure={true}
                    />
                    <InputBoxComponent
                        name="confirmPin"
                        value={confirmPin}
                        keyboardType="numeric"
                        onChnageText={onChnageText}
                        label={TextConstant.create_pin_label_two}
                        placeholder={TextConstant.create_pin_label_one}
                        secure={true}
                    />
                </View>
                <ButtonBlue
                    onClick={onButtonClick}
                    buttonText="Continue"
                    btnStyle={{ 
                    backgroundColor: "#022A6D", 
                    height: 48, 
                    borderRadius: 12, 
                    alignItems: "center" }}
                />
            </View>
            <View>
            </View>
        </SafeAreaView>
    )
}
export default CreatePin;