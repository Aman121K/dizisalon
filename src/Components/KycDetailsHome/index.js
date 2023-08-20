import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TextConstant } from "../../Constant/TextConstant";
import { Images } from "../../Constant/Images";
import { normalize, scaleHeight, scaleWidth } from "../../Constant/DynamicSize";
import { FONTS } from "../../Constant/fonts";
import ButtonBlue from "../Button_Blue";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Routes } from "../../Constant/Routes";
import KycStepper from "../KycStepper.js";
const styles = StyleSheet.create({
    mainConatiner: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: scaleHeight(10)
    },
    formSubConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: scaleWidth(12)
    },
    knowConatiner: {
        backgroundColor: '#022A6D',
        padding: scaleHeight(10),
        borderRadius: scaleHeight(5)
    },
    knowText: {
        color: 'white',
        fontSize: normalize(10),
        fontFamily: FONTS.MontserratRegular
    },
    kyctest: {
        fontSize: normalize(10),
        width: 80
    }
}
)
const KycDetailsHome = ({ navigation }) => {
    const onClick = () => {
        navigation.navigate(Routes.AddSaloonkycDetails)
    }
    return (
        <View style={styles.mainConatiner}>
            <View style={styles.formSubConatiner}>
                <View>
                    <Image source={Images.kycForm} />
                </View>
                <TouchableOpacity style={styles.knowConatiner} onPress={() => navigation.navigate(Routes.SaloonKycDetails)}>
                    <Text style={styles.knowText}>{TextConstant.KNOW_MORE}</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginVertical:20}}>
                <KycStepper />
            </View>
            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: scaleHeight(15) }}>
                <View>
                    <Text style={styles.kyctest}>Fill KYC</Text>
                    <View style={{ backgroundColor: '#022A6D', borderWidth: 5, borderRadius: 99, width: 10, margin: 10 }}></View>
                </View>
                <View>
                    <Text style={styles.kyctest}>List Salon</Text>
                    <View style={{ backgroundColor: '#022A6D', borderWidth: 5, borderRadius: 99, width: 10, margin: 10 }}></View>
                </View>
                <View>
                    <Text style={styles.kyctest}>List Barbers & Services</Text>
                    <View style={{ backgroundColor: '#022A6D', borderWidth: 5, borderRadius: 99, width: 10 }}></View>
                </View>
                <View>
                    <Text style={styles.kyctest}>Take Orders</Text>
                    <View style={{ backgroundColor: '#022A6D', borderWidth: 5, borderRadius: 99, width: 10, margin: 15 }}></View>
                </View>
            </View> */}
            {/* <ProgressSteps>
                <ProgressStep label="First Step">
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 1!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep label="Second Step">
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 2!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep label="Third Step">
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 3!</Text>
                    </View>
                </ProgressStep>
                </ProgressSteps> */}
            <ButtonBlue buttonText={TextConstant.LIST_NOW} onClick={onClick} />

        </View>
    )
}
export default KycDetailsHome;