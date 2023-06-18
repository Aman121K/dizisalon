import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import InputBoxComponent from "../../../Components/InputBoxComponent";
import AuthHeader from "../../../Components/AuthHeader";
import { TextConstant } from "../../../Constant/TextConstant";
import { StylesContants } from "../../../Constant/StylesContants";
import { Images } from "../../../Constant/Images";
import ButtonBlue from "../../../Components/Button_Blue";

const styles = StyleSheet.create({
    mainContainer:{
        marginHorizontal:10,
        marginVertical:150
     },
})

const CreatePin = () => {
    return (
        <View>
            <AuthHeader backbutton={true} />
            <View style={styles.mainContainer}>
                <View>
                    <Text style={StylesContants.auth_screen_heading}>{TextConstant.create_pin_heading}</Text>
                    <Text style={StylesContants.auth_screen_subHeading}>{TextConstant.create_pin_subheading}</Text>
                </View>
                <View>
                <InputBoxComponent label={TextConstant.create_pin_label_one} placeholder={TextConstant.create_pin_label_one} secure={true} />
                <InputBoxComponent label={TextConstant.create_pin_label_two} placeholder={TextConstant.create_pin_label_one} secure={true}/>
                </View>
                <ButtonBlue buttonText="Continue" btnStyle={{backgroundColor:"#022A6D",height:48, borderRadius:12, alignItems:"center"}}/>
            </View>
            <View>
            </View>
        </View>
    )
}
export default CreatePin;